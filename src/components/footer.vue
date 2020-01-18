<template>
  <div>
    <div id="create">
      <p>Recently made a hard choice ?</p>
      <button>Create A Case</button>
    </div>

    <footer id="footer">
      <h3>Usecase.io</h3>

      <div>
        <div id="column">
          <h5 id="title">ABOUT</h5>

          <p>Resources</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  padding: 1em;
  background: grey;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

#create {
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  justify-content: space-between;
}

#column {
  flex-direction: column;
}

#title {
  padding-bottom: 15px;
}

button {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.3em 1.3em;
  border-radius: 7px;
}

p {
  font-weight: lighter;
  font-size: 1.2em;
}

a {
  color: #42b983;
}
</style>
