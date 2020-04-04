<template>
  <div id="container">
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
#container {
  background: #ebeef3;
  height: 90vh;
  display: flex;
  justify-content: center;
  place-items: center;
}

#box {
  box-shadow: 0px 8px 6px grey;
  text-align: center;
  place-items: center;
  background: #fff;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  max-height: 50vh;
  @media (--sm) {
    max-width: 40rem;
    max-height: 55vh;
  }
  @media (--md) {
    max-width: 35rem;
    max-height: 49.5vh;
  }
  @media (--xl) {
    max-width: 60rem;
    max-height: 50vh;
  }
}

.body {
  padding: 1em;
  text-align: center;
  & h4 {
    padding: 1rem;
    font-size: 1.8rem;
    color: chocolate;
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
  @media (--xm) {
    & input {
      width: 20rem;
    }
    & button {
      padding: 0.5em 4em;
    }
  }
  @media (--sm) {
    & input {
      width: 23rem;
      padding: 0.7em 2em;
    }
    & button {
      padding: 0.7em 5em;
    }
  }
  @media (--md) {
    & input {
      width: 25rem;
      padding: 0.7em 1.5em;
    }
    & button {
      padding: 0.7em 6em;
    }
  }
  @media (--lg) {
    & input {
      width: 28rem;
      padding: 0.7em 1.5em;
    }
    & button {
      padding: 0.7em 6em;
    }
  }
  @media (--xl) {
    & input {
      width: 28rem;
      padding: 0.7em 2em;
    }
    & button {
      padding: 0.7em 6em;
    }
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
  @media (--xm) {
    padding: 0.7rem 7rem;
  }
  @media (--sm) {
    padding: 0.7rem 12.8rem;
  }
  @media (--md) {
    padding: 0.7rem 12.8rem;
  }
  @media (--xl) {
    padding: 0.7rem 12.8rem;
  }
}
</style>
