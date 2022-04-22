<template>
    <Header />
    <TopicPage
        v-for="page in pages"
        :key="page"
        :page="page"
    />
</template>

<script>
import { PAGES } from './config/pages.js'

import Header from './components/Header.vue'
import TopicPage from './components/TopicPage.vue'

export default {
    name: 'App',
    components: {
        Header, TopicPage
    },
    computed: {
        pages() {
            return PAGES
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
