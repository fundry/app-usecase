<template>
  <div>
    <Header />
    <div id="body">
      <div id="head">
        <h2>Cases</h2>
        <p>Create case case case case case case case case case case</p>
      </div>

      <BCard id="card">
        <div>
          <h2>Details</h2>
          <p id="section-description">Name, Description and Name</p>
          <hr />
        </div>

        <div id="flex">
          <p id="input-value">Name</p>
          <input id="usecase" type="text" placeholder="Case Name" />
        </div>

        <br />
        <div id="flex">
          <p id="input-value">Description</p>
          <input id="usecase" type="text" placeholder="Case Name" />
        </div>
      </BCard>

      <div id="tags">
        <p>Tags</p>
      </div>

      <div id="btn-contain">
        <button>Drafted</button>
        <button>Delete Draft</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BCard } from "bootstrap-vue";

import { Header } from "../../../components";

@Component({
  name: "Create",
  components: { Header, BCard }
})
export default class App extends Vue {}
</script>

<style scoped>
#card {
  box-shadow: 0px 2px 3.5px grey;
}

#head {
  text-align: center;
}

#body {
  padding: 1em;
  background: #ccdbe9;
}

hr {
  font-size: 1.5em;
  color: #000;
}

#input-value {
  padding-top: 10px;
  width: 7em;
  font-size: 1.3em;
}

#section-description {
  font-size: 1.3em;
}

#form-contain {
  text-align: center;
}

input[type="text"] {
  padding-left: 20px;
  width: 50em;
  height: 60px;
  border-radius: 5px;
  outline: 0px;
  border: 1px solid black;
}

button {
  padding: 0.7em 4em;
  margin: 0.5em 0.5em;
  background: rgb(152, 150, 150);
  color: #fff;
  outline: 0px;
  border: 1px solid black;
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
  height: 10vh;
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
