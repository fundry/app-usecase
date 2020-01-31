<template>
  <div class="body" id="contain">
    <div id="flex">
      <h3 id="title">Usecase</h3>

      <div id="input-box" v-if="$mq === 'laptop'">
        <input type="text" placeholder="Search Case" />
      </div>
    </div>

    <ul v-if="$mq === 'tablet'">
      <router-link to="/create" id="link">Cases</router-link>
      <router-link to="/login" id="link">Login</router-link>

      <button v-on="hi">Create Account</button>
    </ul>

    <ul v-if="$mq === 'laptop'">
      <router-link to="/create" id="link">Cases</router-link>
      <router-link to="/login" id="link">Login</router-link>

      <button v-on="hi">Create Account</button>
    </ul>

    <div v-if="$mq === 'mobile'">
      <p>Menu</p>
    </div>
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
input[type="text"] {
  padding: 0.3em;
  border: none;
  background: transparent;
  height: 40px;
  outline: 0px;
  width: 22em;
  border-radius: 0px;
  padding-left: 15px;
}

#input-box {
  margin-left: 30px;
  border-radius: 5px;
  padding: 0.2em;
  width: 27em;
  height: 44px;
  box-shadow: 0px 3px 5px grey;
}

#contain {
  background: transparent;
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
  outline: 0px;
  border: 1px solid black;
  padding: 0.4em 1.1em;
  border-radius: 5px;
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
#link {
  color: #42b983;
  margin-left: 20px;
}
</style>
