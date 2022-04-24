<template>
  <header class="header">
        <div class="header__logo">
            <i
                class="fa-solid fa-earth-americas fa-2xl"
            />
            <h1>
                National History Museum
            </h1>
        </div>
        <!-- <i
            class="fa-solid fa-bars fa-2xl"
        /> -->
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    background-color: #E0E0E0;
    padding: 0 40px;

    &__logo {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

// $breakpoint-logo: 600px;
// @media (max-width: $breakpoint-logo) {
//     h1 {
//         display: none;
//     }
// }
</style>