<template>
  <nav class="contain" onselectstart="return false">
    <router-link to="/" class="link">
      <div class="brand">
        <h3>Usecase |</h3>
        <h4>{{$route.name}}</h4>
      </div>
    </router-link>

    <div class="search-box" v-if="$mq !== 'tablet' &&  $route.name !== 'organization'">
      <BIconSearch id="icon" />
      <input placeholder="Seach  $route.name" />
    </div>

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
        <Notification />
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
import { BIconSearch } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";
import Notification from "./notification.vue";

export default {
  name: "Header",
  components: {
    Notification,
    BIconSearch
  },
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(["authUser"])
  },
  props: ["CaseName"]
};
</script>

<style scoped lang="postcss" >
.brand {
  display: flex;
  place-items: center;
  color: chocolate;
  font-weight: lighter;
  padding-top: 20px;
  font-size: 1.7em;
  display: flex;
  & h4 {
    padding-left: 10px;
  }
}

#icon {
  font-size: 2.2rem;
  color: #000;
  padding-top: 10px;
}

.search-box {
  height: 5.3vh;
  border-radius: 1px solid #000;
  border-radius: 5px;
  width: 30rem;
  display: flex;
  margin-top: 13px;
  padding: 0.2rem 0.2rem;
  background: #fff;
  color: #fff;
  & input {
    width: 25rem;
    padding: 0.5rem;
    border: 0px;
    outline: none;
    background: transparent;
    color: #000;
    font-size: 1.2rem;
  }
}

.link {
  text-decoration: none;
}

.contain {
  background: #100e17;
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
