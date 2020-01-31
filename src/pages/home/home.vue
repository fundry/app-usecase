<template>
  <div class="hello">
    <div id="body">
      <p
        id="desc"
      >Usecase helps you make better choices by getting a direct peep into other people's Usecases can help influence your descisions.</p>
    </div>

    <div>
      <Uses />
      <Record />

      <Recent />

      <Document />
      <Publish />
    </div>
  </div>
</template>

<script>
import Recent from "./recent";
import Uses from "./uses";
import Document from "./document";
import Publish from "./publish";
import Record from "./record";

export default {
  name: "Home",

  components: {
    Recent,
    Record,
    Publish,
    Document,
    Uses
  }
};
</script>

<style scoped>
#body {
  padding: 0.5em;
}

#desc {
  padding: 1em;
  text-align: center;
  font-size: 1.4em;
}

a {
  color: #42b983;
}
</style>
