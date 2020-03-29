<template>
  <div id="body">
    <div>
      <h3>Nwani Victory</h3>
    </div>

    <div class="links">
      <h4>Followed Cases</h4>
      <h4>Followed Usecases</h4>
      <h4>Comments and Replies.</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style scoped lang="postcss">
#body {
  margin-top: 1em;
  font-family: system-ui;
  font-size: responsive;
}

h3 {
  padding: 0.75rem 1.25rem;
  font-size: 3rem;
  @media (--sm) {
    font-size: 1rem;
    color: var(--viridian-green);
  }
  @media (--md) {
    font-size: 2rem;
    color: var(--turtle-green);
  }

  @media (--xl) {
    font-size: 3rem;
    color: var(--living-coral);
  }

  &:hover {
    transition: all 250ms ease-in-cubic;
    background-color: #f6f7fb;
  }
}

.links {
  display: flex;
  justify-content: space-between;
  & h4 {
    font-weight: normal;
    padding: 1rem;
  }
}
</style>
