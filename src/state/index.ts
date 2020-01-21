import Vuex from 'vuex';
import Vue from 'vue';

import { Auth } from './modules';

Vue.use(Vuex); //load vuex

export default new Vuex.Store({
  modules: {
    Auth,
  },
});
