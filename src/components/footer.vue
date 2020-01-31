<template>
  <div>
    <div id="create">
      <p>Recently made a hard choice ?</p>
      <button>Document With UseCase</button>
    </div>

    <footer id="footer" v-if="$mq === 'laptop'">
      <div id="foot">
        <div>
          <h3 id="brand">
            <a href="/">Usecase.io</a>
          </h3>

          <div id="media-icons">
            <p>IN</p>
            <p>TW</p>
            <p>Git</p>
          </div>
        </div>
        <div>
          <div id="column">
            <h5 id="title">PRODUCT</h5>

            <a>Resources</a>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
              <a>Resources</a>
            </div>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
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

    <footer id="footer" v-if="$mq === 'tablet'">
      <div id="foot">
        <div>
          <h3 id="brand">
            <a href="/">Usecase.io</a>
          </h3>

          <div id="media-icons">
            <p>IN</p>
            <p>TW</p>
            <p>Git</p>
          </div>
        </div>
        <div>
          <div id="column">
            <h5 id="title">PRODUCT</h5>

            <a>Resources</a>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
              <a>Resources</a>
            </div>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
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

    <footer id="footer" v-if="$mq === 'mobile'">
      <div id="foot-mobile">
        <div id="brand-mobile">
          <h3 id="brand">
            <a href="/">Usecase.io</a>
          </h3>

          <div id="media-icons-mobile">
            <p>IN</p>
            <p>TW</p>
            <p>Git</p>
          </div>
        </div>

        <div id="mobile-sections">
          <div id="column">
            <h5 id="title-mobile">PRODUCT</h5>

            <a>Resources</a>
          </div>

          <div id="column">
            <h5 id="title-mobile">ABOUT</h5>
            <div>
              <a>Resources</a>
            </div>
          </div>

          <div id="column">
            <h5 id="title-mobile">ABOUT</h5>
            <div>
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

<style scoped lang="postcss" >
/* duplicate css will be replcaed by media queries later on  */
#media-icons {
  font-size: 1.15em;
  display: flex;
  justify-content: space-between;
}

#media-icons-mobile {
  font-size: 0.9em;
  display: flex;
  justify-content: space-around;
}

#mobile-sections {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

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

#foot-mobile {
  padding: 0.3em;
}

#brand {
  margin-top: 20px;
  font-weight: lighter;
}

#brand-mobile {
  text-align: center;
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
  font-weight: bold;
}

#title-mobile {
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 1.1em;
}

button {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.1em 1.3em;
  border-radius: 5px;
}

p {
  font-weight: lighter;
  font-size: 1.25em;
}

a {
  color: chocolate;
}
</style>
