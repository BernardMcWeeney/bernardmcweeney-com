---
title: "Why I Rebuilt My Site with Astro"
description: "My experience rebuilding my personal portfolio using Astro, and why it's become my go-to framework for content-focused websites."
pubDate: 2024-01-20
tags: ["astro", "web development", "javascript"]
---

After trying various frameworks for my personal site, I finally settled on Astro. Here's why it works so well for me.

## The Problem with SPAs

Single Page Applications are great for complex web apps, but for a portfolio or blog? They're overkill. You end up shipping megabytes of JavaScript just to display some text and images.

## Enter Astro

Astro takes a different approach:

- **Zero JavaScript by default** - Ship HTML and CSS, add JS only where needed
- **Component Islands** - Interactive components hydrate independently
- **Content Collections** - First-class support for Markdown and MDX
- **Framework Agnostic** - Use React, Vue, Svelte, or plain HTML

## My Setup

For this site, I'm using:

```javascript
// astro.config.mjs
export default defineConfig({
  site: "https://bernardmcweeney.com",
  integrations: [sitemap()],
  adapter: cloudflare(),
});
```

The result? A fast, lightweight site that scores well on Core Web Vitals and is a joy to maintain.

## Conclusion

If you're building a content-focused website, give Astro a try. It might just change how you think about web development.
