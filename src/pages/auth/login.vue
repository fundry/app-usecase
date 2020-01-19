<template>
  <div>
    <Header />
    <div id="body">
      <div>
        <input placeholder="Username or email" />
      </div>
      <br />
      <div>
        <input placeholder="Password" />
      </div>
      <br />
      <p>OR</p>
      <button>Google Signin</button>
      <div>
        <br />
        <router-link to="/">Create Account</router-link>
      </div>
    </div>
    <br />
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

<style scoped >
#body {
  margin: 1em;
  margin-top: 5em;
  align-content: center;
  justify-content: center;
  padding: 1em;
  text-align: center;
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
