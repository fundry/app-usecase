<template>
  <div onselectstart="return false">
    <div v-if="hasCase === true" class="body">
      <div>
        <h1>
          Welcome
          <b>Nwani Victory</b>
        </h1>
        <p v-for="U in Users" v-bind:key="U.id">{{ U.name }}</p>

        <p>
          You're yet to create a case.
          <br />Usecase are contained within a single cases.
        </p>
        <nuxt-link to="/app/create/case">
          <button>Create Case</button>
        </nuxt-link>
      </div>
    </div>

    <div v-if="hasCase === false">
      <Cases :caseList="Cases" />
      <Usecases :usecase="Usecases" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { gql } from "apollo-boost";
import { mapActions, mapGetters } from "vuex";
import { BModal, BIconPlus, BIconFolder } from "bootstrap-vue";

import Usecases from "./lists/usecase.list.vue";
import Cases from "./lists/case.list.vue";

import { GET_CASES, GET_USECASES } from "../../data/queries";
import { Create_UseCase, CREATE_CASE } from "../../data/mutations";

new Vue({
  apollo: {}
});

export default {
  name: "List",
  components: {
    Usecases,
    Cases
  },

  data: () => {
    return { hasCase: false, showModal: false };
  },

  apollo: {
    Usecases: GET_USECASES,
    Cases: GET_CASES,
    update: data => console.log(data)
  },

  // vuex
  computed: mapGetters(["get_case"]),
  methods: {
    ...mapActions(["deleteCase"])
  }
};
</script>

<style scoped lang="postcss" >
.body {
  align-self: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  & p {
    font-size: 1.3em;
  }
  & button {
    background: transparent;
    color: black;
    border: 1px solid black;
    padding: 0.7rem 7rem;
    border-radius: 5px;
  }
}

h5 {
  padding-top: 10px;
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
</style>
