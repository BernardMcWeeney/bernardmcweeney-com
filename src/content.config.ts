import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["active", "development", "planned", "archived"]),
    order: z.number().default(99),
    tech: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    featureImage: z.string().optional(),
  }),
});

export const collections = { blog, projects };
