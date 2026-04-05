import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
  type: "content",
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
