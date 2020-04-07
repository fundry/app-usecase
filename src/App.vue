<template>
  <div id="app">
    <div>
      <Header />
    </div>

    <div class="router">
      <ul class="router-block">
        <li>
          <router-link to="/">
            <BIconHouse class="icon" />
          </router-link>
        </li>

        <li>
          <router-link to="/editor">
            <BIconBookHalfFill class="icon" />
          </router-link>
        </li>

        <li>
          <router-link to="/publish">
            <BIconCursor class="icon" />
          </router-link>
        </li>

        <li>
          <router-link to="/settings">
            <BIconGear class="icon" />
          </router-link>
        </li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script >
import { Component, Vue } from "vue-property-decorator";
import VueMq from "vue-mq";
import {
  BIconHouse,
  BIconGear,
  BIconBookHalfFill,
  BIconCursor
} from "bootstrap-vue";

import { Header } from "./components/";

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
    BIconCursor,
    BIconHouse,
    BIconGear,
    BIconBookHalfFill
  }
};
</script>

<style lang="postcss"   >
.icon {
  font-size: 2.2rem;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #0e2f5a;
  }
}

a {
  text-decoration: none;
}

.router {
  display: flex;
}

.router-block {
  display: grid;
  padding: 1rem;
  list-style: none;
  background: #100e17;
  color: #fff;
  height: 85vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
