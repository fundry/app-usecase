<template>
  <div onselectstart="return false">
    <div class="usecase-list">
      <p>UseCases</p>

      <button>
        <router-link to="/create">Create Usecase</router-link>
      </button>
    </div>

    <ul v-for="u in usecase" v-bind:key="u.id">
      <div class="li-container">
        <div>
          <img alt="Case cover" src />
          <p>
            <a href>{{ u.author }}</a>
          </p>
        </div>
        <h4>
          <a href="/">{{ u.title }}</a>
        </h4>

        <BIconThreeDotsVertical id="icon" />
      </div>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { BIconThreeDotsVertical } from "bootstrap-vue";

export default {
  name: "Cases",
  components: {
    BIconThreeDotsVertical
  },

  data: () => {
    return { hasCase: false, showModal: false };
  },

  // vuex
  computed: mapGetters(["get_case"]),
  methods: {
    ...mapActions(["deleteCase"])
  },

  props: ["usecase"]
};
</script>

<style scoped lang="postcss" >
.usecase-list {
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  & p {
    padding: 10px 20px 5px 10px;
    font-size: 1.3rem;
  }
  & button {
    align-items: center;
    background: transparent;
    color: black;
    border: 1px solid black;
    padding: 0.3rem 2rem;
    border-radius: 5px;
  }
}

#icon {
  cursor: pointer;
  font-size: 2.1rem;
  padding-top: 3px;
}

.li-container {
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  justify-content: space-between;
  & h4 {
    padding-top: 5px;
    font-weight: normal;
    font-size: 1.4rem;
  }
}
</style>
