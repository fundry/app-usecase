<template>
  <div onselectstart="return false">
    <div id="body">
      <div>
        <br />

        <p id="question">You want to document an action!</p>
        <p id="question">How would you like to do that?</p>

        <div id="flex" v-if="selected !== true">
          <BCard id="card">
            <router-link to="/create-usecase">
              <h4>A Usecase</h4>
            </router-link>
            <p>
              Create a single usecase
              <br />
              <br />This could be a new technology you tried out and your review
            </p>

            <div id="more">
              <a href="/">
                Learn More
                <BIconArrowRight id="icon-learn" />
              </a>
            </div>
          </BCard>

          <BCard id="card" @click="selected = true">
            <h4>An Entire Case</h4>
            <p>
              Create a virtual folder for your usecases.
              <br />
              <br />A case could be a project with usecases as actions taken
              within the project
            </p>
            <div id="more">
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
      <BCard v-if="selected === true">
        <div id="flex">
          <p id="input-value">Name</p>

          <input id="usecase" v-model.trim="Case" type="text" placeholder="Case Name" />
        </div>
        <router-link to="/">
          <p id="link">Continue</p>
        </router-link>
      </BCard>
    </div>
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

<style scoped>
#more {
  text-align: center;
}

#flex {
  display: flex;
  justify-content: space-around;
}

#link {
  margin: 1em;
  padding-right: 10px;
  text-align: right;
  font-size: 1.23em;
}

#head {
  padding-left: 15px;
}

#question {
  font-size: 1.3rem;
  text-align: center;
}

#card {
  margin: 1.5em;
  font-size: 1.15rem;
  text-align: center;
  box-shadow: 0px 2px 6px grey;
  width: 23rem;
  height: 30vh;
  cursor: pointer;
}

h3 {
  font-weight: normal;
}

#body {
  padding: 1em;
}

hr {
  font-size: 1.5em;
  color: #000;
}

#input-value {
  padding-top: 10px;
  width: 5em;
  font-size: 1.3em;
}

#form-contain {
  text-align: center;
}

input[type="text"] {
  padding-left: 20px;
  width: 47em;
  height: 60px;
  border-radius: 5px;
  outline: 0px;
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
</style>
