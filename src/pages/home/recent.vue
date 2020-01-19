<template >
  <div id="body">
    <div id="head">
      <h5>Recently Featured Cases</h5>

      <input placeholder="Search Case" />
    </div>

    <div id="box">
      <h6 id="org">Facebook</h6>

      <h6 id="title">Adopting Hasura Graphql Engine</h6>

      <h6>Stats</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
h5 {
  padding-top: 7px;
  padding-left: 20px;
}

#body {
  padding: 0.5em;
  background: #e5e5e5;
}
#org {
  cursor: pointer;
  font-weight: bold;
}
#head {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
}

#title {
  font-weight: normal;
  font-size: 1.2em;
}

#box {
  padding: 0.7em 1.5em;
  background: #fff;
  border-radius: 5px;
  margin: 0.5em;
  display: flex;
  justify-content: space-between;
}

input {
  padding: 0.3em;
  height: auto;
  border: 1px solid black;
  height: 45px;
  width: 21em;
  border-radius: 10px;
  padding-left: 20px;
}
</style>