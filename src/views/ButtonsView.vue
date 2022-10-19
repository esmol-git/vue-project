<script setup>
import { ref } from 'vue'
import MyButton from '@/components/ui/MyButton.vue'

const activeButton = ref('Primary-1');
const buttonClick = (title) => {
    activeButton.value = title



    // if (activeButton.value == title) {
    //     // gridFour()
    // }
    console.log(title);
};
</script>

<template>
    <h3 class="row__title">Fill</h3>
    <div class="row">
        <MyButton color="second" label="Second" @click="click($event)" />
        <MyButton color="primary" label="Primary" @click="click($event)" />
        <MyButton color="success" label="Success" />
        <MyButton color="info" label="Info" />
        <MyButton color="warning" label="Warning" />
        <MyButton color="danger" label="Danger" />
    </div>
    <h3 class="row__title">Outline</h3>
    <div class="row">
        <MyButton color="second" label="Second" :outlined="true" />
        <MyButton color="primary" label="Primary" :outlined="true" />
        <MyButton color="success" label="Success" :outlined="true" />
        <MyButton color="info" label="Info" :outlined="true" />
        <MyButton color="warning" label="Warning" :outlined="true" />
        <MyButton color="danger" label="Danger" :outlined="true" @click="click($event)" />
    </div>
    <h3 class="row__title">Disabled</h3>
    <div class="row">
        <MyButton color="second" label="Second" :disabled="true" />
        <MyButton color="primary" label="Primary" :outlined="true" :disabled="true" />
        <MyButton color="success" :icon="true" icons="icon-crown-vip" :disabled="true" />
        <MyButton color="info" :outlined="true" :icon="true" icons="icon-circle-information" :disabled="true" />
        <MyButton color="warning" label="Warning" :outlined="true" :disabled="true" />
        <MyButton color="danger" label="Danger" :outlined="true" :disabled="true" />
    </div>
    <h3 class="row__title">Icon After Before</h3>
    <div class="row">
        <MyButton color="second" label="Second" icons="icon-bell-2" :iconBefore="true" />
        <MyButton color="primary" label="Primary" icons="icon-bank" :iconBefore="true" :outlined="true" />
        <MyButton color="success" label="Success" icons="icon-face-sad" :iconBefore="true" />
        <MyButton color="info" label="Info" icons="icon-mail" :iconAfter="true" :outlined="true" />
        <MyButton color="warning" label="Warning" icons="icon-money" :iconAfter="true" />
        <MyButton color="danger" label="Danger" icons="icon-reports" :outlined="true" :iconAfter="true" />
    </div>
    <h3 class="row__title">Large</h3>
    <div class="row">
        <MyButton color="second" label="Second" size="large" />
        <MyButton color="primary" label="Primary" :outlined="true" size="large" />
        <MyButton color="success" label="Success" icons="icon-send-1" :iconBefore="true" size="large" />
        <MyButton color="info" label="Info" icons="icon-timer" :iconAfter="true" :outlined="true" size="large" />
        <MyButton color="warning" label="Warning" icons="iicon-user" :iconAfter="true" size="large" />

    </div>
    <h3 class="row__title">Icons fill</h3>
    <div class="row">
        <MyButton color="second" :icon="true" icons="icon-star" />
        <MyButton color="primary" :icon="true" icons="icon-cam-2" />
        <MyButton color="success" :icon="true" icons="icon-heart" />
        <MyButton color="info" :icon="true" icons="icon-settings-1" />
        <MyButton color="warning" :icon="true" icons="icon-volume-high" />
        <MyButton color="danger" :icon="true" icons="icon-volume-low" />
    </div>
    <h3 class="row__title">Icons outline</h3>
    <div class="row">
        <MyButton color="second" :outlined="true" :icon="true" icons="icon-heart" />
        <MyButton color="primary" :outlined="true" :icon="true" icons="icon-star" />
        <MyButton color="success" :outlined="true" :icon="true" icons="icon-volume-high" />
        <MyButton color="info" :outlined="true" :icon="true" icons="icon-settings-1" />
        <MyButton color="warning" :outlined="true" :icon="true" icons="icon-volume-high" />
        <MyButton color="danger" :outlined="true" :icon="true" icons="icon-volume-low" />
    </div>
    <h3 class="row__title">Toggle</h3>
    <div class="row">

        <MyButton color="primary" label="Primary-1" :activeButton="activeButton" @click="buttonClick($event)" />
        <MyButton color="primary" label="Primary-2" :activeButton="activeButton" @click="buttonClick($event)" />
        <MyButton color="primary" label="Primary-3" :activeButton="activeButton" @click="buttonClick($event)" />
    </div>

</template>



<style lang="scss" scoped>

</style>