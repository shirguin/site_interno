<template>
    <div>
        <SiteHeader />
        <ProjectDetailsBanner />
        <ProjectDetailsContent />
        <SliderComp/>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import ProjectDetailsBanner from '../components/ProjectDetailsBanner.vue'
import ProjectDetailsContent from '../components/ProjectDetailsContent.vue'
import SliderComp from '../components/SliderComp.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
    name: 'ProjectDetailsPage',
    components: {
        SiteHeader,
        ProjectDetailsBanner,
        ProjectDetailsContent,
        SliderComp,
        SiteFooter
    },

};
</script>

<style lang="scss" scoped></style>