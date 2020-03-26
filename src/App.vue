<template>
  <div id="app">
    <Header />

    <div id="contain">
      <Case />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "./components/";

import Case from "./pages/app/casesList.vue";

import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 700,
    tablet: 1100,
    laptop: 1700,
    desktop: Infinity
  }
});

@Component({
  components: {
    Header,
    Case
  }
})
export default class App extends Vue {}
</script>

<style lang="postcss">
#flex {
  display: flex;
}

#hover {
  cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

p {
  @media (max-width: 400px;) {
    font-size: 1.2em;
  }

  @media (max-width: 900px;) {
    font-size: 1.4em;
  }

  @media (max-width: 1200px;) {
    font-size: 1.4em;
  }
}

h3 {
  font-weight: bold;
}
</style>
