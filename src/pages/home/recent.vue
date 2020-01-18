<template >
  <div id="head">
    <h4>Recently Featured Cases</h4>

    <input placeholder="Search Case" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
h4 {
  padding-left: 30px;
}

#head {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
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