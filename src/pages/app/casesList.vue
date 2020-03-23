<template>
  <div>
    <div id="top">
      <h5>Usecases</h5>
      <button>Create New Usecase</button>
    </div>
    <hr />

    <div id="body">
      <div v-if="hasCase === true">
        <h1>
          Welcome
          <b>Nwani Victory</b>
        </h1>
        <p v-for="U in Users" v-bind:key="U.id">{{ U.name }}</p>

        <p id="desc">
          You're yet to create a case.
          <br />Usecase are contained within a single cases.
        </p>
        <nuxt-link to="/app/create/case">
          <button id="create">Create Case</button>
        </nuxt-link>
      </div>
    </div>

    <ul v-for="g in get_case" v-bind:key="g.id">
      <div id="li-container">
        <div>
          <img alt="Case cover" src="" />
          <p>
            <a href=""> {{ g.author }} </a>
          </p>
        </div>
        <h4 id="title">
          <a href="/">{{ g.title }} </a>
        </h4>

        <BIconThreeDotsVertical id="icon" />
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { gql } from "apollo-boost";
import { mapActions, mapGetters } from "vuex";
import { BIconThreeDotsVertical } from "bootstrap-vue";

new Vue({
  apollo: {}
});
export default {
  name: "Cases",
  components: {
    BIconThreeDotsVertical
  },

  // graphql data. would be put in separate file later
  data: () => {
    return { Users: {}, hasCase: false };
  },
  apollo: {
    Users: gql`
      query {
        Users {
          name
        }
      }
    `,
    update: data => console.log(data)
  },

  // vuex
  computed: mapGetters(["get_case"]),
  methods: {
    ...mapActions(["deleteCase"])
  }
};
</script>

<style scoped>
#icon {
  cursor: pointer;
  font-size: 2.1rem;
  padding-top: 3px;
}

#title {
  font-weight: normal;
}

#li-container {
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  justify-content: space-between;
}

#top {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
}

#body {
  text-align: center;
  margin: 5em;
}
h5 {
  padding-top: 10px;
}
#desc {
  font-size: 1.4em;
}

button {
  padding: 0.5em 1.8em;
  background: transparent;
  outline: 0px;
  color: black;
  border-radius: 5px;
  border: 1.3px solid black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#contain {
  display: flex;
}

#create {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.7em 7em;
  border-radius: 5px;
}
</style>
