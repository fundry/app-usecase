<template>
  <div>
    <Header />
    <br />

    <div id="card">
      <div id="card-body">
        <p>Import Existing Project From ;</p>

        <div id="import-body">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "../../../components/";

@Component({
  components: { Header },
  data: () => {
    return {
      list: [{ id: 1, item: "Tools Used" }]
    };
  }
})
export default class App extends Vue {}
</script>

<style scoped>
#card {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#card-body {
  max-width: 40em;
  text-align: center;
  box-shadow: 0px 3px 5px grey;
  margin: 1em;
  padding: 1em;
}

#import-body {
  text-align: center;
  padding: 1em;
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
  padding: 0.5em 5em;
  background: transparent;
  color: black;
  width: 15em;
  height: auto;
  outline: 0px;
  border-radius: 3px;
  font-size: 1.1em;
  text-align: center;
  border: 1.2px solid black;
}
</style>
