export interface State {
  count: number;
}

const state = (): State => {
  return {
    count: 0,
  };
};
const getters = {
  double(state: State) {
    return 2 * state.count;
  },
};
const actions = {
  increment(context: any) {
    context.commit('increment');
  },
};
const mutations = {
  increment(state: State) {
    state.count++;
  },
};

const countStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default countStore;
