<template>
    <article class="blogDetailsContent__leftBlock__item">
        <h3>Tag: {{ article.tag }}</h3>
        <h1 class="blogDetailsContent__leftBlock__item__title">
            {{ article.title_1 }}
        </h1>
        <img class="blogDetailsContent__leftBlock__item__img" :src="require(`@/assets/${article.img_1_src}`)"
            :alt="article.img_1_alt" />
        <div class="blogDetailsContent__leftBlock__item__dateBlock">
            <p class="blogDetailsContent__leftBlock__item__dateBlock__date">{{ article.date }}</p>
            <nav class="blogDetailsContent__leftBlock__item__dateBlock__nav">
                <a href="#">interior</a><span>/</span>
                <a href="#">Home</a><span>/</span>
                <a href="#">Decoro</a>
            </nav>
        </div>
        <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_1 }}</p>

        <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_2 }}</p>

        <div class="blogDetailsContent__leftBlock__item__insert">
            <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                    fill="#CDA274" />
            </svg>
            <h1 class="blogDetailsContent__leftBlock__item__insert__heading">The details are not the details.
                They make the design.</h1>
        </div>

        <h1 class="blogDetailsContent__leftBlock__item__title">{{ article.title_2 }}</h1>

        <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_3 }}</p>

        <ol>
            <li>
                <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_4 }}</p>
            </li>
            <li>
                <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_5 }}</p>
            </li>
            <li>
                <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_6 }}</p>
            </li>
        </ol>
        <img class="blogDetailsContent__leftBlock__item__img2" :src="require(`@/assets/${article.img_2_src}`)"
            :alt="article.img_2_alt">

        <p class="blogDetailsContent__leftBlock__item__text">{{ article.text_7 }}</p>

    </article>
</template>

<script>
export default {
    name: 'DetailedArticle',
    props: {
        article: Object,
    },
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