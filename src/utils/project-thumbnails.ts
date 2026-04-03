type ThumbnailFit = "cover" | "contain";

export interface ResolvedProjectThumbnail {
  fit: ThumbnailFit;
  url: string;
}

interface ResolveProjectThumbnailOptions {
  liveUrl?: string;
  thumbnail?: string;
}

const THUMBNAIL_TIMEOUT_MS = 2000;
const META_IMAGE_PRIORITY = [
  "og:image:secure_url",
  "og:image",
  "twitter:image",
  "twitter:image:src",
  "og:logo",
  "msapplication-tileimage",
  "image",
] as const;
const thumbnailCache = new Map<string, Promise<ResolvedProjectThumbnail | undefined>>();

export async function resolveProjectThumbnail(
  options: ResolveProjectThumbnailOptions,
): Promise<ResolvedProjectThumbnail | undefined> {
  if (options.thumbnail) {
    return {
      fit: "cover",
      url: options.thumbnail,
    };
  }

  if (!options.liveUrl) {
    return undefined;
  }

  const cacheKey = getCacheKey(options.liveUrl);
  let pending = thumbnailCache.get(cacheKey);

  if (!pending) {
    pending = fetchSiteThumbnail(options.liveUrl);
    thumbnailCache.set(cacheKey, pending);
  }

  return pending;
}

async function fetchSiteThumbnail(
  liveUrl: string,
): Promise<ResolvedProjectThumbnail | undefined> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), THUMBNAIL_TIMEOUT_MS);

  try {
    const response = await fetch(liveUrl, {
      headers: {
        accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      signal: controller.signal,
    });

    if (!response.ok) {
      return undefined;
    }

    const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";

    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      return undefined;
    }

    const html = await response.text();
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? html;
    const metaImage = extractMetaImage(head, response.url);

    if (metaImage) {
      return {
        fit: "cover",
        url: metaImage,
      };
    }

    const iconImage = extractIconImage(head, response.url);

    if (iconImage) {
      return {
        fit: "contain",
        url: iconImage,
      };
    }

    return undefined;
  } catch {
    return undefined;
  } finally {
    clearTimeout(timeoutId);
  }
}

function extractMetaImage(head: string, baseUrl: string): string | undefined {
  const matches = new Map<string, string>();

  for (const tag of head.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = parseAttributes(tag);
    const key = (attrs.property ?? attrs.name ?? attrs.itemprop)?.trim().toLowerCase();
    const content = attrs.content?.trim();

    if (!key || !content || matches.has(key)) {
      continue;
    }

    if (META_IMAGE_PRIORITY.includes(key as (typeof META_IMAGE_PRIORITY)[number])) {
      matches.set(key, content);
    }
  }

  for (const key of META_IMAGE_PRIORITY) {
    const value = matches.get(key);

    if (!value) {
      continue;
    }

    const absoluteUrl = toAbsoluteUrl(value, baseUrl);

    if (absoluteUrl) {
      return absoluteUrl;
    }
  }

  return undefined;
}

function extractIconImage(head: string, baseUrl: string): string | undefined {
  let bestHref: string | undefined;
  let bestScore = -1;

  for (const tag of head.match(/<link\b[^>]*>/gi) ?? []) {
    const attrs = parseAttributes(tag);
    const href = attrs.href?.trim();
    const rel = attrs.rel?.trim().toLowerCase();

    if (!href || !rel) {
      continue;
    }

    const score = getIconScore(rel, attrs.sizes);

    if (score <= bestScore) {
      continue;
    }

    bestScore = score;
    bestHref = href;
  }

  return bestHref ? toAbsoluteUrl(bestHref, baseUrl) : undefined;
}

function getIconScore(rel: string, sizes?: string): number {
  const tokens = rel.split(/\s+/).filter(Boolean);
  let score = -1;

  if (tokens.includes("apple-touch-icon")) {
    score = 300_000;
  } else if (rel.includes("shortcut icon")) {
    score = 200_000;
  } else if (tokens.includes("icon")) {
    score = 100_000;
  } else if (tokens.includes("mask-icon")) {
    score = 50_000;
  }

  if (score < 0) {
    return score;
  }

  return score + getSizesScore(sizes);
}

function getSizesScore(sizes?: string): number {
  if (!sizes) {
    return 0;
  }

  if (sizes.toLowerCase() === "any") {
    return 1;
  }

  let best = 0;

  for (const size of sizes.split(/\s+/)) {
    const match = size.match(/^(\d+)x(\d+)$/i);

    if (!match) {
      continue;
    }

    const width = Number.parseInt(match[1], 10);
    const height = Number.parseInt(match[2], 10);
    best = Math.max(best, width * height);
  }

  return best;
}

function parseAttributes(tag: string): Record<string, string | undefined> {
  const attributes: Record<string, string | undefined> = {};

  for (const match of tag.matchAll(
    /([^\s"'=<>`\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g,
  )) {
    const name = match[1]?.toLowerCase();

    if (!name || name === "meta" || name === "link") {
      continue;
    }

    attributes[name] = match[2] ?? match[3] ?? match[4] ?? "";
  }

  return attributes;
}

function toAbsoluteUrl(value: string, baseUrl: string): string | undefined {
  const decodedValue = decodeHtml(value).trim();

  if (!decodedValue || decodedValue.startsWith("data:")) {
    return undefined;
  }

  try {
    const url = new URL(decodedValue, baseUrl);

    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.toString();
    }

    return undefined;
  } catch {
    return undefined;
  }
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function getCacheKey(url: string): string {
  try {
    return new URL(url).toString();
  } catch {
    return url;
  }
}
