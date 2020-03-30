<template>
  <div onselectstart="return false">
    <BModal v-model="showModal" class="modal">
      <div>
        <BIconFolder id="icon" />
        <input v-model="case_val" type="text" placeholder="Case name" />
      </div>
      <br />
      <button>Create Case</button>
    </BModal>

    <div class="body">
      <div v-if="hasCase === true">
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

    <div v-if="hasCase === false" class>
      <div class="usecase-list">
        <p id="label">Cases</p>

        <div v-for="C in Cases" v-bind:key="C.id" id="usecase-container">
          <router-link to="/case">{{ C.name }}</router-link>
        </div>

        <div @click="showModal = !showModal">
          <BIconPlus id="lg-icon" />
        </div>
      </div>
      <hr />

      <Usecases :usecase="{Usecases}" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { gql } from "apollo-boost";
import { mapActions, mapGetters } from "vuex";
import { BModal, BIconPlus, BIconFolder } from "bootstrap-vue";

import Usecases from "./lists/usecases.vue";
import { UseCase, Cases } from "../../data/queries";
import { Create_UseCase, CREATE_CASE } from "../../data/mutations";

new Vue({
  apollo: {}
});

export default {
  name: "Cases",
  components: {
    BIconPlus,
    BIconFolder,
    BModal,
    Usecases
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

<style scoped lang="postcss" >
.modal {
  padding: 1rem;
  & div {
    border-radius: 5px;
    outline: 0px;
    width: 28rem;
    font-size: 1.1rem;
    display: flex;
    padding: 0.6rem 1rem;
    border: 1px solid #000;
  }
  & input {
    outline: 0px;
    width: 26rem;
    padding: 0.5rem 0.7rem;
    border: 0px;
  }
  & button {
    align-items: center;
    background: transparent;
    color: black;
    border: 1px solid black;
    padding: 0.7rem 5rem;
    border-radius: 5px;
  }
}

#center {
  text-align: center;
}

#input-box {
}

.usecase-list {
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  & p {
    padding: 10px 20px 5px 10px;
    font-size: 1.3rem;
  }
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

#top {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
}

.body {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: 3em;
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
