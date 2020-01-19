<template>
  <div>
    <Header />
    <div>
      <div id="body">
        <div>
          <input type="email" placeholder="Username " />
          <br />
          <br />
          <input type="email" placeholder="Email" />
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <br />
        <button>Create Account</button>
        <br />
        <br />
        <p>
          OR
          <br />Create Account with
          <b>Google</b>
        </p>
        <div>
          <br />
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header, Footer } from "../../components";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style>
#body {
  margin: 1em;
  margin-top: 5em;
  align-content: center;
  justify-content: center;
  padding: 1em;
  text-align: center;
}
b {
  color: black;
  font-size: 1.1em;
}
input {
  font-size: 1.1em;
  padding: 0.5em;
  border: 1px solid black;
  width: 25em;
  padding-left: 20px;
  border-radius: 5px;
  height: 55px;
}

p {
  text-align: center;
  color: grey;
}
button {
  padding: 0.7em 5em;
  background: transparent;
  color: black;
  border-radius: 5px;
}
</style>
