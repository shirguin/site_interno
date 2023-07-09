<template>
    <button class="blogDetailsContent__rightBlock__tags__button" @click="filter(tag)">{{ tag }}</button>
</template>

<script>
export default {
    name: 'ButtonTag',
    props: {
        tag: String,
        filter: Function,
    },

    methods: {
        print(tag) {
            console.log(`тук тук ${tag}`);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";
</style>