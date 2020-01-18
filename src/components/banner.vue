<template>
  <div class="banner">
    <Header />

    <div id="body">
      <h1>Want to make a pick ?</h1>

      <p>Make choices based on recent choices made by others and see how it fits your usecase.</p>
    </div>
  </div>
</template>

<script>
import Header from "./header";

export default {
  name: "Banner",
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}

#body {
  padding: 2em;
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
