<template>
  <div>
    <div id="app" v-if="isAuthenticated == true">
      <Header />

      <div class="router-contain">
        <Sidebar />
        <router-view></router-view>
      </div>
    </div>

    <Login v-else />
  </div>
</template>

<script >
import { Component, Vue } from "vue-property-decorator";
import VueMq from "vue-mq";
import { mapGetters, mapActions } from "vuex";

import Login from "./pages/auth/login";
import { Header, Sidebar } from "./components/";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 700,
    tablet: 1100,
    laptop: 1700,
    desktop: Infinity
  }
});

export default {
  name: "App",
  components: {
    Header,
    Login,
    Sidebar
  },
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(["authUser"])
  }
};
</script>

<style scoped lang="postcss" >
.router-contain {
  display: flex;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
