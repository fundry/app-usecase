<template>
  <div id="app">
    <Banner />
    <Home />
    <br />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Banner, Footer } from "./components/";
import { Home } from "./pages/";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1100,
    laptop: 1300,
    desktop: Infinity
  }
});

@Component({
  components: {
    Banner,
    Home,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style  lang="postcss" >
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
    font-size: 1.3em;
  }

  @media (max-width: 1200px;) {
    font-size: 1.4em;
  }
}

h3 {
  font-weight: bold;
}
</style>
