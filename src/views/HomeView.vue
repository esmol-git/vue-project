<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { onMounted, computed, ref, watch } from "vue";
import Multiselect from '@vueform/multiselect'
import { useInfoStore } from "../stores/info";
import Clock from '../components/Clock.vue';
const baseUrl = import.meta.env.VITE_APP_API_URL;
const infos = useInfoStore();
const name = ref("Jay");
const multiselect = ref(null)
const selectClose = () => {
  multiselect.value.close()
}
const noResultsText = ref('Ничего не найдено')
let value = ref(null)
let value1 = ref(null)
const options = ref([
  { value: 'judy', name: 'Judy', image: 'https://randomuser.me/api/portraits/med/women/1.jpg' },
  { value: 'jane', name: 'Jane', image: 'https://randomuser.me/api/portraits/med/women/2.jpg' },
  { value: 'john', name: 'John', image: 'https://randomuser.me/api/portraits/med/men/1.jpg' },
  { value: 'joe', name: 'Joe', image: 'https://randomuser.me/api/portraits/med/men/2.jpg' }
]);
watch(name, (currentValue, oldValue) => {
  console.log(currentValue);
  console.log(oldValue);
});
onMounted(() => {
  multiselect.value.open()
})
const getInfo = () => {
  if (infos.info.length <= 0)
    infos.getInfo();
};
const inputValue = ref('')
const countInput = ref('23')
</script>

<template>
  <main>
    <textarea :maxlength="countInput" v-model="inputValue" name="" id="" cols="30" rows="10"></textarea>
    <input :maxlength="countInput" type="text">
    <p>{{inputValue.length}}/{{countInput}}</p>
    <Clock />
    <h1 class="font-sans text-7xl font-bold underline bg-red-300">
      Hello world!
    </h1>
    <button @click="selectClose">Select close</button>
    <Multiselect v-model="value" :options="options" mode="tags" placeholder="Select employees" track-by="name"
      label="name" :close-on-select="false" :searchable="true">
      <template v-slot:tag="{ option, handleTagRemove, disabled }">
        <div class="multiselect-tag is-user" :class="{
          'is-disabled': disabled
        }">
          <img :src="option.image">
          {{ option.name }}
          <span v-if="!disabled" class="multiselect-tag-remove" @click="handleTagRemove(option, $event)">
            <span class="multiselect-tag-remove-icon"></span>
          </span>
        </div>
      </template>
    </Multiselect>

    <Multiselect v-model="value1" :options="options" class="multiselect-blue" ref="multiselect" placeholder="Select"
      :create-option="false" :searchable="true" mode="tags" />
    <p>{{value}}</p>
    <BaseIcon name="reports" class="icons-1" :stroke="false" />
    <BaseIcon name="mail" class="icons-2" />
    <p>{{ name }}</p>
    <p>{{ baseUrl }}</p>
    <p>yyy</p>
    <i class="icon-home-4-converted home"></i>
    <i :class="infos.info.length > 0 ? 'icon-reports-converted home':'icon-home-4-converted home__red home'"></i>
    <i class="icon-mail-converted home" @click="infos.info=[]"></i>
    <button @click="getInfo" :disabled="infos.info.length > 0">get info</button>
    <pre>{{ infos.info }}</pre>
  </main>
</template>

<style lang="scss">
.home {
  color: #fff;
  font-size: 32px;
  transition: all .3s linear;

  &__red {
    color: red;
  }

  &:hover {
    color: red;
  }
}
</style>