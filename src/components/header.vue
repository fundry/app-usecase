<template>
  <div class="body">
    <h3>Usecase</h3>

    <ul>
      <a href="/">Cases</a>
      <a href="/">Sign in</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  box-shadow: 0px 5px 5px grey;
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
