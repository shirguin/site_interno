<template>
    <header class="header center">
        <a href="index.html">
            <img src="../assets/img/Logo.svg" alt="logo" />
        </a>

        <nav class="header__nav">
            <router-link class="header__nav__link" to="/">Home</router-link>
            <router-link class="header__nav__link" to="/project">Project</router-link>
            <router-link class="header__nav__link" to="/blog">Blog</router-link>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'SiteHeader',
};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.header {
    display: flex;
    justify-content: space-between;
    margin-top: 44px;

    &__nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 50px;

        &__link {
            text-decoration: none;
            font-family: "Jost";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: #292f36;
        }
    }
}
</style>