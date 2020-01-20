<template>
  <div>
    <div id="top">
      <h5>Usecases</h5>
      <button>Create New Usecase</button>
    </div>
    <hr />

    <div id="body">
      <h1>
        Welcome
        <b>Nwani Victory</b>
      </h1>
      <p id="desc">
        You're yet to create a case.
        <br />Usecase are contained within single cases.
      </p>
      <a href="/">Learn More</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default {
  name: "Cases",
  data: () => {
    // hasCase: false;
  }
};
</script>

<style scoped>
#top {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
}

#body {
  text-align: center;
  margin: 5em;
}
h5 {
  padding-top: 10px;
}
#desc {
  font-size: 1.4em;
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
