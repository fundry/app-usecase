<template>
  <div onselectstart="return false">
    <div class="usecase-list">
      <p>UseCases</p>
      <router-link to="/create-usecase" id="link" v-if="page !== 'explore'">
        <button>Create Usecase</button>
      </router-link>
    </div>

    <ul class="list">
      <li v-for="u in usecase" v-bind:key="u.id">
        <div>
          <img alt="Case cover" src="../../../assets/images/Git.png" />
          <p>
            <a href>{{ u.author }}</a>
          </p>
        </div>
        <h5>
          <a href="/">{{ u.title }}</a>
        </h5>

        <BIconThreeDotsVertical id="icon" />
      </li>
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

  props: ["usecase", "page"]
};
</script>

<style scoped lang="postcss" >
#link {
  text-decoration: none;
}

.usecase-list {
  display: flex;

  padding: 0.3em;
  justify-content: space-between;
  & p {
    padding: 10px 20px 5px 10px;
    font-size: 1.5rem;
  }
  & button {
    text-decoration: none;
    text-align: center;
    background: transparent;
    color: black;
    border: 1px solid black;
    padding: 0.7rem 2rem;
    margin-right: 2rem;
    outline: 0px;
    border-radius: 5px;
    &:hover {
    }
  }
}

.list {
  list-style: none;
  & li {
    display: flex;
    justify-content: space-between;
    & h4 {
      padding-top: 5px;
      font-weight: normal;
      font-size: 1.4rem;
    }
  }
  & img {
    max-width: 10%;
    height: auto;
  }
}

#icon {
  cursor: pointer;
  font-size: 2.1rem;
  padding-top: 3px;
}
</style>
