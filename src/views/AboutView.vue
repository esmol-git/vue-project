<script setup>
import { useCounterStore } from "../stores/counter";
import { useInfoStore } from "../stores/info";

const counter = useCounterStore();
const info = useInfoStore();
const reset = () => {
  counter.count = 0;
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ info }}
    {{ infoId }}
    {{ counter.count }}
    {{ counter.doubleCount }}
    <button @click="counter.increment">Increment</button>
    <button @click="reset">Reset</button>
    <button @click="info.getInfo">info</button>
    <button @click="info.getInfoId({ args: 1 })">info</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
