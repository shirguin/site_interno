<template>
    <div class="wrapper center">
        <div class="slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <SliderItem v-for="item in sliderItems" :key="item.id" :item="item" />
        </div>
        <div class="slider__buttons">
            <button @click="prevSlide"><img src="../assets/img/arrow-left.svg" alt="photo"></button>
            <button @click="nextSlide"><img src="../assets/img/arrow-right.svg" alt="photo"></button>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import SliderItem from './SliderItem.vue';
export default {
    name: 'SliderComp',

    components: {
        SliderItem,
    },

    data() {
        return {
            currentSlideIndex: 0
        };
    },

    methods: {
        prevSlide() {
            if (this.currentSlideIndex >= 0) {
                this.currentSlideIndex--;
            }
        },

        nextSlide() {
            if (this.currentSlideIndex >= this.sliderItems.length - 1) {
                this.currentSlideIndex = 0;
            } else {
                this.currentSlideIndex++;
                console.log(this.currentSlideIndex);
            }
        }
    },

    computed: {
        ...mapState(['sliderItems'])
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.wrapper {
    max-width: 1197px;
    overflow: hidden;
    }
.slider {
    display: flex;
    transition: all ease .5s;
    margin-top: 100px;

    &__buttons {
        display: flex;
        justify-content: center;
        gap: 100px;
        width: 1197px;
        padding-top: 50px;
        margin-bottom: 100px;
    }
}
</style>