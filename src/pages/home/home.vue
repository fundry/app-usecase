<template>
  <div class="hello">
    <div id="body">
      <p>
        We all most times have to make a choice between two or more items. From technical to non technical people ,
        <b>Usecase</b> helps you make better choices by going through other people's usecases and how their usecase can match yours .
      </p>
    </div>

    <div>
      <Uses />
      <Document />
      <Recent />
    </div>
  </div>
</template>

<script>
import Recent from "./recent";
import Uses from "./uses";
import Document from "./document";

export default {
  name: "Home",

  components: {
    Recent,
    Document,
    Uses
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body {
  padding: 0.5em;
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
}
</style>
