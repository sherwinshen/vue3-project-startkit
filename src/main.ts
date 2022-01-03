import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

// tailwind css
import '@/assets/styles/tailwind/index.less';

createApp(App).use(router).mount('#app');
