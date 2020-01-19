<template>
  <div class="hello">
    <div id="body">
      <p id="desc" >
         From technical to non technical people ,
        <b>Usecase</b> helps you make better choices by going through other people's usecases and how their usecase can match yours .
      </p>
    </div>

    <div>
      <Uses />
      <Recent />

      <Document />
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

#desc {
  padding: 1em;
  font-size: 1.2em;
  text-align: center
}
 
a {
  color: #42b983;
}
</style>
