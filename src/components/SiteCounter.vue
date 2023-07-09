<template>
    <section class="counter">
        <div class="counter__tablo">
            <div class="counter__tablo__item">
                <h1 class="counter__tablo__item__number">12</h1>
                <p class="counter__tablo__item__text">Years Of Experiance</p>
            </div>

            <div class="counter__tablo__item__gap"></div>

            <div class="counter__tablo__item">
                <h1 class="counter__tablo__item__number">85</h1>
                <p class="counter__tablo__item__text">Success Project</p>
            </div>

            <div class="counter__tablo__item__gap"></div>

            <div class="counter__tablo__item">
                <h1 class="counter__tablo__item__number">15</h1>
                <p class="counter__tablo__item__text">Active Project</p>
            </div>

            <div class="counter__tablo__item__gap"></div>

            <div class="counter__tablo__item">
                <h1 class="counter__tablo__item__number">95</h1>
                <p class="counter__tablo__item__text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SiteCounter',
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 96px;
    background-color: $backgroundColorCounter;
    height: 457px;

    &__tablo {
        display: flex;
        justify-content: space-around;
        width: 1082px;
        height: 155px;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: center;
            width: 192;
            height: 155px;

            &__number {
                font-family: "DM Serif Display";
                font-style: normal;
                font-weight: 400;
                font-size: 85px;
                line-height: 125%;
                color: $numberCounterColor;
            }

            &__text {
                font-family: "Jost";
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                color: $textColor;
            }

            &__gap {
                width: 2px;
                height: 155px;
                border-left: 1px solid $numberCounterColor;
            }
        }
    }
}
</style>