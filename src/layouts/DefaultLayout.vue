<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref } from "vue";
import IconCommunity from "../components/icons/IconCommunity.vue";
import TheHeader from "../components/layout/TheHeader.vue";
import TheSidebar from "../components/layout/TheSidebar.vue";
import ThePageHeader from "../components/layout/ThePageHeader.vue";
name: 'Default Layout'

const route = useRoute()
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
                <TheSidebar :hideTitle="!sidebar" />
            </div>
            <div class="site__content">
                <div class="site__wrapper">
                    <div class="site__wrapper-content">
                        <ThePageHeader :id="route.params.id" />
                        <button @click="toggleSidebar">Toggle</button>
                        <RouterView />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>