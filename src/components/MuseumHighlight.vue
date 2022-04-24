<template>
    <div class="museum-highlight">
        <imgWidget
            :page="page"
            :card="card"
        />
        <h2>
            {{card.title}}
        </h2>
        <p>
            {{card.desc}}
        </p>
        <component
            class="museum-highlight__unique-content"
            v-for="widget in card.widgets"
            :key="widget"
            :is="widget.type"
            :data="widget"
        />
    </div>
</template>

<script>
import { imgWidget, textWidget, linkWidget } from './cardWidgets'


export default {
    name: 'MuseumHighlight',
    components: {
        imgWidget, textWidget, linkWidget
    },
    props: {
        page: Object,
        card: Object,
    },
    computed: {
        newsDate() {
            const d = new Date(this.card.news.date)
            return d.toDateString()
        },
        contents() {
            return this.page.contents
        }
    }
};
</script>

<style lang="scss" scoped>
.museum-highlight {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 30px;
        font-weight: 400;
    }

    p {
        color: grey;
        font-size: 18px;
        font-weight: 500;
    }

    &__unique-content {
        display: flex;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        background: rgb(243, 243, 243);
        border: 2px solid lightgrey;
    }
}
</style>
