<template>
  <Layout>
    <div class="p-7 md:p-14">
      <h1># {{ $page.tag.title }}</h1>
      <div
        class="mt-14 mb-14"
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
      >
        <g-link class="post-title" :to="post.node.path">
          <h1>{{ post.node.title }}</h1>
        </g-link>
        <div class="flex items-center -mt-10 -mb-8">
          <p class="text-gray-500">{{ post.node.date }}</p>
          <g-link class="ml-2 text-gray-500"> #{{ $page.tag.title }}</g-link>
        </div>
        <p>{{ post.node.summary }}</p>
      </div>
    </div>
    
    <Pager
      class="paginator flex justify-center"
      :info="$page.tag.belongsTo.pageInfo"
    />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            summary
            date (format: "YYYY년 MM월 DD일")
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

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
