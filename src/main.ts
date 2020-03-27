import Vue from 'vue';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import Router from './router'

import store from './state/';
import './assets/css/variables.css';

Vue.config.productionTip = false;

Vue.use(VueApollo, Router);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// TODO: FIX ROUTER

new Vue({
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
