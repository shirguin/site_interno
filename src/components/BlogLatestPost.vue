<template>
    <section class="blogLatestPost center">
        <h1 class="blogLatestPost__title">Latest Post</h1>
        <div class="blogLatestPost__content">
            <img class="blogLatestPost__content__img" src="../assets/img/Photo_10.png" alt="Photo_10" />

            <div class="blogLatestPost__content__right">
                <h2 class="blogLatestPost__content__right__title">
                    Low Cost Latest Invented Interior Designing Ideas
                </h2>
                <p class="blogLatestPost__content__right__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief.
                </p>
                <p class="blogLatestPost__content__right__text">
                    Lorem Ipsum is not simply random text. It has roots in a piece of
                    classica.
                </p>
                <div class="blogLatestPost__content__right__bottom">
                    <p class="blogLatestPost__content__right__date">
                        26 December,2022
                    </p>

                    <a class="blogLatestPost__content__right__button" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogLatestPost',
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.blogLatestPost {
    display: flex;
    flex-direction: column;

    &__title {
        margin-top: 200px;
        margin-left: 360px;
        font-family: "DM Serif Display";
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 0.02em;
        color: $headingTextColor;
    }

    &__content {
        display: flex;
        gap: 60px;

        &__img {
            margin-top: 33px;
            border-radius: $borderRadius;
        }

        &__right {
            width: 470px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &__title {
                width: 463px;
                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: $headingTextColor;
                margin-bottom: 22px;
            }

            &__text {
                width: 469px;
                font-family: "Jost";
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                letter-spacing: 0.01em;
                color: $textColor;
                margin-bottom: 50px;
            }

            &__date {
                font-family: "Jost";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.01em;
                text-transform: capitalize;
                color: $textColor;
            }

            &__button svg {
                width: 52px;
                height: 52px;
            }

            &__bottom {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>