import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, payload) {
      console.log(state.loading);
      state.loading = payload;
    },
  },
  actions: {},
  modules: {},
});
