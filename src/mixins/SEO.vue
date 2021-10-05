<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = this.$page.post.path;
    const image = this.$page.post.image?.path;
    const imagePath = (image && `${siteUrl}${image.src}`) || '';

    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.summary,
        },
        { key: 'og:url', property: 'og:url', content: `${siteUrl}${postPath}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.summary,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath,
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: (image && image.size.width) || '',
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: (image && image.size.height) || '',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            author: {
              name: 'k4sud0n',
            },
            headline: this.$page.post.title,
            image: imagePath,
          },
        },
      ],
    };
  },
};
</script>
