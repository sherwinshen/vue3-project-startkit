import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// tailwind css
import '@/assets/styles/tailwind/index.less';

createApp(App).use(router).use(store).mount('#app');
