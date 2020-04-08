<template>
  <nav class="contain">
    <router-link to="/" class="link">
      <h3>Usecase</h3>
    </router-link>

    <ul>
      <li>
        <h5>{{ CaseName }}</h5>
      </li>
      <li v-if="isAuthenticated == true" id="flex">
        <router-link to="/explore" class="link">
          <p>Explore</p>
        </router-link>
      </li>

      <li>
        <BIconBell id="icon" />
      </li>
      <li>
        <router-link to="/profile">
          <img alt="user illustration" src="../assets/images/sample.png" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script >
import Vue from "vue";
import { BIconList, BIconBell } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    BIconBell
  },
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(["authUser"])
  },
  props: ["CaseName"]
};
</script>

<style scoped lang="postcss" >
#icon {
  font-size: 3rem;
  padding-top: 7px;
  padding-right: 15px;
  cursor: pointer;
}

.link {
  text-decoration: none;
}

.contain {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.1em 1em;
  box-shadow: 0px 1.5px 2px grey;
  border-bottom: 1px solid grey;
  & p {
    padding: 0.4em 2.5rem;
    font-size: 1.1rem;
  }
  & h3 {
    display: flex;
    place-items: center;
    color: chocolate;
    font-weight: lighter;
    padding-top: 15px;
    font-size: 1.7em;
  }
  & img {
    height: auto;
    width: 3.1em;
  }
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
}

li {
  display: inline-block;
  margin: 0 5px;
}
</style>
