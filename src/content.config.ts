import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    systemCode: z.string(),
    heroImg: z.string().optional(),
    techSubtext: z.string().optional(),
    techStack: z.array(z.object({
        name: z.string(),
        role: z.string(),
        status: z.string(),
        svg: z.string()
    })).optional(),
    buildSequence: z.array(z.object({
        num: z.string(),
        phase: z.string(),
        desc: z.string()
    })).optional(),
    faq: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })).optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    author: z.string().default("AntiGravity AI"),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    clientType: z.string(),
    metric1Label: z.string(),
    metric1: z.string(),
    metric2Label: z.string(),
    metric2: z.string(),
    metric3Label: z.string(),
    metric3: z.string(),
    description: z.string(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    services: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
