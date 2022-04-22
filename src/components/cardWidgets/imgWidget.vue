<template>
    <div class="museum-highlight__img">
        <div
            class="museum-highlight__img__partner-banner"
            v-if="card.partner"
            :style="`background-color: ${partners[card.partner].color};`"
        >
            From the {{card.partner}}
        </div>
        <i
            :class="`fa-2xl fa-solid fa-${page.badge.icon}`"
            :style="`color: ${page.badge.color}`"
        />
        <img
            :src="card.image || card.img" 
            :alt="card.name + ' image'"
        />
    </div>
</template>

<script>
import { PARTNERS } from '../../config/pages.js'

export default {
    name: "imgWidget",
    props: {
        page: Object,
        card: Object
    },
    computed: {
        partners() {
            return PARTNERS
        }
    }
    // data() {
    //     return {
    //         partners: PARTNERS
    //     }
    // }
}
</script>

<style lang="scss">
.museum-highlight__img {
    aspect-ratio: 2 / 1;
    border: 1px solid black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
        object-fit: cover;
        line-height: inherit;
    }

    i {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(50%);
    }

    &__partner-banner {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-10px, -50%);
        width: fit-content;
        padding: 5px 20px;
        border-radius: 20px;
        color: white;
        font-weight: 600;
    }
}
</style>