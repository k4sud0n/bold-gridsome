<template>
  <div class="prose dark:prose-light md:container md:mx-auto md:px-48">
    <header
      class="px-7 flex justify-between items-center border-b md:border border-gray-200"
    >
      <g-link to="/">
        <p>{{ $static.metadata.siteName }}</p>
      </g-link>
      <div class="flex items-center">
        <theme-switcher class="mr-4" />
        <g-link to="/">
          <p class="mr-4">Blog</p>
        </g-link>
        <g-link to="/about/">
          <p>About</p>
        </g-link>
      </div>
    </header>
    <div class="md:border-r md:border-l md:border-gray-200">
      <slot />
    </div>
    <footer
      class="text-sm px-7 flex justify-between items-center border-t md:border border-gray-200"
    >
      <p>ⓒ {{ currentYear }}. Sihyun Kim</p>
      <p class="break-all text-right">
        Powered by <a href="https://github.com/k4sud0n/bold-gridsome" target="_blank">gridsome-bold</a>
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
  }
}
</static-query>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher';

export default {
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

body {
  @apply dark:bg-gray-800;
  font-family: 'Noto Sans KR', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

header a {
  @apply no-underline !important;
}
</style>
