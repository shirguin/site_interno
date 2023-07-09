<template>
    <div>
        <SiteHeader />
        <SiteBanner />
        <SiteProjects />
        <SiteCounter />
        <SiteArticles/>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import SiteBanner from '../components/SiteBanner.vue';
import SiteProjects from '../components/SiteProjects.vue';
import SiteCounter from '../components/SiteCounter.vue';
import SiteArticles from '../components/SiteArticles.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
    name: 'HomePage',
    components: {
        SiteHeader,
        SiteBanner,
        SiteProjects,
        SiteCounter,
        SiteArticles,
        SiteFooter

    },
};
</script>

<style lang="scss" scoped></style>