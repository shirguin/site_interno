<template>
    <div class="sliderItem">
        <img :src="require('../assets/' + item.img)" alt="photo">
    </div>
</template>

<script>
export default {
    name: 'SliderItem',

    props: {
        item: Object
    },
};
</script>

<style lang="scss" scoped>
.sliderItem img {
    border-radius: 60px;
}
</style>