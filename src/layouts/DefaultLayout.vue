<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import IconCommunity from "../components/icons/IconCommunity.vue";
import TheHeader from "../components/layout/TheHeader.vue";
name: 'Default Layout'

const sidebar = ref(false)
const toggleSidebar = () => {
    sidebar.value = !sidebar.value
}

</script>
<template>
    <div class="site">
        <div class="site__header">
            <TheHeader />
        </div>
        <div :class="['site__main', sidebar ? 'site__main--mini' : 'site__main--full']">
            <div v-auto-animate :class="['site__sidebar', sidebar ? 'site__sidebar--mini' : 'site__sidebar--full']">
                {{sidebar}}</div>
            <div class="site__content">
                <h1>Default Layout</h1>
                <button @click="toggleSidebar">Toggle</button>
                <IconCommunity />
                <RouterView />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>