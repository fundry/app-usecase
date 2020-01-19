<template>
  <div>
    <div id="top">
      <h5>Case</h5>
      <button>Create New Case</button>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style scoped>
#top {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
}

button {
  padding: 0.5em 2em;
  background: transparent;
  color: black;
  border-radius: 3px;
  border: 1.3px solid black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#contain {
  display: flex;
}
</style>
