<template>
  <div class="body">
    <div class="trend">
      <h5>Trending Cases</h5>

      <BIconSearch id="icon" />
    </div>

    <br />
    <div class="line">
      <p>Facebook</p>
    </div>

    <Cases page="explore" />

    <br />
    <Usecases page="explore" />
  </div>
</template>

<script>
import Cases from "./app/lists/case.list";
import Usecases from "./app/lists/usecase.list";
import { BIconSearch } from "bootstrap-vue";

export default {
  name: "Explore",
  components: {
    Cases,
    Usecases,
    BIconSearch
  }
};
</script>

<style lang="postcss" >
#icon {
  font-size: 1.7rem;
}

.line {
  line-height: 1;
  display: flex;
  flex-direction: row;

  &:hover {
    & p {
      cursor: pointer;
    }
  }

  & p::before,
  & p::after {
    color: red;
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    top: 0;
    width: 600px;
  }
  & p:before {
    right: 100%;
    color: green;
    margin-right: 15px;
  }
  & p:after {
    color: blue;
    left: 100%;
    margin-left: 15px;
  }
}

.trend {
  justify-content: space-between;
  display: flex;
}

.body {
  padding: 1rem;
  h4 {
  }
}
</style>