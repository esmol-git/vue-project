<script setup>
// import { onMounted } from "vue";
import { useInfoStore } from "../stores/info";
const infos = useInfoStore();
// onMounted(() => {
//   infos.getInfo();
// });
const getInfo = () => {
  infos.getInfo();
};
</script>

<template>
  <main>
    <button @click="getInfo">get info</button>
    <pre>{{ infos.info }}</pre>
  </main>
</template>
