import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Production Safeguard: Strict Zod schema for frontmatter validation
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(100, { message: 'Title must be under 100 characters for optimal SEO.' }),
    description: z.string().min(50).max(160),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
