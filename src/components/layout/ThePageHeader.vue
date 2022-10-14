<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
    id: {
        type: [String, Number],
        default: ''
    }
})
</script>

<template>
    <div>
        <h1>{{route.name}} <span v-if="id">{{id}}</span></h1>
    </div>
</template>

<style lang="scss" scoped>

</style>