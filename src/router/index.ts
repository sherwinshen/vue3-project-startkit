import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { beforeEachHandler } from '@/router/handlers';

// 各模块路由
import home from './modules/home';
const routes = [...home] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach(beforeEachHandler);

export default router;
