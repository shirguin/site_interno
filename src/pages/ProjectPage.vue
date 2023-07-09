<template>
    <div>
        <SiteHeader />
        <ProjectBanner />
        <ProjectCategories />
        <ProjectContent />
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import ProjectBanner from '../components/ProjectBanner.vue';
import ProjectCategories from '../components/ProjectCategories.vue';
import ProjectContent from '../components/ProjectContent.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
    name: 'ProjectPage',
    components: {
        SiteHeader,
        ProjectBanner,
        ProjectCategories,
        ProjectContent,
        SiteFooter
    },

};
</script>

<style lang="scss" scoped></style>