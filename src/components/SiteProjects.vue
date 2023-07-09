<template>
    <section class="projects">
        <h1 class="projects__heading">Follow Our Projects</h1>
        <p class="projects__text">
            It is a long established fact that a reader will be distracted by the
            of readable content of page lookings at its layouts points.
        </p>
        <div class="projects__content">
            <div class="projects__content__item">
                <img class="projects__content__item__img-1" src="../assets/img/Photo_2.png" alt="Photo_2" />
                <div class="projects__content__item__lowerBlock">
                    <div class="projects__content__item__lowerBlock__left">
                        <h3 class="projects__content__item__heading">Modern Kitchan</h3>
                        <p class="projects__content__item__text">
                            Decor / Artchitecture
                        </p>
                    </div>
                    <a href="#"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="projects__content__item">
                <img class="projects__content__item__img" src="../assets/img/Photo_3.png" alt="Photo_3" />
                <div class="projects__content__item__lowerBlock">
                    <div class="projects__content__item__lowerBlock__left">
                        <h3 class="projects__content__item__heading">Modern Kitchan</h3>
                        <p class="projects__content__item__text">
                            Decor / Artchitecture
                        </p>
                    </div>
                    <a href="#"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="projects__content__item">
                <img class="projects__content__item__img-1" src="../assets/img/Photo_4.png" alt="Photo_4" />
                <div class="projects__content__item__lowerBlock">
                    <div class="projects__content__item__lowerBlock__left">
                        <h3 class="projects__content__item__heading">Modern Kitchan</h3>
                        <p class="projects__content__item__text">
                            Decor / Artchitecture
                        </p>
                    </div>
                    <a href="#"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="projects__content__item">
                <img class="projects__content__item__img-1" src="../assets/img/Photo_5.png" alt="Photo_5" />
                <div class="projects__content__item__lowerBlock">
                    <div class="projects__content__item__lowerBlock__left">
                        <h3 class="projects__content__item__heading">Modern Kitchan</h3>
                        <p class="projects__content__item__text">
                            Decor / Artchitecture
                        </p>
                    </div>
                    <a href="#"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
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
    name: 'SiteProjects',

};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.projects {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__heading {
        width: 451px;
        height: 63px;
        margin-top: 96px;
        font-family: "DM Serif Display";
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        color: $headingTextColor;
    }

    &__text {
        width: 737px;
        height: 66px;
        margin-top: 8px;
        text-align: center;
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: $textColor;
    }

    &__content {
        width: $widthSite;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 37px;

        &__item {
            width: 525px;
            margin-top: 56px;

            &__img {
                width: 525px;
                height: 548px;
            }

            &__lowerBlock {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 28px;

                &__left {
                    display: flex;
                    flex-direction: column;
                }
            }

            &__heading {
                width: 184px;
                height: 31px;
                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                color: $headingTextColor;
            }

            &__text {
                width: 217px;
                height: 27px;
                margin-bottom: 4px;
                font-family: "Jost";
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                color: $textColor;
            }
        }
    }
}
</style>