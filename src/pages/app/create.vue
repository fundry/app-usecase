<template>
  <div>
    <Header />
    <br />
    <div id="body">
      <input id="usecase" type="text" placeholder="What's your Usecase" />

      <br />
      <br />
      <input type="text" placeholder="Description" />

      <div id="tags">
        <p>Tags</p>
      </div>

      <div id="btn-contain">
        <br />
        <button>Create Usecase</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "../../components";

@Component({
  components: { Header }
})
export default class App extends Vue {}
</script>

<style scoped>
#body {
  padding: 1em;
}

#form-contain {
  text-align: center;
}

input {
  padding-left: 20px;
  width: 55em;
  height: 60px;
  border-radius: 5px;
  border: 1px solid black;
}

button {
  padding: 0.7em 13em;
  background: green;
  color: white;
  border-radius: 5px;
  font-size: 1.2em;
  text-align: center;
  border: 1.3px solid white;
}

#btn-contain {
  text-align: center;
}

#tags {
  margin: 20px;
  height: 15vh;
  border: 3px dashed grey;
  padding: 15px;
  border-radius: 3px;
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
