<template>
  <div id="footer">
    <h3>Usecase.io</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  padding: 1em;
  background: grey;
}

h3 {
  color: chocolate;
  font-weight: lighter;
  font-size: 1.7em;
}

a {
  color: #42b983;
}
</style>
