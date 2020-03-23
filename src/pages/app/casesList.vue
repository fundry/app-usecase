<template>
  <div>
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

    <div v-if="hasCase === false">
      <div id="usecase-list">
        <p id="label">Cases</p>

        <div id="flex">
          <div id="usecase-container">
            Jest
          </div>

          <div id="usecase-container">
            Pytorch
          </div>

          <div id="usecase-container">
            DevC
          </div>
        </div>

        <div>
          <BIconPlus id="lg-icon" />
        </div>
      </div>
      <hr />

      <div id="usecase-list">
        <p id="label">UseCases</p>

        <button>Create Usecase</button>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { gql } from "apollo-boost";
import { mapActions, mapGetters } from "vuex";
import { BIconThreeDotsVertical, BIconPlus } from "bootstrap-vue";

new Vue({
  apollo: {}
});
export default {
  name: "Cases",
  components: {
    BIconThreeDotsVertical,
    BIconPlus
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
#label {
  padding: 10px 20px 5px 10px;
  font-size: 1.3rem;
}

#usecase-list {
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
}

#usecase-container {
  box-shadow: 0px 2px 3px grey;
  width: 8em;
  margin: 0em 1.5em 0.2em 0em;
  padding-top: 10px;
  border-radius: 30px;
  font-size: 1.2em;
  height: 5.5vh;
  border: 1px solid #000;
  text-align: center;
}

#lg-icon {
  cursor: pointer;
  font-size: 3rem;
}

#icon {
  cursor: pointer;
  font-size: 2.1rem;
  padding-top: 3px;
}

#title {
  padding-top: 5px;
  font-weight: normal;
  font-size: 1.4rem;
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
  margin: 3em;
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
