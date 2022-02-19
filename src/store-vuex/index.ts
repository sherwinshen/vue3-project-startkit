import { createStore } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// 模块内容
import count from '@/store-vuex/modules/count';

export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    count,
  },
});
