import Vue from 'vue';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import router from './router'

import store from './state/';
import './assets/css/variables.css';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
