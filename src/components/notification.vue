<template>
  <div class="body">
    <BIconBell id="icon" />
    <div class="pane-body">
      <h5>Notifications</h5>
      <ul>
        <li>
          <p>Something has just happened</p>
        </li>
        <li></li>
        <li>
          <p>Something has just happened</p>
        </li>
        <li>
          <p>Something has just happened</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { BIconBell } from "bootstrap-vue";

export default {
  name: "Notification",
  components: {
    BIconBell
  }
};
</script>

<style scoped lang="postcss" >
#icon {
  font-size: 3rem;
  padding-top: 7px;
  padding-right: 15px;
  &:hover {
    cursor: pointer;
    color: chocolate;
  }
}

.body {
  padding: 0.1rem;
  color: #fff;
  & div {
    position: absolute;
    visibility: hidden;
    padding: 0.5rem 1rem;
    width: 23rem;
    margin: auto;
    background: #100e17;
    color: #fff;
    & ul {
      list-style: none;
      & li {
        padding: 0.5rem 0.5rem;
      }
    }
  }
  &:hover {
    & div {
      visibility: visible;
      & ul {
        & li {
          cursor: pointer;
        }
      }
    }
  }
}
</style>