<script setup lang="ts">
import { ref, computed } from 'vue';

import { useStore } from 'vuex';
const store = useStore();
const count = computed(() => {
  return store.state.count.count;
});
const doubleCount = computed(() => {
  return store.getters['count/double'];
});
const add = () => {
  store.commit('count/increment');
};

defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <el-button @click="add">count is: {{ doubleCount }} - {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
