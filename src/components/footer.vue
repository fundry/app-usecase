<template>
  <div>
    <div id="create">
      <p>Recently made a hard choice ?</p>
      <button>Create A Case</button>
    </div>

    <footer id="footer">
      <div id="foot">
        <h3 id="brand">
          <a href="/">Usecase.io</a>
        </h3>

        <div>
          <div id="column">
            <h5 id="title">PRODUCT</h5>

            <a>Resources</a>
            <a>Resources</a>
            <a>Resources</a>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
              <a>Resources</a>
              <a>Resources</a>
              <a>Resources</a>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom">
        <p>
          Copyright @2020 ,
          All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
#footer {
  padding: 0.5em 1em;
  background: #e5e5e5;
}

#foot {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

#brand {
  margin-top: 20px;
}

#bottom {
  margin: 0.3em;
  text-align: center;
  font-size: 0.77em;
  color: black;
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
  padding-bottom: 10px;
}

button {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.1em 1.3em;
  border-radius: 7px;
}

p {
  font-weight: lighter;
  font-size: 1.3em;
}

a {
  color: #42b983;
}
</style>
