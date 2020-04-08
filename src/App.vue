<template>
  <div>
    <div v-if="$mq !== 'mobile'">
      <div id="app" v-if="isAuthenticated == true">
        <Header />

        <div class="router-contain">
          <Sidebar />
          <router-view></router-view>
        </div>
      </div>

      <Login v-else />
    </div>

    <div v-else class="small-device">
      <div class="content">
        <h5>Web Console only accessible via large screen devices.</h5>
        <hr />
        <p>Get the mobile app</p>
        <div>
          <button>Apple Store</button>

          <button>Google Play Store</button>
        </div>
      </div>
    </div>
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

.small-device {
  padding: 1rem;
  margin-top: 20vh;
  display: flex;
  place-self: center;
  justify-content: center;
}

.content {
  text-align: center;
  & p {
    font-size: 1.2rem;
  }
  & div {
    display: flex;
    justify-content: space-around;
    & button {
      outline: none;
      background: transparent;
      color: #000;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
