import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    description: z.string(),
    status: z.enum(["active", "development", "planned", "archived"]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(),
    tech: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    role: z.string().optional(),
    year: z.string().optional(),
  }),
});

export const collections = { blog, projects };
