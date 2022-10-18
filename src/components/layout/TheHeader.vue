<script setup>
const emit = defineEmits(['toggleSidebar'])
const toggleSidebar = () => {
    emit('toggleSidebar')
}
</script>

<template>
    <button @click="toggleSidebar">Toggle</button>

</template>

<style lang="scss" scoped>

</style>