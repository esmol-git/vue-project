<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, minLength, maxLength, numeric, email, sameAs, required } from '@vuelidate/validators'
import MyInput from '@/components/ui/MyInput.vue'
import MyButton from '@/components/ui/MyButton.vue'
import Checkbox from '@/components/ui/Checkbox/Checkbox.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')
const checkboxFiled = ref(true)

const allFields = [nameField, emailField, luckyField, passwordField, confirmPasswordField, frontendField]
const mustBeFrontend = (value) => value.includes('frontend')
const switchRequired = (value) => value == true
const rules = computed(() => ({
    nameField: {
        minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
        required: helpers.withMessage(`Обязательное поле`, required)
    },
    checkboxFiled: {
        required: helpers.withMessage(`Обязательное поле`, switchRequired)
    },
    emailField: {
        email: helpers.withMessage('Вы ввели неверный email', email)
    },
    luckyField: {
        maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
        numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
    },
    confirmPasswordField: {
        sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
    },
    frontendField: {
        frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
    }
}))
const v = useVuelidate(rules, { nameField, emailField, luckyField, confirmPasswordField, frontendField, checkboxFiled })
const resetFields = () => {
    allFields.forEach((el) => el.value = '')
}

const submitForm = () => {
    v.value.$touch()
    resetFields()
    if (v.value.$error) return
    alert('Form submitted')

}
</script>
<template>
    <form @submit.prevent="submitForm">
        <MyInput label="Your name" name="name" placeholder="Input your name" v-model:value="v.nameField.$model"
            :error="v.nameField.$errors" />

        <MyInput label="Your email" name="email" placeholder="Input your email" v-model:value="v.emailField.$model"
            :error="v.emailField.$errors" />

        <MyInput label="Your lucky number" name="lucky" placeholder="Input your lucky number"
            v-model:value="v.luckyField.$model" :error="v.luckyField.$errors" />

        <MyInput label="Your password" name="password" placeholder="Please input password" v-model:value="passwordField"
            type="password" />

        <MyInput label="Confirm password" name="confirm" placeholder="Please confirm password"
            v-model:value="v.confirmPasswordField.$model" :error="v.confirmPasswordField.$errors" type="password" />

        <MyInput label="Frontend string" name="frontend" placeholder="Input string with frontend"
            v-model:value="v.frontendField.$model" :error="v.frontendField.$errors" />
        <Checkbox label="Checkbox Active" id="checkboxFiled" name="checkboxFiled" value="I like it"
            v-model:checked="v.checkboxFiled.$model" :error="v.checkboxFiled.$errors" />
        <MyButton width="300px" label="Submit" color="primary" :disabled="v.$errors.length > 0"></MyButton>
        <!-- <MyButton width="300px" label="Reset" color="primary" @click="resetFields"></MyButton> -->
    </form>
</template>