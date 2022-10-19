<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/ui/Checkbox/CheckboxGroup.vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)

const listOfHeroes = ref([
    { name: 'Spider Man', id: 'h1' },
    { name: 'Batman', id: 'h2' },
    { name: 'Tor', id: 'h3' },
    { name: 'Loki', id: 'h4' },
])
const selectedHeroes = ref(['h1', 'h3'])

const switchProfessional = ref(false)
const switchProfessional1 = ref(false)
</script>

<template>
    <div class="row">
        <checkbox label="Checkbox Active" id="checkboxActive" name="checkboxActive" value="I like it"
            v-model:checked="checkboxActive" />
    </div>
    <h2 class="heading-2">Checkbox Disabled</h2>
    <div class="line">
        <checkbox label="Checkbox Disabled" id="checkboxDisabled" name="checkboxDisabled" value="I like it"
            :disabled="checkboxDisabled" v-model:checked="checkboxDisabledChecked" />
    </div>
    <h2 class="heading-2">Checkbox Group</h2>
    <div class="line line_block">
        <p>Selected Heroes: {{selectedHeroes}}</p>
        <checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes" />
    </div>
    <h2 class="heading-2">Switch</h2>
    <div class="line line_block">
        <p>Switch: {{switchProfessional}}</p>
        <p>Switch: {{switchProfessional1}}</p>
        <checkbox label="I'm a professional" id="switch" name="switch" value="I'm a professional" type="switch"
            v-model:checked="switchProfessional1" :disabled="checkboxDisabled" />
        <checkbox label="I'm a professional" id="switch1" name="switch" value="I'm a professional" type="switch"
            v-model:checked="switchProfessional" />
    </div>
    <div class="m-container">
        <div class="m-row">
            <div class="m-col">s</div>
        </div>
        <div class="m-row">
            <div class="m-col-2">s</div>
            <div class="m-col-2">s</div>
        </div>
        <div class="m-row">
            <div class="m-col-3">2</div>
            <div class="m-col-3">2</div>
            <div class="m-col-3">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-4">2</div>
            <div class="m-col-4">2</div>
            <div class="m-col-4">2</div>
            <div class="m-col-4">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-5">2</div>
            <div class="m-col-5">2</div>
            <div class="m-col-5">2</div>
            <div class="m-col-5">2</div>
            <div class="m-col-5">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-6">2</div>
            <div class="m-col-6">2</div>
            <div class="m-col-6">2</div>
            <div class="m-col-6">2</div>
            <div class="m-col-6">2</div>
            <div class="m-col-6">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
            <div class="m-col-7">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
            <div class="m-col-8">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
            <div class="m-col-9">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
            <div class="m-col-10">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
            <div class="m-col-11">2</div>
        </div>
        <div class="m-row">
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
            <div class="m-col-12">2</div>
        </div>
    </div>
</template>