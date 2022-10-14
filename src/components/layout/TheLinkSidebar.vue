<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    title: {
        type: String
    },
    link: {
        type: String
    },
    icon: {
        type: String
    },
    hideTitle: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="sidebar__item">
        <RouterLink class="sidebar__link" :to="link">
            <i :class="icon"></i>
            <span v-show="hideTitle">{{ title }}</span>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    &__item {}

    &__link {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        text-decoration: none;
        border-radius: 12px;
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        transition: all .3s ease-in;

        &:active {
            color: currentColor;
        }

        &:hover {
            background-color: rgba(aqua, .2);
        }

        i {
            font-size: 32px;
        }

        &.router-link-exact-active {
            background-color: aqua;
        }
    }
}
</style>