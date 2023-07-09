<template>
    <div>
        <SiteHeader />
        <BlogDetailsBanner />
        <BlogDetailsContent/>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import BlogDetailsBanner from '../components/BlogDetailsBanner.vue';
import BlogDetailsContent from '../components/BlogDetailsContent.vue';
import SiteFooter from '../components/SiteFooter.vue';
export default {
    name: 'BlogDetailsPage',
    components: {
        SiteHeader,
        BlogDetailsBanner,
        BlogDetailsContent,
        SiteFooter,
    },
};
</script>

<style lang="scss" scoped></style>