<template>
    <div>
        <SiteHeader />
        <div class="content center">
            <div class="content__left">
                <h1 class="content__left__title">404</h1>
                <p class="content__left__text">We are sorry, but the page
                    you requested was not found</p>
                <router-link to="/" class="content__left__button">
                    <p>Back To Home</p>
                    <img src="../assets/img/arrow.svg" alt="photo">

                </router-link>
            </div>
            <img class="content__img" src="../assets/img/Photo_28.png" alt="photo_28">
        </div>
    </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
export default {
    name: 'PageNumber404',
    components: {
        SiteHeader,
    }

};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.content {
    display: flex;
    gap: 81px;
    align-items: center;
    margin-top: 58px;

    &__left {
        width: 569px;

        &__title {
            color: #CDA274;
            font-family: DM Serif Display;
            font-size: 250px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }

        &__text {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.35px;
            margin-top: 15px;
        }

        &__button {
            display: flex;
            gap: 9px;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #FFF;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 0.36px;
            border: 1px solid #292F36;
            border-radius: 18px;
            background: #292F36;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            padding: 26px 54px;
            width: 253px;
            margin-top: 23px;
        }

        &__button:hover {
            color: #292F36;
            border: 1px solid #292F36;
            background: #FFF;

        }
    }

    &__img {
        border-radius: 0 0 0 400px;
    }
}
</style>