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

@Component({
  components: {
    Banner,
    Home,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

p {
  font-size: 1.3em;
}

h3 {
  font-weight: bold;
}
</style>
