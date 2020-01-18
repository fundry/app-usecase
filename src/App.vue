<template>
  <div id="app">
    <Header />

    <HelloWorld msg="Tired of the noise on technologies" />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Header, Footer } from "./components/";

export default {
  name: "app",
  components: {
    HelloWorld,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
