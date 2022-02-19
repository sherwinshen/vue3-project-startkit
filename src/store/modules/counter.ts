import { defineStore } from 'pinia';

export interface State {
  count: number;
}

export const useCounterStore = defineStore({
  id: 'count',
  state: (): State => ({
    count: 0,
  }),
  getters: {
    doubleCount(state: State) {
      return 2 * state.count;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
