import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 设置打包路径
  resolve: {
    // 别名配置
    alias: {
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, 'src/assets/styles/common/index.less')}";`, // 引入公共内容
      },
    },
  },
  server: {
    port: 3000,
    open: true, // 自动打开
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8080', // 后端服务地址
        changeOrigin: true, // 开启代理
        rewrite: (path) => {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
