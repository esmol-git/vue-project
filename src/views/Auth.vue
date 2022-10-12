<script setup>
import { RouterLink } from 'vue-router'
import { useRouter } from "vue-router";

const router = useRouter()
</script>

<template>
    <div>
        <button @click="router.go(-1)">Prev</button>
        <RouterLink to="/home">Home</RouterLink>
        <p>Form login</p>
    </div>
</template>

<style lang="scss" scoped>

</style>