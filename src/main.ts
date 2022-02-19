import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// import storeVuex from './store-vuex/index'; // vuex 已废弃
import store from './store/index';

// tailwind css
import '@/assets/styles/tailwind/index.less';

createApp(App)
  .use(router)
  // .use(storeVuex)
  .use(store)
  .mount('#app');
