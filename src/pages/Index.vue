<template>
  <Layout>
    <div class="p-7 md:p-14">
      <div class="mb-14" v-for="post in $page.posts.edges" :key="post.id">
        <g-link class="post-title" :to="post.node.path">
          <h1>{{ post.node.title }}</h1>
        </g-link>
        <div class="flex items-center -mt-10 -mb-8">
          <p class="text-gray-500">{{ post.node.date }}</p>
          <g-link
            class="ml-2 text-gray-500"
            v-for="tag in post.node.tags"
            :to="tag.path"
            :key="tag.id"
          >
            #{{ tag.title }}
          </g-link>
        </div>
        <p>{{ post.node.summary }}</p>
      </div>

      <Pager
        class="paginator flex justify-center"
        :info="$page.posts.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY년 MM월 DD일")
        summary
        tags {
          title
          path
        }
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  components: {
    Pager,
  },
};
</script>

<style>
.post-title {
  @apply no-underline !important;
}

.paginator a {
  @apply no-underline !important p-1;
}
</style>
