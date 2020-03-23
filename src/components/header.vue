<template>
  <div id="contain">
    <h3 id="title">Usecase</h3>

    <div>
      <h5>{{ CaseName }}</h5>
    </div>
    <ul v-if="$t == true">
      <div v-if="$mq === 'laptop'" id="flex">
        <router-link to="/create" id="link">Cases</router-link>
        <div id="input-box">
          <BIconSearch id="icon" />
          <input id="input" placeholder="Search Usecase" type="text" />
        </div>
      </div>

      <div v-if="$mq === 'tablet'" id="flex">
        <router-link to="/create" id="link">Cases</router-link>

        <div id="input-box">
          <BIconSearch id="icon" />
          <input id="input" placeholder="Search Usecase" type="text" />
        </div>
      </div>

      <div v-if="$mq === 'mobile'">
        <BIconSearch id="icon" />
        <BIconPerson id="icon" />
      </div>
    </ul>

    <ul v-if="auth == true">
      <BIconThreeDotsVertical id="icon" />
      <BIconPerson id="icon" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  BIconSearch,
  BIconPerson,
  BIconList,
  BIconThreeDotsVertical
} from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

const t = false;
export default {
  name: "Header",
  components: {
    BIconSearch,
    BIconPerson,
    BIconThreeDotsVertical
  },
  computed: mapGetters(["auth"]),
  methods: {
    ...mapActions(["authUser"])
  },
  props: ["CaseName"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input[type="text"] {
  padding: 0.3em;
  border: none;
  background: transparent;
  height: 40px;
  outline: 0px;
  font-size: 1.1em;
  width: 22em;
  border-radius: 0px;
  padding-left: 7px;
}

#icon {
  font-size: 2.5rem;
  padding-top: 7px;
}

#input-box {
  margin-left: 30px;
  margin-right: 15px;
  border-radius: 5px;
  padding: 0.2em;
  padding-left: 20px;
  width: 27em;
  display: flex;
  height: 50px;
  box-shadow: 0px 1px 4px grey;
}

#contain {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2em 1em;
  padding-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1.5px 2px grey;
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
