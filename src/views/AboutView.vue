<script setup>
import { useRouter, useRoute } from "vue-router";
import { useInfoStore } from "../stores/info";
import { onMounted, ref, computed } from "vue";
const router = useRouter();
const info = useInfoStore();
const loading = ref(info.loading);
const postIdItem = ref(0);
const postId = (id) => {
  postIdItem.value = id;
  router.push(`/post/${id}`);
};
const buttons = [
  { id: 1, title: "button-1" },
  { id: 2, title: "button-2" },
  { id: 3, title: "button-3" },
];
const query = ref("");
const buttonActive = ref(false);
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
const gridButtonClick = (e) => {
  let buttonValue = e.target.value;
  buttons.forEach((el) => {
    if (buttonValue == el.title) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
      } else e.target.classList.remove("active");
    }
    console.log(el);
  });

  console.log(buttonValue);
};
onMounted(() => {
  info.getInfo();
  loading.value = false;
});
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sortAsc">Sort A-Z ↑</button>
    <button @click="sortDesc">Sort Z-A ↓</button>
    <div class="posts__header"></div>
    <strong class="post__id"
      >Post ID: <span>{{ postIdItem }}</span>
    </strong>
    <input type="search" placeholder="Search post" v-model="query" />
    <p>{{ query }}</p>
    <span>Posts counter:{{ queryPost.length }}</span>
    <div class="buttons">
      <button :class="[{ active: grid4 && buttonActive }]" @click="gridFour">
        <span>Grid-4 - {{ grid4 }}</span>
      </button>
      <button :class="[{ active: grid3 && buttonActive }]" @click="gridThree">
        <span>Grid-3 - {{ grid3 }}</span>
      </button>
      <button :class="[{ active: grid2 && buttonActive }]" @click="gridTwo">
        <span>Grid-2 - {{ grid2 }}</span>
      </button>
      <button :class="[{ active: grid && buttonActive }]" @click="gridOne">
        <span>Grid - {{ grid }}</span>
      </button>
      <button
        v-for="button in buttons"
        :key="button.id"
        :class="[{ active: buttonActive }]"
        :value="button.title"
        @click="gridButtonClick"
      >
        {{ button.title }}
      </button>
    </div>
    <p v-if="loading">Loading</p>
    <p class="post__null" v-else-if="queryPost <= 0">Нет записей</p>
    <div
      v-else
      v-auto-animate
      :class="[
        { posts__inline: grid },
        { 'posts__grid-2': grid2 },
        { 'posts__grid-3': grid3 },
        { 'posts__grid-4': grid4 },
      ]"
    >
      <div
        class="post"
        v-for="post in queryPost"
        :key="post.id"
        @click="postId(post.id)"
      >
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
