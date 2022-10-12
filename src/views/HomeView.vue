<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
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
    <BaseIcon name="reports" class="icons-1" :stroke="false" />
    <BaseIcon name="mail" class="icons-2" />
    <p>{{ name }}</p>
    <p>{{ baseUrl }}</p>
    <p>yyy</p>
    <i class="icon-home-4-converted home"></i>
    <i class="icon-reports-converted home"></i>
    <i class="icon-mail-converted home"></i>
    <button @click="getInfo">get info</button>
    <pre>{{ infos.info }}</pre>
  </main>
</template>

<style lang="scss">
.home {
  color: #fff;
  font-size: 32px;
  transition: all .3s linear;

  &:hover {
    color: red;
  }
}
</style>