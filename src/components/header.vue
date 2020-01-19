<template>
  <div class="body">
    <h3 id="title">Usecase</h3>

    <ul>
      <router-link to="/create">Cases</router-link>
      <router-link to="/login">Login</router-link>

      <button>Create Account</button>
    </ul>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";

export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2em 1em;
  padding-top: 10px;
  box-shadow: 0px 3px 5px grey;
}

button {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.4em 1.1em;
  border-radius: 7px;
  margin-left: 20px;
}

#title {
  color: chocolate;
  font-weight: lighter;
  padding-top: 4px;
  font-size: 1.7em;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin-left: 20px;
}
</style>
