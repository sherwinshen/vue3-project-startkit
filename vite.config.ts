import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 设置打包路径
  resolve: {
    // 别名配置
    alias: {
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
  plugins: [vue()],
});
