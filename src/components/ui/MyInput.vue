<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
    error: {
        type: Array,
        required: false
    },
    value: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    width: {
        type: String,
        default: '300px'
    }
})
const updateValue = (e) => {
    emit('update:value', e.target.value)
}
</script>

<template>
    <div class="form-input" :style="{width: width}">
        <i v-if="error?.length > 0 " :class="['icon-home-4-converted',{'form-error-icon': error?.length > 0 }]"></i>
        <input :class="['input-text', {'input-text-error': error?.length > 0 }]" :type="type" :name="name" :id="name"
            :placeholder="placeholder" :value="value" @input="updateValue">
        <label :for="name" :class="['input-label', {'input-label-error': error?.length > 0 }]">{{label}}</label>
        <TransitionGroup>
            <div class="form-error" v-for="element of error" :key="element.$uid">
                <div class="form-error__message">{{element.$message}}</div>
            </div>
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
.form {
    &-input {
        margin-bottom: 30px;
        position: relative;
    }

    &-error {
        margin-top: 4px;
        border-radius: 7px;
        font-size: 13px;
        color: #fff;
        padding: 5px;
        background-color: var(--danger);

        &-icon {
            position: absolute;
            top: 12px;
            right: 10px;
            color: var(--danger);
            z-index: 10;
        }
    }
}

.input {
    &-text {
        border: 1px solid var(--primary);
        padding: 0 10px;
        height: 40px;
        border-radius: 7px;
        font-size: 15px;
        width: 100%;
        position: relative;
        z-index: 1;

        &-error {
            border-color: var(--danger);
        }



        &:focus {
            outline: var(--primary);

            &+.input-label {
                z-index: 1;
                opacity: 1;
                top: -20px;
            }
        }

        &:not(:placeholder-shown) {
            &+.input-label {
                z-index: 1;
                opacity: 1;
                top: -20px;
            }
        }
    }

    &-label {
        font-weight: bold;
        display: block;
        position: absolute;
        top: 20px;
        opacity: 0;
        z-index: -1;
        transition: .3s;
        font-size: 13px;
        color: var(--primary);

        &-error {
            color: var(--danger);
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>