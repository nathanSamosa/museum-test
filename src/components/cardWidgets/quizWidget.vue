<template>
    <div
        class="card-widgets__quiz"
    >
        <h3><a :href="card.quiz">Take a quiz!</a></h3>
    </div>
</template>

<script>
export default {
    name: 'quizWidget',
    props: {
        card: Object
    },
}
</script>

<style>

</style>