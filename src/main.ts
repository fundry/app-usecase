import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import {
  Home,
  Login,
  CreateCase,
  CreateUsecase,
  App as Console,
  Signup,
  Import,
} from './pages/';

import store from './state/';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/create-case', component: CreateCase, name: 'Create Case' },
    { path: '/create-usecase', component: CreateUsecase, name: 'Create Case' },
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
