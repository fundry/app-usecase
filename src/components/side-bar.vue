<template>
  <ul class="router-block" onselectstart="return false">
    <li>
      <router-link to="/">
        <BIconHouse class="icon" />
      </router-link>
    </li>

    <br />
    <br />
    <br />
    <br />
    <li>
      <router-link to="/organization">
        <BIconFolder class="icon" />
      </router-link>
    </li>
    <br />
    <br />
    <li>
      <router-link to="/editor">
        <BIconBookHalfFill class="icon" />
      </router-link>
    </li>

    <br />
    <br />
    <li>
      <router-link to="/schedules">
        <BIconListCheck class="icon" />
      </router-link>
    </li>
    <br />
    <br />
    <li>
      <router-link to="/publish">
        <BIconCursor class="icon" />
      </router-link>
    </li>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <li>
      <router-link to="/settings">
        <BIconGear class="icon" />
      </router-link>
    </li>
  </ul>
</template>

<script >
import {
  BIconHouse,
  BIconGear,
  BIconBookHalfFill,
  BIconCursor,
  BIconListCheck,
  BIconFolder
} from "bootstrap-vue";

export default {
  name: "Sidebar",
  components: {
    BIconCursor,
    BIconHouse,
    BIconGear,
    BIconListCheck,
    BIconFolder,
    BIconBookHalfFill
  }
};
</script>

<style scoped lang="postcss" >
.icon {
  font-size: 2.2rem;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: chocolate;
  }
}

a {
  text-decoration: none;
}

.router-block {
  display: column;
  padding: 1rem;
  width: 4.5rem;
  justify-content: center;
  list-style: none;
  background: #100e17;
  color: #fff;
  height: 90vh;
  &:focus {
    color: chocolate;
  }
}
</style>
