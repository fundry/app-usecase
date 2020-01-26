<template>
  <div>
    <Header />
    <br />
    <div id="intro">
      <p>Creating your Cases from existing projects helps autofill certain details such as Tools Used, Semantic Versioning, Project Description.</p>

      <ul v-bind:key="l" v-for="l in list">
        <li>{{l.item}}</li>
      </ul>
    </div>

    <div id="import-body">
      <p id="title">Import your existing project from;</p>
      <div>
        <div>
          <button>BitBucket</button>
        </div>
        <br />
        <div>
          <button>Github</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "../../../components";

@Component({
  components: { Header },
  data: () => {
    return {
      list: [
        { id: 1, item: "Tools Used" },
        { id: 1, item: "Semantic Versioning" },
        { id: 1, item: "Project Description" }
      ]
    };
  }
})
export default class App extends Vue {}
</script>

<style scoped>
#import-body {
  text-align: center;
  padding: 1em;
}
#intro {
  text-align: center;
  font-size: 1.3em;
  padding: 0.7em;
}
#title {
  font-size: 1.3em;
}
input[type="text"] {
  padding-left: 20px;
  width: 55em;
  height: 60px;
  border-radius: 5px;
  outline: 0px;
  border: 1px solid black;
}

button {
  padding: 0.67em 5em;
  background: transparent;
  color: black;
  width: 17em;
  height: auto;
  outline: 0px;
  border-radius: 5px;
  font-size: 1.2em;
  text-align: center;
  border: 1.3px solid black;
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
