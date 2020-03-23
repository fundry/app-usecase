import Vuex from "vuex";

import Vue from "vue";

import { Auth, Case } from "./modules";
Vue.use(Vuex); //load vuex

export default new Vuex.Store({
  modules: {
    Auth,
    Case
  }
});
