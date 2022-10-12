<script setup>
import { useRouter, useRoute } from "vue-router";
import { useInfoStore } from "../stores/info";
import { onMounted, ref, computed } from "vue";
import MyButton from '@/components/ui/MyButton.vue'
import MySelect from '@/components/ui/MySelect.vue'
import Tabs from '@/components/ui/MyTabs.vue'
const tabs = [
  { name: 'About', label: 'О проекте' },
  { name: 'Vue', label: 'Про Vue' },
  { name: 'React', label: 'Про React' },
]
const selectedTab = ref(tabs[1].name)
const changeTab = (tabName) => {
  selectedTab.value = tabName
}
const router = useRouter();
const info = useInfoStore();
const loading = ref(info.loading);
const postIdItem = ref(0);
const postId = (id) => {
  postIdItem.value = id;
  router.push(`/post/${id}`);
};
const buttons = [
  { id: 1, title: "grid-4" },
  { id: 2, title: "grid-3" },
  { id: 3, title: "grid-2" },
  { id: 4, title: "grid-1" },
];
const select = [
  { value: "1", text: "vue" },
  { value: "2", text: "react" },
  { value: "3", text: "angular" },
]
const query = ref("");
const activeButton = ref(buttons[0].title);
const grid = ref(false);
const grid2 = ref(false);
const grid3 = ref(false);
const grid4 = ref(true);
const queryPost = computed(() => {
  let posts = info.info;
  return (
    posts.filter((post) => post.title.toString().indexOf(query.value) !== -1) ||
    posts.filter((post) => post.title.indexOf(query.value) !== -1)
  );
});

function sortAsc() {
  let posts = info.info;
  return posts.sort();
}
function sortDesc() {
  let posts = info.info;
  return posts.sort().reverse();
}

const resetButton = () => {
  grid.value = false;
  grid2.value = false;
  grid3.value = false;
  grid4.value = false;
};
const gridFour = () => {
  resetButton();
  grid4.value = true;
};
const gridThree = () => {
  resetButton();
  grid3.value = true;
};
const gridTwo = () => {
  resetButton();
  grid2.value = true;
};
const gridOne = () => {
  resetButton();
  grid.value = true;
};
const selectedType = ref(0)
const gridButtonClick = (title) => {
  activeButton.value = title
  if (activeButton.value == buttons[0].title) {
    gridFour()
  }
  if (activeButton.value == buttons[1].title) {
    gridThree()
  }
  if (activeButton.value == buttons[2].title) {
    gridTwo()
  }
  if (activeButton.value == buttons[3].title) {
    gridOne()
  }
  // let buttonValue = e.target.value;
  // buttons.forEach((el) => {
  //   if (buttonValue == el.title) {
  //     if (!e.target.classList.contains("active")) {
  //       e.target.classList.add("active");
  //     } else e.target.classList.remove("active");
  //   }
  //   console.log(el);
  // });

  // console.log(e);
};
onMounted(() => {
  info.getInfo();
  loading.value = false;
});
</script>
<template>
  <div class="about">
    <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div v-if="selectedTab === tabs[0].name">
        Lorem ipsum dolor sit amet.
      </div>
      <div v-if="selectedTab === tabs[1].name">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
      </div>
      <div v-if="selectedTab === tabs[2].name">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
      </div>
    </Tabs>
    <h1>This is an about page</h1>
    <button @click="sortAsc">Sort A-Z ↑</button>
    <button @click="sortDesc">Sort Z-A ↓</button>
    <div class="posts__header"></div>
    <strong class="post__id">Post ID: <span>{{ postIdItem }}</span>
    </strong>
    <input type="search" placeholder="Search post" v-model="query" />
    <p>{{ query }}</p>
    <span>Posts counter:{{ queryPost.length }}</span>
    <div class="buttons">
      <MyButton v-for="button in buttons" :key="button.id" @click="gridButtonClick($event)" :label="button.title"
        :activeButton="activeButton" />
      <MySelect label="select" size="small" refer="status" :options="select" v-model:selected="selectedType"
        header-option="select" />

    </div>
    <p v-if="loading">Loading</p>
    <p class="post__null" v-else-if="queryPost <= 0">Нет записей</p>
    <div v-else v-auto-animate :class="[
      { posts__inline: grid },
      { 'posts__grid-2': grid2 },
      { 'posts__grid-3': grid3 },
      { 'posts__grid-4': grid4 },
    ]">
      <div class="post" v-for="post in queryPost" :key="post.id" @click="postId(post.id)">
        <p>{{ post.id }}</p>
        <h2 class="post__title">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-color: blue;
}

button {
  cursor: pointer;
}

button.active {
  background-color: red;
  color: aliceblue;
}

.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.posts__grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.posts__grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.posts__grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.posts__inline {
  display: grid;
  gap: 20px;
}

.post {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--color-text);
  cursor: pointer;
}

.post__title {
  color: blueviolet;
}

.post__id {
  font-size: 32px;
}

.post__id span {
  color: blueviolet;
}

.posts__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__null {
  font-size: 50px;
  color: blueviolet;
}

input[type="search"]::-webkit-search-cancel-button {
  /* псевдо что-то, что отвечает за кнопку очистки */
  /* -webkit-appearance: none; */
  /* без сброса оформление не применится */
  width: 17px;
  /* размеры кастомного крестика */
  height: 16px;
  /* background: url(../assets/img/close.png); */
  /* новый вид крестика */
  margin-right: 2px;
  /* его даже можно позиционировать */
  cursor: pointer;
  /* вот это не работает */
}
</style>
