# Gridsome Bold Blog Theme

[Demo](https://k4sud0n.github.io/gridsome-bold/)

## Features

- Designed with tailwindcss, tailwindcss/typography
- Generate post easily using `post-generator` tool
- Simple layout
- Tags
- Pagination
- Dark mode
- SEO friendly
- Sitemap
- Syntax highlighter with [Shiki](https://shiki.matsu.io)
- Comments with [utteranc.es](https://utteranc.es)

## Installation

### 1. Install Gridsome CLI tool if you don't have

```bash
npm install --global @gridsome/cli # or yarn add global @gridsome/cli
```

### 2. Install bold-gridsome

1. Clone bold-gridsome using Git

```bash
git clone https://github.com/k4sud0n/gridsome-bold.git
```

2. Install dependencies

```bash
cd bold-gridsome && npm install # or yarn
```

3. `yarn dev` to start a local dev server at `http://localhost:8080`

4. Happy coding 🎉🙌

### 3. Config your site

1. You can edit site name and url by editing `girdsome.config.js`.

```js
...

module.exports = {
  siteName: 'Your site title',
  siteDescription: 'Your site description',
  siteUrl: 'Your site URL',

  ...
};
```

2. Config Google Analytics

```js
...

module.exports = {

  {
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: 'UA-XXXXXXXXX-X' // Add your Google Analytics code here
    }
  },

}
```

3. Config Sitemap

```js
module.exports = {

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

}
```

4. Config [utteranc.es](https://utteranc.es)

```vue
<script>
import SEO from '../mixins/SEO.vue';

export default {
  mounted() {
    const script = window.document.createElement('script');
    const utterance = window.document.getElementById('comments');
    const attrs = {
      src: 'https://utteranc.es/client.js',
      repo: 'k4sud0n/gridsome-bold', // Your repo name
      'issue-term': `${this.$page.post.title} (${this.$page.post.date})`,
      theme: 'github-light', // utteranc.es theme
      crossorigin: 'anonymous',
      async: true,
    };
    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    utterance.appendChild(script);
  },
};
</script>
```

### 4. Generate post using post-generator

You can easily generate post using custom script called `post-generator.js`.

You can simply `npm run post` in terminal and the script will automatically add post header.

```bash
$ npm run post

What's your post title: hello world
What's your post's summary: hello everybody

Done!
```

After running this script, you can check there is new markdown file in post folder.
