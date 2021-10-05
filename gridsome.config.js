const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'Gridsome bold',
  siteDescription: 'Blog boilerplate made with Gridsome',
  siteUrl: 'https://k4sud0n.github.io/gridsome-bold/',

  templates: {
    Post: '/post/:path',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'post/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'nord', skipInline: true },
            ],
          ],
        },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],

  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener'],
      anchorClassName: 'icon icon-link',
    },
    plugins: ['@gridsome/remark-prismjs'],
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
};
