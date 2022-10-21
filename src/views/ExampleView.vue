<script setup>
import { ref, computed } from "vue"
import MyTabs from '@/components/ui/MyTabs.vue';
import ProductCard from '@/components/ProductCard.vue';


const tabs =
    [
        { id: 1, title: 'Tab-1' },
        { id: 2, title: 'Tab-2' },
        { id: 3, title: 'Tab-3' },
        { id: 4, title: 'Tab-4' },
    ]
const cards = [
    { title: 'Card-1', type: 'star' },
    { title: 'Card-2', type: 'black' },
    { title: 'Card-3', type: 'star' },
    { title: 'Card-4', type: 'black' },
    { title: 'Card-5', type: 'star' },
    { title: 'Card-6', type: 'wow' },
    { title: 'Card-7', type: 'star' },
]
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const number = ref(getRandomInt(1, 5))
console.log("www", number.value);
const selectedTab = ref(number.value)
const changeTab = (type) => {
    selectedTab.value = type
    console.log(type);
}
const clickCard = (type) => {
    console.log(type);
}

const queryCard = computed(() => {
    if (selectedTab.value == 2) {
        return cards.filter((el) => el.type === 'star')
    }

    if (selectedTab.value == 3) {
        return cards.filter((el) => el.type === 'black')
    }
    if (selectedTab.value == 4) {
        return cards.filter((el) => el.type === 'wow')
    }
    return cards
})
const sortCard = computed(() => { })
</script>

<template>
    <div>
        <!-- <MyTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
            <div v-if="selectedTab == 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo?
            </div>
            <div v-if="selectedTab == 2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo?2
            </div>
            <div v-if="selectedTab == 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo?3
            </div>
            <div v-if="selectedTab == 4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo?4
            </div>

        </MyTabs> -->
        <MyTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
            <p>length:{{queryCard.length}}</p>
            <div class="cards" v-auto-animate>
                <ProductCard v-for="card in queryCard" :key="card.title" :title="card.title" @click="clickCard"
                    :type="card.type" />
            </div>

        </MyTabs>
    </div>
</template>

<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>