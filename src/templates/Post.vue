<template>
  <Layout>
    <div class="px-7 md:px-14 pt-7 md:pt-14">
      <h1>{{ $page.post.title }}</h1>
      <div class="flex items-center -mt-10">
        <p class="text-gray-500">{{ $page.post.date }}</p>
        <g-link
          class="ml-2 text-gray-500"
          v-for="tag in $page.post.tags"
          :to="tag.path"
          :key="tag.id"
        >
          #{{ tag.title }}
        </g-link>
      </div>
    </div>
    <article class="px-7 md:px-14 pb-7 md:pb-14" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "YYYY년 MM월 DD일")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import SEO from '../mixins/SEO.vue';

export default {
  mixins: [SEO],
  mounted() {
    const script = window.document.createElement('script');
    const utterance = window.document.getElementById('comments');
    const attrs = {
      src: 'https://utteranc.es/client.js',
      repo: 'k4sud0n/gridsome-bold',
      'issue-term': `${this.$page.post.title} (${this.$page.post.date})`,
      theme: 'github-light',
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

<style>
article img {
  @apply block m-auto;
}
</style>
