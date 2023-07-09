<template>
    <div class="categories center">
        <button class="categories__button" v-for="(tag, index) in project_tags" :key="index" @click="PROJECT_FILTER(tag)">{{
            tag }}</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'ProjectCategories',

    computed: {
        ...mapState(['project_tags'])
    },

    methods: {
        ...mapMutations(['PROJECT_FILTER'])
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.categories {
    height: 75px;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: 35px;

    &__button {
        padding: 26px 66px;
        color: #292F36;
        text-align: center;
        font-size: 18px;
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
        border-radius: 18px;
        background-color: $backgroundColorSite;
        border: 1px solid #CDA274;
    }

    &__button:hover {
        color: $backgroundColorSite;
        background-color: #CDA274;
    }

}
</style>