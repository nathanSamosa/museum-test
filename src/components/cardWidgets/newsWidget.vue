<template>
  <div
        class="card-widgets__news"
    >
        <h3>Latest:</h3>
        <p>
            {{card.news.title}}
        </p>
        <div
            class="card-widgets__news__date"
            v-if="card.news.date"
        >
            {{newsDate}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'newsWidget',
    props: {
        card: Object
    },
    computed: {
        newsDate() {
            const d = new Date(this.card.news.date)
            return d.toDateString()
        }
    },
}
</script>

<style lang="scss">
    .card-widgets__news {
        background: rgb(243, 243, 243);
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;

        h3 {
            font-size: 18px;
        }

        p {
            color: grey;
            font-size: 18px;
            font-weight: 500;
        }

        &__date {
            width: 100%;
            text-align: right;
        }
    }
</style>