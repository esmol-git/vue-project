<script setup>
import { computed } from 'vue'
const props = defineProps({
    width: {
        type: String,
    },
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        required: false
    },
    rounded: {
        type: Boolean,
        required: false
    },
    outlined: {
        type: Boolean,
        required: false
    },
    iconBefore: {
        type: Boolean,
        required: false
    },
    iconAfter: {
        type: Boolean,
        required: false
    },
    icon: {
        type: Boolean,
        required: false
    },
    size: {
        type: String,
        default: 'normal'
    },
    activeButton: {
        type: [Boolean, String],
        default: false
    },
    icons: {
        type: String
    }
})
const emit = defineEmits(['click'])
const clickOnButton = () => {
    emit('click', props.label)
}
const isActive = computed(() => {
    return props.activeButton ? "btn_primary" : "btn_second";
})

</script>

<template>
    <button
        :class="['btn', `btn_${color}`, {'btn_success' : props.activeButton == props.label}, {'btn_rounded': rounded}, {'btn_outlined': outlined}, {'btn_icon': icon}, {'btn_large': size === 'large'}, {'btn_icon-before': iconBefore}, {'btn_icon-after': iconAfter}]"
        :disabled="disabled" @click="clickOnButton(props.label)" :style="{width: width}">
        <i v-if="iconBefore" :class="icons"></i>
        <i v-if="icon" :class="icons"></i>
        <span v-else>{{label}}</span>
        <i v-if="iconAfter" :class="icons"></i>
    </button>
</template>

