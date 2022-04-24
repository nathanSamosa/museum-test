<template>
    <div
        class="card-widgets__quiz"
    >
        <h3>
            <a
                :href="data.path"
            >
                {{data.text}}
            </a>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'linkWidget',
    props: {
        data: Object
    }
}
</script>

<style>

</style>