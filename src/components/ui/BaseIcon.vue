<script setup>
import icons from '@/icons'
import { propsToAttrMap } from '@vue/shared';
const props = defineProps({
    name: {
        type: String
    },
    stroke: {
        type: Boolean,
        default: true
    },
    size: {
        type: Number,
        default: 32
    },


})
const path = icons[props.name]
</script>

<template>
    <svg :width="size" :height="size" :class="stroke ? 'icon__stroke' : 'icon__fill'" xmlns="http://www.w3.org/2000/svg"
        v-html="path">

    </svg>
</template>

<style>
.icon__stroke {
    stroke: currentColor;
    fill: none;

}

.icon__fill {
    stroke: none;
    fill: currentColor;
}
</style>