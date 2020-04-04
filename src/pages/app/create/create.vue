<template>
  <div onselectstart="return false">
    <div class="types-container">
      <br />
      <h5>You want to document an action!</h5>
      <h5>How would you like to do that?</h5>

      <br />
      <div id="flex" v-if="selected !== true">
        <BCard class="type-card">
          <router-link to="/create-usecase">
            <h4>A Usecase</h4>
          </router-link>
          <p>
            Create a single usecase
            <br />
          </p>
          <hr />

          <p>
            <br />This could be a new technology you tried out and your review
          </p>

          <div>
            <a href="/">
              Learn More
              <BIconArrowRight id="icon-learn" />
            </a>
          </div>
        </BCard>

        <BCard class="type-card" @click="selected = true">
          <h4>An Entire Case</h4>
          <p>
            Create a virtual folder for your usecases.
            <br />
          </p>
          <hr />
          <p>
            <br />A case could be a project with usecases as actions taken
            within the project
          </p>
          <div>
            <a href="/">
              Learn More
              <BIconArrowRight id="icon-learn" />
            </a>
          </div>
        </BCard>
      </div>
    </div>

    <br />
    <br />
    <BCard v-if="selected === true" class="type-input">
      <h6>Case Name</h6>
      <div id="flex">
        <label id="input-value">Name</label>

        <input id="usecase" v-model.trim="Case" type="text" placeholder="Case Name" />
      </div>
      <router-link to="/" id="link">
        <h5>Create</h5>
      </router-link>
    </BCard>
  </div>
</template>

<script>
import Vue from "vue";
import { BCard, BIconArrowRight } from "bootstrap-vue";

export default {
  name: "Create",
  components: {
    BCard,
    BIconArrowRight
  },

  data: () => {
    return { case: false, selected: false };
  }
};
</script>

<style scoped lang="postcss" >
.types-container {
  padding: 1em;
  & h5 {
    font-size: 1.3rem;
    text-align: center;
  }
  @media (--sm) {
    & h5 {
      font-size: 1.3rem;
    }
  }
  @media (--md) {
    & h5 {
      font-size: 1.4rem;
    }
  }

  @media (--xl) {
    & h5 {
      font-size: 1.5rem;
    }
  }
}

.type-card {
  margin: 1em;
  font-size: 1.15rem;
  text-align: center;
  box-shadow: 0px 8px 6px grey;
  width: 23rem;
  height: 30vh;
  cursor: pointer;
  & a {
    text-decoration: none;
  }
  & div {
    text-align: center;
  }
  & h4 {
    font-weight: normal;
  }
  @media (--sm) {
    width: 23rem;
    height: 30vh;
    padding-top: 5px;
    font-size: 1.15rem;
  }
  @media (--md) {
    width: 25rem;
    height: 35vh;
    padding-top: 1.5rem;
    & p {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  @media (--xl) {
    width: 30rem;
    height: 37vh;
    padding-top: 20px;
    & p {
      font-size: 1.3rem;
    }
  }
}

.type-input {
  margin: 1em;
  box-shadow: 0px 5px 6px grey;
  max-width: 50rem;
  & div {
  }
  & a {
    text-decoration: none;
  }
  & h5 {
    margin: 1em;
    padding-right: 10px;
    text-align: right;
    font-size: 1.4em;
  }
  & label {
    padding-top: 10px;
    width: 5em;
    font-size: 1.3em;
  }
  & input[type="text"] {
    padding-left: 20px;
    width: 47em;
    height: 60px;
    border-radius: 5px;
    outline: 0px;
    border: 1px solid black;
  }
  & h6 {
    font-size: 1.3rem;
    padding-bottom: 10px;
  }
}

#flex {
  display: flex;
  justify-content: space-around;
}
</style>
