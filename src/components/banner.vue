<template>
  <div>
    <Header />

    <div id="body">
      <div id="cover">
        <img src="../assets/svg/cover.svg" alt="illustration" />
      </div>

      <h1>Want to make a pick ?</h1>

      <p>Make choices based on recent choices made by others and see how it fits your usecase.</p>
    </div>
  </div>
</template>

<script>
import Header from "./header";
// import { cover } from "../assets/svg";

export default {
  name: "Banner",
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 35em;
  height: auto;
  align-self: auto;
}

h1 {
  font-weight: bolder;
  font-size: 3em;
}

#cover {
  text-align: center;
}

#body {
  /* @media screen and (max-width: 1020px) {
    background: black;
  } */
  text-align: center;
  padding: 2em;
  background: #f2f5ff;
  color: #1d2279;
}

p {
  text-align: center;
  font-size: 1.3em;
  padding: 0em 2em 0em;
}

body {
  padding: 1em;
}
</style>
