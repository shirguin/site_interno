<template>
    <section class="articles center">
        <h1 class="articles__heading">Articles & News</h1>
        <p class="articles__text">
            It is a long established fact that a reader will be distracted by the
            of readable content of a page when lookings at its layouts the points
            of using.
        </p>

        <div class="articles__content">
            <div class="articles__content__item" v-for="article in getArticles.slice(0, 3)" :key="article.id">
                <img class="articles__content__item__img" :src="require(`@/assets/${article.imgSrc}`)"
                    :alt="article.imgAlt" />
                <p class="articles__content__item__img__style">{{ article.style }}</p>
                <h3 class="articles__content__item__heading">{{ article.title }}</h3>
                <div class="articles__content__item__lowerBlock">
                    <p class="articles__content__item__lowerBlock__text">
                        {{ article.date }}
                    </p>
                    <router-link class="articles__content__item__lowerBlock__link" to="/blog/details">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'SiteArticles',

    computed: {
        ...mapGetters(['getArticles']),
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: $widthSite;
    margin-top: 96px;

    &__heading {
        width: 362px;
        font-family: "DM Serif Display";
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        color: $headingTextColor;
    }

    &__text {
        width: 811px;
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: $textColor;
        text-align: center;
        margin-top: 12px;
    }

    &__content {
        margin-top: 52px;
        width: $widthSite;
        display: flex;
        justify-content: space-between;

        &__item:hover svg {
            fill: $backgroundColorSite;
        }

        &__item {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 382px;
            border-radius: $borderRadius;
            border: $borderArticle;

            &:hover {
                background-color: #f4f0ec;
            }

            &:hover circle {
                fill: $backgroundColorSite;
            }

            &__img {
                margin: 21px;
                border-radius: $borderRadius $borderRadius 0 0;

                &__style {
                    position: absolute;
                    width: 118px;
                    height: 41px;
                    left: 52px;
                    top: 253px;
                    font-family: "Jost";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    color: $textColor;
                    background-color: $backgroundColorSite;
                    text-align: center;
                    line-height: 41px;

                    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
                    border-radius: 8px 8px 8px 0;
                }
            }

            &__heading {
                margin-left: 21px;
                width: 305px;
                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                color: $headingTextColor;
            }

            &__lowerBlock {
                margin-top: 30px;
                margin-bottom: 38px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &__text {
                    margin-left: 21px;
                    font-family: "Jost";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    color: $textColor;
                }

                &__link {
                    margin-right: 21px;
                }
            }
        }
    }
}
</style>