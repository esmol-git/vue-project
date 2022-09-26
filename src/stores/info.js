import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../api";
export const useInfoStore = defineStore("info", () => {
  const info = ref({});
  const infoId = ref({});
  async function getInfo() {
    info.value = await api.info();
  }
  async function getInfoId({ payload }) {
    infoId.value = await api.info({ args: { id: payload } });
  }

  return {
    info,
    infoId,
    getInfo,
    getInfoId,
  };
});