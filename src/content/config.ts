import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    category:    z.string(),
    pubDate:     z.date(),
    tags:        z.array(z.string()).default([]),
    image:       z.string().optional(),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
    minutesRead: z.number().default(5),
  }),
});

export const collections = { articles };
