<template>
  <div>
    <Header case="" screen="edit" />
    <div id="alert">
      <BIconStar id="icon" />
      <p>Double tap any text to edit or continue draft!</p>
      <BIconX id="icon" />
    </div>

    <div id="body">
      <h3>Migrating From Hasura To Google Cloud Platform</h3>
      <br />
      <input type="text" placeholder="Description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { BIconStar, BIconX } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";

import Outline from "./outline";
import { Header } from "../../../components";

export default {
  name: "",
  components: {
    Header,
    // Outline,
    BIconStar,
    BIconX
  },
  computed: mapGetters(["Case"]),
  methods: {
    ...mapActions(["editCase"])
  }
};
</script>

<style scoped>
#alert {
  padding: 0.3em;
  text-align: center;
  font-size: 1.2em;
  display: flex;
}

#icon {
  margin-left: 2rem;
  margin-right: 0.5rem;
  font-size: 1.5em;
}

#body {
  padding: 1em;
}

h3 {
  text-align: center;
  font-weight: normal;
}

#form-contain {
  text-align: center;
}

input[type="text"] {
  padding-left: 20px;
  width: 55em;
  height: 60px;
  border-radius: 5px;
  border: 1px solid black;
}

button {
  padding: 0.7em 13em;
  background: green;
  color: white;
  border-radius: 5px;
  font-size: 1.2em;
  text-align: center;
  border: 1.3px solid white;
}

#btn-contain {
  text-align: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
