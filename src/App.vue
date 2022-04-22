<template>
    <Header />
    <component
        v-for="page in pages"
        :key="page"
        :is="`${page.name}Page`"
        :page="page"
    />
</template>

<script>
import { PAGES } from './config/pages.js'

import Header from './components/Header.vue'
import SpacePage from './components/SpacePage.vue'

export default {
  name: 'App',
  components: {
    Header, SpacePage
  },
  data() {
      return {
          pages: PAGES
      }
  },
  created() {
      console.log(this.pages)
  }
}
</script>

<style lang="scss">
:root {
    --ff-primary: "Roboto", Arial, sans-serif;
}
* {
    font-family: var(--ff-primary);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
