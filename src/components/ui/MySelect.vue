<template>
    <div class="select-controll">
        <label :for="refer">{{ label }}</label>
        <div class="pb-input" v-click-outside="onClickOutside">
            <div @mousedown.exact.stop.prevent="onSelectClick">
                <i
                    :class="['append-icon', 'bx', {'bx-chevron-down': !isOpenMenu}, {'bx-chevron-up': isOpenMenu}, size]" />
                <select :class="['form-select', {active: isOpenMenu}, {error: isError}, size]" :id="refer"
                    :value="selected" :disabled="disabled" @change="$emit('update:selected', $event.target.value)">
                    <option value="0">{{ headerOption }}</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">{{option.text}}</option>
                </select>
            </div>
            <ul class="options-list" v-if="isOpenMenu">
                <li :class="[{active: selected===option.value}]" v-for="option in options" :key="option.value"
                    :value="option.value" @click="onUpdate(option)">
                    <span>{{option.text}}</span>
                </li>
            </ul>
        </div>
        <span
            :class="['input-notation', {error: isError}, {success: isSuccess}, {help: isHelp}, {'padding11': !message || message.length===0}]">{{message}}</span>
    </div>
</template>

<script>
import vClickOutside from "click-outside-vue3"

export default {
    name: "FormSelect",
    directives: {
        clickOutside: vClickOutside.directive
    },
    props: {
        label: { type: String, default: '' },
        refer: { type: String, default: '', required: true },
        options: { type: Array, required: true },
        selected: { type: [Number, String], default: 0 },
        headerOption: { type: String, default: '-- Select --' },
        message: { type: String, default: "" },
        isError: { type: Boolean, default: false },
        isSuccess: { type: Boolean, default: false },
        isHelp: { type: Boolean, default: false },
        size: {
            type: String,
            default: "normal",
            validator(value) {
                return ['small', 'normal'].includes(value)
            }
        },
        disabled: { type: Boolean, default: false }
    },
    emits: ['update:selected'],
    data: () => ({
        isOpenMenu: false
    }),
    methods: {
        onSelectClick() {
            if (!this.disabled) this.isOpenMenu = !this.isOpenMenu
        },
        onClickOutside() {
            this.isOpenMenu = false
        },
        onUpdate(option) {
            this.$emit('update:selected', option.value)
            this.$emit('change', { target: { value: option.value } })
            this.isOpenMenu = false
        }
    }
}
</script>
