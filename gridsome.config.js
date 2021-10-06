const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'Gridsome bold',
  siteDescription: 'Blog boilerplate made with Gridsome',
  siteUrl: 'https://k4sud0n.github.io/',
  pathPrefix: '/gridsome-bold',

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
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Your Blog Title',
          feed_url: 'Your Blog Address/rss.xml',
          site_url: 'Your Blog Address',
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          date: node.date,
          url: 'Your Blog Address' + node.path,
          author: 'Your name',
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
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
