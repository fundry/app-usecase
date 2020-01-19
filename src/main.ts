import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo'
 
import App from './App.vue';
import apolloClient from './data/config'

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/test', component: Foo },
  { path: '/bar', component: Bar },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes 
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient 
})

new Vue({
  router,
  apolloProvider , 
  render: (h) => h(App),
}).$mount('#app');
