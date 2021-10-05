# Gridsome Bold Blog Theme

[Demo](https://k4sud0n.github.io/gridsome-bold/)

This is the blog boilerplate made with Gridsome.

This boilerplate uses tailwindcss and tailwindcss/typography. Also, it includes post generator, markdown posts, tags, pagination, dark mode, SEO and code highlighting.

You can simply add [utteranc.es](https://utteranc.es) for comment feature.

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

You can edit site name and url by editing `girdsome.config.js`.

```js
...

module.exports = {
  siteName: 'Your site title',
  siteDescription: 'Your site description',
  siteUrl: 'Your site URL',

  ...
};
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
