<script setup>
import { computed } from 'vue'
const props = defineProps({
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
const clickOnButton = (title) => {
    emit('click', title)
}
const isActive = computed(() => {
    return props.activeButton ? "btn_primary" : "btn_second";
})

</script>

<template>
    <button
        :class="['btn', {'btn_second' : props.activeButton == props.label}, {'btn_rounded': rounded}, {'btn_outlined': outlined}, {'btn_icon': icon}, {'btn_large': size === 'large'}]"
        :disabled="disabled" @click="clickOnButton(props.label)">
        <span v-if="icon">
            <i :class="icons"></i>
        </span>
        <span v-else>{{label}}</span>
    </button>
</template>

