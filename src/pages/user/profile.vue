<template>
  <div class="body">
    <div id="flex">
      <div class="profile">
        <img alt="user" src="../../assets/images/sample.png" />
        <div>
          <h3>Nwani Victory</h3>
          <h5>vickywane@gmail.com</h5>
        </div>
      </div>

      <div class="icon-stack">
        <BIconBookmark id="icon" />
        <BIconBrightnessHigh id="icon" />
        <BIconGear id="icon" />
      </div>
    </div>
    <br />
    <div class="links" onselectstart="return false">
      <h4>Followed Cases</h4>
      <h4>Followed Usecases</h4>
      <h4>Comments and Replies.</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { BIconBookmark, BIconGear, BIconBrightnessHigh } from "bootstrap-vue";

export default {
  name: "Profile",
  components: {
    BIconBookmark,
    BIconBrightnessHigh,
    BIconGear
  }
};
</script>

<style scoped lang="postcss">
#flex {
  display: flex;
  justify-content: space-between;
}

#icon {
  font-size: 2.3rem;
  cursor: pointer;
  margin: 0.3rem 0.5rem;
}

.icon-stack {
  display: grid;
  padding: 0.2rem 0.5rem;
  background: #f2f5ff;
  border-radius: 10px;
}

.body {
  padding: 1rem 1rem;
  border-bottom: 1px solid #000;
  @media (--sm) {
    padding: 0.5rem 0.5rem;
  }
  @media (--md) {
    padding: 1rem 1rem;
  }

  @media (--xl) {
    padding: 1rem 7rem;
  }
}

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
    color: #100e17;
  }
}
</style>
