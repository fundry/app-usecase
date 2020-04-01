<template>
  <div id="box">
    <div class="body">
      <h4>UseCase</h4>

      <hr />
      <br />
      <div>
        <input placeholder="Username or email" />
      </div>
      <br />
      <div>
        <input placeholder="Password" />
      </div>
      <br />
      <p>OR</p>
      <div v-if="!$auth.loading">
        <button @click="login">Google Signin</button>
        <div></div>
      </div>
      <br />
    </div>
    <button id="stretch-btn" @click="login = false" v-if="login !== false ">Create Account</button>
    <button id="stretch-btn" @click="login = true" v-else>Signin Instead</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default {
  name: "Login",
  methods: {
    login() {
      // @ts-ignore
      this.$auth.loginWithRedirect();
    }
  },
  data: () => {
    return {
      login: true
    };
  }
};
</script>

<style scoped  lang="postcss" >
#box {
  box-shadow: 0px 3px 4px grey;
  margin: 5em;
  text-align: center;
  place-items: center;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
}

.body {
  margin-top: 5em;
  padding: 1em;
  text-align: center;
  & h4 {
    padding: 1rem;
  }
  & input {
    font-size: 1.1em;
    padding: 0.5em;
    border: 1px solid black;
    width: 25em;
    padding-left: 20px;
    border-radius: 5px;
    height: 55px;
    outline: 0px;
  }
  & p {
    text-align: center;
    color: grey;
  }
  & button {
    padding: 0.7em 5em;
    background: transparent;
    color: black;
    outline: 0px;
    border-radius: 5px;
  }
}

#stretch-btn {
  padding: 0.7rem 12.8rem;
  text-align: center;
  background: chocolate;
  color: white;
  outline: 0px;
  font-size: 1.3rem;
  display: flex;
  border: 0px;
  flex: 10;
}
</style>
