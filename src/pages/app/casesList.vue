<template>
  <div>
    <BModal v-model="showModal">
      <div id="input-box">
        <BIconFolder id="icon" />
        <input type="text" id="case-inpt" placeholder="Case name" />
      </div>

      <br />
      <div id="center">
        <button id="create">Create Case</button>
      </div>
    </BModal>

    <CreateUsecaseModal />

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

        <div id="flex" v-for="C in Cases" v-bind:key="C.id">
          <div id="usecase-container">{{ C.name }}</div>
        </div>

        <div @click="showModal = !showModal">
          <BIconPlus id="lg-icon" />
        </div>
      </div>
      <hr />

      <div id="usecase-list">
        <p id="label">UseCases</p>

        <button @click="showModal = !showModal">Create Usecase</button>
      </div>
      <ul v-for="U in Usecases" v-bind:key="U.id">
        <div id="li-container">
          <div>
            <img alt="Case cover" src />
            <p>
              <a href>{{ U.author }}</a>
            </p>
          </div>
          <h4 id="title">
            <a href="/">{{ U.title }}</a>
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
import {
  BModal,
  BIconThreeDotsVertical,
  BIconPlus,
  BIconFolder
} from "bootstrap-vue";

import { UseCase, Cases } from "../../data/queries";
import { CreateUsecaseModal } from "../../components/modals/";

new Vue({
  apollo: {}
});

export default {
  name: "Cases",
  components: {
    BIconThreeDotsVertical,
    BIconPlus,
    BIconFolder,
    BModal
  },

  data: () => {
    return { hasCase: false, showModal: false };
  },

  apollo: {
    Usecases: UseCase,
    Cases: Cases,
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
#case-inpt {
  outline: 0px;
  width: 26rem;
  padding: 0.5rem 0.7rem;
  border: 0px;
}

#center {
  text-align: center;
}

#input-box {
  border-radius: 5px;
  outline: 0px;
  width: 28rem;
  font-size: 1.1rem;
  display: flex;
  padding: 0.6rem 1rem;
  border: 1px solid #000;
}

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
  cursor: pointer;
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
  margin-right: 20px;
  padding: 0.1em 1.2em;
  background: transparent;
  outline: 0px;
  color: black;
  border-radius: 5px;
  border: 1px solid black;
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
