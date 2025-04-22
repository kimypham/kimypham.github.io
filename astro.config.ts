import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
    site: 'https://kimypham.github.io',
    output: 'static',
    integrations: [
        expressiveCode({
            themes: [spectreDark],
        }),
        mdx(),
        sitemap(),
        spectre({
            name: 'Spectre',
            openGraph: {
                home: {
                    title: 'Spectre',
                    description: 'A minimalistic theme for Astro.'
                },
                blog: {
                    title: 'Blog',
                    description: 'News and guides for Spectre.'
                },
                projects: {
                    title: 'Projects'
                }
            },
            giscus: {
                repository: 'kimypham/kimypham.github.io',
                repositoryId: 'R_kgDOOaubUw',
                category: 'General',
                categoryId: 'DIC_kwDOOaubU84CpWNG',
                mapping: 'pathname',
                strict: true,
                reactionsEnabled: true,
                emitMetadata: false,
                lang: 'en',
            }
        })
    ],
    //   adapter: node({
    //     mode: 'standalone'
    //   })
});