<script setup>
import { ref } from 'vue'
import TheLinkSidebar from './TheLinkSidebar.vue';
const props = defineProps({
    title: {
        type: String
    },
    to: {
        type: String
    },
    list: {
        type: Array,
    },
    links: {
        type: Array,
    },
    icon: {
        type: String
    },
    hideTitle: {
        type: Boolean,
        default: true
    },
    linkShow: {
        type: Boolean,
    },
    hideTitle: {
        type: Boolean
    }
})
const hideList = ref(false)
const toggleDropdown = () => {
    hideList.value = !hideList.value
}
</script>

<template>
    <div class="dropdown">
        <TheLinkSidebar :hideTitle="hideTitle" v-if="linkShow" :title="title" :link="to" :icon="icon" />
        <div v-else class="dropdown__title" @click="toggleDropdown">
            <i class="icon-home-4-converted"></i>
            <span v-show="hideTitle">{{title}}1</span>
            <span v-show="hideTitle">+</span>
        </div>
        <div class="dropdown__list" v-show="hideList && hideTitle">
            <TheLinkSidebar v-for="item in list" :key="item.title" :title="item.title" :link="item.to"
                icon="icon-home-4-converted" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown {

    &__title {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        text-decoration: none;
        border-radius: 12px;
        width: 100%;
        font-size: 18px;
        font-weight: 500;
        transition: all .3s ease-in;
        cursor: pointer;

        i {
            font-size: 32px;
        }

        &:hover {
            background-color: rgba(aqua, .2);
        }
    }

    &__list {
        border-radius: 12px;
        margin-top: 10px;
        background-color: rgba(aqua, .2);

        .sidebar__item .sidebar__link {
            padding-left: 30px;

        }
    }
}
</style>