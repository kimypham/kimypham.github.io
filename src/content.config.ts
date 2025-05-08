import type { icons as lucideIcons } from '@iconify-json/lucide/icons.json';
import { file, glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const other = defineCollection({
    loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
    type: z.literal("lucide"),
    name: z.custom<keyof typeof lucideIcons>(),
});

const quickInfo = defineCollection({
    loader: file("src/content/info.json"),
    schema: z.object({
        id: z.number(),
        icon: lucideIconSchema,
        text: z.string(),
    })
});

const socials = defineCollection({
    loader: file("src/content/socials.json"),
    schema: z.object({
        id: z.number(),
        icon: lucideIconSchema,
        text: z.string(),
        link: z.string(),
    })
});

const quickWorkExperience = defineCollection({
    loader: file("src/content/work.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        company: z.string(),
        duration: z.string(),
        description: z.string(),
    })
});

const education = defineCollection({
    loader: file("src/content/education.json"),
    schema: ({ image }) => z.object({
        id: z.number(),
        duration: z.string(),
        title: z.string(),
        company: z.string(),
        image: image(),
        link: z.string().url().optional(),
        description: z.string(),
    })
});

const tags = defineCollection({
    loader: file("src/content/tags.json"),
    schema: z.object({
        id: z.string()
    })
});

const posts = defineCollection({
    loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        description: z.string(),
        tags: z.array(
            reference("tags")
        ),
        draft: z.boolean().optional().default(false),
        image: image(),
    })
});

const workExperience = defineCollection({
    loader: glob({ base: "src/content/workExperience", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        duration: z.string(),
        company: z.string(),
        description: z.string(),
        image: image(),
        link: z.string().url().optional(),
        info: z.array(
            z.object({
                text: z.string(),
                icon: lucideIconSchema,
                link: z.string().url().optional(),
            })
        )
    })
});

const projects = defineCollection({
    loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        technology: z.string(),
        date: z.coerce.date(),
        image: image(),
        demoLink: z.string().url().optional(),
        githubLink: z.string().url().optional(),
        icon: lucideIconSchema,
        draft: z.boolean().optional().default(false),
        featuredOrder: z.number().optional(),
        info: z.array(
            z.object({
                text: z.string(),
                icon: lucideIconSchema,
                link: z.string().url().optional(),
            })
        )
    })
});

export const collections = { tags, posts, projects, other, quickInfo, socials, quickWorkExperience, education, workExperience };