<template>
    <section class="blogBanner">
        <img class="blogBanner__img" src="../assets/img/Photo_26.png" alt="Photo_26" />
    </section>
</template>

<script>
export default {
    name: 'ProjectDetailsBanner',
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.blogBanner {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        margin-top: 44px;
        position: relative;
        width: 1920px;
        height: 350px;
    }

    &__nav {
        position: absolute;
        top: 314px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 503px;
        height: 178px;
        background-color: $backgroundColorSite;
        border-radius: 37px 37px 0px 0px;

        &__title {
            padding-top: 41px;
            font-family: "DM Serif Display";
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 125%;
            color: $headingTextColor;
        }

        &__linke {
            font-family: "Jost";
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            color: $textColor;
        }

        &__linke a {
            text-decoration: none;
        }
    }
}
</style>