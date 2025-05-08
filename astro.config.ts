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
            themeColor: "#11111b", // #11111b
            openGraph: {
                home: {
                    title: "Kim Pham",
                    description: "The portfolio of Kim Pham"
                },
                blog: {
                    title: "Blog",
                    description: "Writings, learnings, and ramblings"
                },
                projects: {
                    title: "Projects",
                    description: "Projects I have worked on"
                },
                work: {
                    title: "Work experience",
                    description: "My work experience"
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
                lang: "en",
                theme: "catppuccin_mocha"
            }
        })
    ]
    //   adapter: node({
    //     mode: 'standalone'
    //   })
});
