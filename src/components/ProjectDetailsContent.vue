<template>
    <section class="projectDetailsContent center">
        <h3 class="projectDetailsContent__title">{{ projectDetailsData.title }}</h3>
        <p class="projectDetailsContent__text">{{ projectDetailsData.text_1 }}</p>
        <p class="projectDetailsContent__text">{{ projectDetailsData.text_2 }}</p>

    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectDetailsContent',

    computed: {
        ...mapState(['projectDetailsData']),
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.projectDetailsContent {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding-left: 270px;

    &__title {
        color: #292F36;
        font-size: 50px;
        font-family: DM Serif Display;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;

    }

    &__text {
        width: 658px;
        color: #4D5053;
        font-size: 22px;
        font-family: Jost;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-top: 11px;
        margin-bottom: 11px;
    }

}
</style>