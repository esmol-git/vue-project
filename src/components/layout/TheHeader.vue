<script setup>
const emit = defineEmits(['toggleSidebar'])
const props = defineProps({
    isActive: {
        type: Boolean
    }
})
const toggleSidebar = () => {
    emit('toggleSidebar')
}
</script>

<template>
    <i @click="toggleSidebar" :class="isActive ? 'icon-menu-unfold' : 'icon-menu-fold'"></i>

</template>

<style lang="scss" scoped>
i {
    font-size: 48px;
    cursor: pointer;
    transition: all .2s ease;
}
</style>