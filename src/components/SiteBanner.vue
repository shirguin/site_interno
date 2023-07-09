<template>
    <section class="banner center">
        <h1 class="banner__heading">Let Your Home Be Unique</h1>
        <p class="banner__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
        </p>
        <button class="banner__button">
            <div class="banner__button__text">
                <span>Get Started</span>
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </div>
        </button>
    </section>
</template>

<script>
export default {
    name: 'SiteBanner',
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.banner {
    display: flex;
    flex-direction: column;
    width: $widthSite;
    height: 758px;
    margin-top: 57px;
    background-image: url(../assets/img/Photo_1.png);
    border-radius: $borderRadius;

    &__heading {
        width: 434px;
        height: 162px;
        margin-left: 52px;
        margin-top: 208px;
        font-family: "DM Serif Display";
        font-style: normal;
        font-weight: 400;
        font-size: 65px;
        line-height: 125%;
        color: $headingTextColor;
    }

    &__text {
        width: 433px;
        height: 66px;
        margin-left: 52px;
        margin-top: 18px;
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: $textColor;
    }

    &__button {
        width: 220.14px;
        height: 75px;
        margin-left: 52px;
        margin-top: 21px;
        background: #292f36;
        box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
        border-radius: 18px;

        &__text {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }


        &__text span {
            color: $backgroundColorSite;
        }
    }

    &__button:hover {
        color: #292F36;
        border: 1px solid #292F36;
        background: #FFF;
    }

    &__button:hover span {
        color: #292F36;
        background: #FFF;
    }
}
</style>