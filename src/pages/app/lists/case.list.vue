<template>
  <div onselectstart="return false">
    <BModal v-model="showModal" class="modal">
      <div>
        <BIconFolder id="icon" />
        <input type="text" placeholder="Case name" />
      </div>
      <br />
      <button>Create Case</button>
    </BModal>

    <div v-if="hasCase === false" class="contain">
      <p id="label">Cases</p>

      <div class="usecase-list">
        <div class="slider">
          <ul
            draggable="return true"
            v-for="c in caseList"
            v-bind:key="c.id"
            id="usecase-container"
          >
            <li>
              <router-link to="/case">{{ c.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="create-btn" v-if="page !== 'explore'">
          <div @click="showModal = !showModal">
            <BIconPlus id="lg-icon" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { BModal, BIconPlus, BIconFolder } from "bootstrap-vue";

export default {
  name: "Cases",
  components: {
    BIconPlus,
    BIconFolder,
    BModal
  },

  data: () => {
    return {
      showModal: false,
      hasCase: false
    };
  },
  props: ["caseList", "page"],

  // vuex
  computed: mapGetters(["get_case"]),
  methods: {
    ...mapActions(["deleteCase"])
  }
};
</script>

<style scoped lang="postcss" >
.contain {
  margin: 0.5rem;
  & p {
    padding: 1px 20px 5px 10px;
    font-size: 1.5rem;
  }
}

.create-btn {
  position: absolute;
  text-align: right;
  float: right;
  & div {
    text-align: right;
    margin-right: 10px;
    background: grey;
    opacity: 1;
    padding: 0.2rem;
    border-radius: 50%;
    display: flex;
    box-shadow: 0px 3px 4px grey;
  }
}

#lg-icon {
  cursor: pointer;
  font-size: 3rem;
}

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

.usecase-list {
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  & p {
    padding: 10px 20px 5px 10px;
    font-size: 1.3rem;
  }
}

.slider {
  display: flex;
  overflow: auto;
  & ul {
    -webkit-user-drag: element;
    -webkit-overflow-scrolling: touch;
    display: flex;
    list-style: none;
    flex-direction: row;
    scroll-behavior: smooth;
    scroll-snap-align: start;
    box-shadow: 1px 3px 4px grey;
    width: 8em;
    margin: 0em 1.5em 0.2em 0em;
    padding: 0.7rem 2rem;
    border-radius: 30px;
    font-size: 1.2em;
    height: 5.5vh;
    cursor: pointer;
    border: 0px;
    text-align: center;
    flex-shrink: 100%;
  }
  & a {
    text-decoration: none;
  }
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
