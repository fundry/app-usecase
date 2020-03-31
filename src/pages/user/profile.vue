<template>
  <div>
    <div class="profile">
      <img alt="user" src="../../assets/images/sample.png" />
      <div>
        <h3>Nwani Victory</h3>
        <h5>vickywane@gmail.com</h5>
      </div>
    </div>

    <div class="links" onselectstart="return false">
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
.profile {
  display: flex;
  padding: 0.7rem 0.5rem;
  & h5 {
    font-weight: normal;
    padding-left: 23px;
  }
  & img {
    height: auto;
    width: 7rem;
  }
  & h3 {
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
    }
  }
}

.links {
  display: flex;
  justify-content: space-between;
  & h4 {
    cursor: pointer;
    font-weight: normal;
    padding: 1rem;
  }
}
</style>
