import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import spectre from "./package/src";


// https://astro.build/config
export default defineConfig({
    site: "https://kimypham.github.io",
    output: "static",
    integrations: [
        expressiveCode({
            themes: ['catppuccin-macchiato']
        }),
        mdx(),
        sitemap(),
        spectre({
            name: "Kim Pham",
            openGraph: {
                home: {
                    title: "Spectre",
                    description: "A minimalistic theme for Astro."
                },
                blog: {
                    title: "Blog",
                    description: "News and guides for Spectre."
                },
                projects: {
                    title: "Projects"
                },
                work: {
                    title: "Work experience"
                }
            },
            giscus: {
                repository: "kimypham/kimypham.github.io",
                repositoryId: "R_kgDOOaubUw",
                category: "General",
                categoryId: "DIC_kwDOOaubU84CpWNG",
                mapping: "pathname",
                strict: true,
                reactionsEnabled: true,
                emitMetadata: false,
                lang: "en"
            }
        })
    ]
    //   adapter: node({
    //     mode: 'standalone'
    //   })
});
