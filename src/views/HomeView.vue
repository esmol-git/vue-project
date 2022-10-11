<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useInfoStore } from "../stores/info";
const baseUrl = import.meta.env.VITE_APP_API_URL;
const infos = useInfoStore();
const name = ref("Jay");
watch(name, (currentValue, oldValue) => {
  console.log(currentValue);
  console.log(oldValue);
});

const getInfo = () => {
  infos.getInfo();
};
</script>

<template>
  <main>
    <p>{{ name }}</p>
    <p>{{ now }}</p>
    <p>{{ baseUrl }}</p>

    <button @click="getInfo">get info</button>
    <pre>{{ infos.info }}</pre>
  </main>
</template>
