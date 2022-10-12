<script setup>
import { RouterView, RouterLink } from "vue-router";
import IconCommunity from "../components/icons/IconCommunity.vue";

name: 'Default Layout'

</script>
<template>
    <div>
        <nav>
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/login">Auth</RouterLink>
        </nav>
        <h1>Default Layout</h1>
        <IconCommunity />
        <RouterView />
    </div>
</template>



<style lang="scss" scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>