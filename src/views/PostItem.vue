<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useInfoStore } from "../stores/info";
import { useRoute, useRouter } from "vue-router";
// const post = ref([])
const info = useInfoStore();
const route = useRoute();
const router = useRouter();
const loading = ref(info.loading);
const prevPage = () => {
  router.go(-1);
  info.infoId = {};
};
onMounted(async () => {
  await info.getInfoId({ id: route.params.id });
  console.log(loading.value);
  loading.value = false;
  console.log(loading.value);
});
</script>

<template>
  <div>
    <button @click="prevPage">Назад</button>
    <p v-if="loading">Loading</p>
    <div v-else class="post">
      <div class="post__header">
        <p class="post__userid">User ID: {{ info.infoId.userId }}</p>
        <p class="post__id">ID: {{ info.infoId.id }}</p>
      </div>
      <div class="post__body">
        <h2 class="post__title">{{ info.infoId.title }}</h2>
        <div class="post__text">{{ info.infoId.body }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 25px;
}

.post__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
  color: cadetblue;
  font-weight: 700;
}

.post__title {
  font-size: 30px;
  line-height: 2;
  color: blueviolet;
  font-weight: 700;
  text-align: center;
}

.post__title::first-letter {
  text-transform: uppercase;
}

.post__text {
  font-size: 20px;
}

.post__text::first-letter {
  text-transform: uppercase;
}
</style>
