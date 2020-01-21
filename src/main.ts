import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import { Home, Login, Create, App as Console, Signup } from './pages/';

import store from './state/';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/create', component: Create, name: 'Create' },
    { path: '/signup', component: Signup, name: 'Signup' },
  ],
});

Vue.use(VueApollo, VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  store,
  router,
  apolloProvider,
  // router,
  render: (h) => h(App),
}).$mount('#app');
