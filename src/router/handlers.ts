import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const beforeEachHandler = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  // ...
  next();
};
