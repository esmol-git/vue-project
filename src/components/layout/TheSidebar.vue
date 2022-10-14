<script setup>
import TheLinkSidebar from './TheLinkSidebar.vue';
import TheDropSidebar from './TheDropSidebar.vue';

const props = defineProps({
    hideTitle: {
        type: Boolean,
        default: true
    }
})
let sidebar = [
    { title: 'Home', to: '/home', icon: 'icon-home-4-converted', children: [] },
    { title: 'About', to: '/about', icon: 'icon-mail-converted', children: [] },
    { title: 'Auth', to: '/about', icon: 'icon-mail-converted', children: [{ title: 'Home', to: '/home', icon: 'icon-home-4-converted' }] },

]

</script>

<template>
    <div class="sidebar">
        <!-- <TheLinkSidebar v-for="item in sidebar" :key="item.title" :title="item.title" :link="item.to"
            :hideTitle="hideTitle" :icon="item.icon" /> -->
        <TheDropSidebar v-for="item in sidebar" :title="item.title" :hideTitle="hideTitle" :links="sidebar"
            :list="item.children" :to="item.to" :icon="item.icon" :linkShow="item.children.length <=0" />
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    width: 100%;
    height: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 0 12px 12px 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all .3s ease-in;
}
</style>