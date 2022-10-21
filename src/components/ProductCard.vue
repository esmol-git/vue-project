<script setup>
const props = defineProps({
    title: {
        type: String
    },
    type: {
        type: String
    }
})
const emit = defineEmits(['click'])
const clickCard = () => {
    emit('click', props.type)
}

</script>

<template>
    <div class="card" @click="clickCard()">
        <h2>{{title}}</h2>
        <strong>{{type}}</strong>
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>