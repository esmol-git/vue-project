import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../api";
export const useInfoStore = defineStore("info", () => {
  const info = ref([]);
  const infoId = ref({});
  const loading = ref(true);
  async function getInfo() {
    info.value = await api.info();
    info.value = info.value;
  }
  async function getInfoId(payload) {
    infoId.value = await api.info({
      args: { id: payload.id },
    });
    // loading.value = false;

    console.log(payload);
  }

  return {
    info,
    infoId,
    loading,
    getInfo,
    getInfoId,
  };
});
