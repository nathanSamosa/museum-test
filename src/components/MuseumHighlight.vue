<template>
    <div class="museum-highlight">
        <imgWidget
            :page="page"
            :card="card"
        />
        <h2>
            {{card.name}}
        </h2>
        <p>
            <!-- Different partners will format their data differently. Its probably not safe to assume that their data will
            be tied to intuitive keys. Although how often will there be a new partner? Can this be done manually?
            These OR options could be in their own array and imported for easy adjustment. -->
            {{card.description || card.info}}
        </p>
        <div
            v-for="content in contents"
            :key="content" 
        >
            <component
                class="museum-highlight__unique-content"

                v-if="content in card"
                :is="`${content}Widget`"
                :card="card"
            />
        </div>
    </div>
</template>

<script>
import { imgWidget, newsWidget, quizWidget } from './cardWidgets'


export default {
    name: 'MuseumHighlight',
    components: {
        imgWidget, newsWidget, quizWidget
    },
    mixins: [
    ],
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
    },
    methods: {

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
    }
}
</style>
