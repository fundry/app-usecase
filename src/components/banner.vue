<template>
  <div>
    <Header />

    <div id="body">
      <div id="cover" v-if="$mq === 'tablet'">
        <img src="../assets/svg/cover.svg" alt="illustration" class="img" :class="$mq" />
      </div>

      <div id="cover" v-else-if="$mq === 'laptop'">
        <br />
        <div id="flex">
          <br />
          <img src="../assets/svg/cover.svg" alt="illustration" class="img" :class="$mq" />

          <div>
            <br />
            <br />
            <br />
            <h1>A Collection of your Actions</h1>

            <p>
              Make choices based on recent choices made by others and see how it fits
              your usecase.
            </p>
          </div>
        </div>
        <br />
      </div>

      <div v-if="$mq === 'tablet'">
        <h1>A Collection of your Actions</h1>

        <p>
          Make choices based on recent choices made by others and see how it fits
          your usecase.
        </p>
      </div>

      <div v-else-if=" $mq === 'mobile' ">
        <h1>A Collection of your Actions</h1>

        <p>
          Make choices based on recent choices made by others and see how it fits
          your usecase.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./header";

export default {
  name: "Banner",
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
#flex {
  display: flex;
}

.img {
  max-width: 35em;
  height: auto;
  align-self: auto;
  &.mobile {
    max-width: 20em;
  }
}

h1 {
  font-weight: bolder;
  @media (max-width: 400px;) {
    font-size: 2em;
  }

  @media (max-width: 1200px;) {
    font-size: 3em;
  }

  @media (max-width: 1500px;) {
    font-size: 4em;
  }
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
