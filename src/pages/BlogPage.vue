<template>
    <div>
        <SiteHeader />
        <BlogBanner />
        <BlogLatestPost />
        <BlogArticles />
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import BlogBanner from '../components/BlogBanner.vue';
import BlogLatestPost from '../components/BlogLatestPost.vue';
import BlogArticles from '../components/BlogArticles.vue';
import SiteFooter from '../components/SiteFooter.vue';
export default {
    name: 'BlogPage',
    components: {
        SiteHeader,
        BlogBanner,
        BlogLatestPost,
        BlogArticles,
        SiteFooter,
    },
};
</script>

<style lang="scss" scoped></style>