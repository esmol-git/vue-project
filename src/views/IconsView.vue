<script setup>
import { useIconsStore } from "../stores/icons.js";
import { useToast } from 'vue-toast-notification';
const $toast = useToast();
const icons = useIconsStore();
const copy = (e) => {
    navigator.clipboard.writeText(`icon-${e.target.innerText}`)
    $toast.info(`Скопировано: icon-${e.target.innerText}`, { position: 'top-right' });
    // alert(`Скопировано: ${e.target.innerText}`)
}
</script>
<template>
    <div class="icons-grid">
        <div class="icons-grid__item" v-for="item in icons.icons">
            <i :class="`icon-${item.icon}`"></i>
            <p @click="copy">{{item.icon}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icons-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(10, 1fr);

    &__item {
        position: relative;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        border-radius: 8px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        // background-color: antiquewhite;
        &:hover p {
            opacity: 1;
        }

        i {
            font-size: 40px;
        }

        p {
            font-size: 12px;
            text-align: center;
            max-width: 100px;
            position: absolute;
            background-color: var(--vt-c-white);
            padding: 8px;
            opacity: 0;
            transition: all .2s ease-in;
        }
    }
}
</style>