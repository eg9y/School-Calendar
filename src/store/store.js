import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 3
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYEar = payload;
    }
  }
});