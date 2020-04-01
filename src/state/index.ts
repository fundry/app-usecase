import Vuex from "vuex";

import Vue from "vue";

import { User, Case } from "./modules";
Vue.use(Vuex); //load vuex

export default new Vuex.Store({
  modules: {
    User,
    Case
  }
});
