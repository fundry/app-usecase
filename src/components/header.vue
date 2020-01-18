<template>
  <div class="body">
    <h3>Usecase</h3>

    <a href="/">Cases</a>
    <a href="/">Sign in</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  display: flex;
}

h3 {
  color: chocolate;
  font-weight: lighter;
  font-size: 1.5em;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  padding-left: 10px;
}
</style>
