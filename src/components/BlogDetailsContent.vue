<template>
    <section class="blogDetailsContent center">
        <div class="blogDetailsContent__leftBlock">
            <DetailedArticle v-for="article in filterList" :key="article.id" :article="article" />
        </div>

        <div class="blogDetailsContent__rightBlock">
            <h2 class="blogDetailsContent__rightBlock__title">Tags</h2>
            <div class="blogDetailsContent__rightBlock__tags">
                <ButtonTag v-for="tag in getTags" :key="tag.id" :tag="tag" :filter="FILTER" />
            </div>
        </div>
    </section>
</template>

<script>
import DetailedArticle from './DetailedArticle.vue';
import ButtonTag from './ButtonTag.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'BlogDetailsContent',
    components: {
        DetailedArticle,
        ButtonTag,
    },

    computed: {
        ...mapGetters(['getDetailedArticles', 'getTags', 'getFilterFlag', 'getFilterTag']),

        filterList: function () {
            if (this.getFilterFlag) {
                return this.getDetailedArticles.filter((article) => article.tag === this.getFilterTag);
            } else {
                return this.getDetailedArticles;
            }
        },
    },
    methods: {
        ...mapMutations(['FILTER']),
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.blogDetailsContent {
    margin-top: 200px;
    display: flex;
    gap: 56px;

    &__leftBlock {
        width: 800px;
        display: flex;
        flex-direction: column;
        gap: 100px;

        &__item {
            display: flex;
            flex-direction: column;

            &__title {
                width: 684px;
                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 50px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: $headingTextColor;
            }

            &__img {
                width: 800px;
                margin-top: 11px;
                border-radius: $borderRadius;
            }

            &__dateBlock {
                margin-top: 50px;
                display: flex;
                justify-content: space-between;

                &__date {
                    font-family: "Jost";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    color: $textColor;
                    letter-spacing: 0.01em;
                    text-transform: capitalize;
                }

                &__nav {
                    display: flex;
                    gap: 10px;
                }

                &__nav a {
                    text-decoration: none;
                    font-family: "Jost";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 0.01em;
                    text-transform: capitalize;
                    color: $textColor;
                }
            }

            &__text {
                width: 800px;
                margin-top: 32px;
                font-family: "Jost";
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                letter-spacing: 0.01em;
                color: $textColor;
            }

            &__insert {
                margin-top: 35px;
                margin-bottom: 27px;
                width: 800px;
                height: 267px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #f4f0ec;
                border-radius: $borderRadius;

                &__heading {
                    width: 345px;
                    font-family: "DM Serif Display";
                    font-style: italic;
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 125%;
                    text-align: center;
                    letter-spacing: 0.02em;
                    color: #cda274;
                }
            }

            & ol {
                list-style-type: none;
                counter-reset: num;
                margin: 0 0 0 35px;
                padding: 15px 0 5px 0;
                font-size: 18px;
            }

            & ol li {
                position: relative;
                margin: 0;
                padding: 0;
            }

            & ol li:before {
                content: counter(num);
                counter-increment: num;
                display: inline-block;
                position: absolute;
                top: 5px;
                left: -40px;
                width: 15px;
                color: #ef6780;
                text-align: right;

                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: #cda274;
            }

            &__img2 {
                width: 800px;
                margin-top: 35px;
                border-radius: $borderRadius;
            }
        }
    }

    &__rightBlock {
        display: flex;
        flex-direction: column;

        &__title {
            font-family: "DM Serif Display";
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            color: $headingTextColor;
        }

        &__tags {
            margin-top: 24px;
            width: 345px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            &__button {
                padding: 9px 30px;
                text-align: center;
                font-size: 18px;
                font-family: Jost;
                line-height: 125%;
                letter-spacing: 0.36px;
                color: $headingTextColor;
                border-radius: 10px;
                border: none;
            }

            &__button:hover {
                background-color: $headingTextColor;
                color: #ffffff;
            }
        }
    }
}
</style>