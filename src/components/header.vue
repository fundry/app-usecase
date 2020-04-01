<template>
  <nav class="contain">
    <router-link to="/" class="link">
      <h3>Usecase</h3>
    </router-link>
    <div>
      <h5>{{ CaseName }}</h5>
    </div>

    <ul v-if="isAuthenticated == true" id="flex">
      <router-link to="/explore" class="link">
        <p>Explore</p>
      </router-link>

      <router-link to="/profile">
        <img alt="user illustration" src="../assets/images/sample.png" />
      </router-link>
    </ul>
  </nav>
</template>

<script >
import Vue from "vue";
import { BIconList } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {},
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(["authUser"])
  },
  props: ["CaseName"]
};
</script>

<style scoped lang="postcss" >
#icon {
  font-size: 2.5rem;
  padding-top: 7px;
}

.link {
  text-decoration: none;
}

.contain {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2em 1em;
  padding-top: 7px;
  box-shadow: 0px 1.5px 2px grey;
  border-bottom: 1px solid grey;
  & p {
    padding: 0.4em 2.5rem;
    font-size: 1.1rem;
  }
  & h3 {
    color: chocolate;
    font-weight: lighter;
    padding-top: 12px;
    font-size: 1.7em;
  }
  & img {
    height: auto;
    width: 3.5em;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
