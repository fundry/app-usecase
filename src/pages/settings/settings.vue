<template>
  <div class="body" onselectstart="return false">
    <div class="box">
      <div>
        <div id="flex">
          <h5>User</h5>

          <BIconPencil id="icon" />
        </div>
        <hr />
        <div id="flex">
          <p id="big-text">Nwani Victory</p>
          <p id="big-text">Vickywane@gmail.com</p>
        </div>
        <h6>Send a copy of actions to my email</h6>
      </div>
      <br />
      <div>
        <h5>Integrations</h5>
        <hr />
      </div>
      <div style="display : flex">
        <img alt="Github Integration  " src="../../assets/images/Git.png" />
      </div>

      <hr />
      <div id="flex">
        <button>Change My Password</button>
        <button>Delete My Account</button>
      </div>
    </div>
    <br />
    <div class="box">
      <h5>Preferences</h5>
      <hr />

      <div id="flex">
        <div id="flex">
          <BIconMoon id="icon" />
          <p>Dark Mode</p>
        </div>
        <div id="flex">
          <div class="clickable">
            <p>Turn Off</p>
            <BIconBrightnessHigh id="icon" />
          </div>
          <div class="clickable">
            <p>Automatic</p>

            <BIconClock id="icon" />
          </div>
        </div>
      </div>

      <button>Delete My Account</button>
    </div>
  </div>
</template>

<script>
import {
  BIconPencil,
  BIconMoon,
  BIconBrightnessHigh,
  BIconClock
} from "bootstrap-vue";

export default {
  name: "Settings",
  components: {
    BIconPencil,
    BIconBrightnessHigh,
    BIconMoon,
    BIconClock
  }
};
</script>

<style scoped lang="postcss" >
#big-text {
  font-size: 1.4rem;
}

.clickable {
  display: flex;
  padding: 0rem 0.5rem;
  &:hover {
    cursor: pointer;
    color: #0e2f5a;
  }
}

#flex {
  display: flex;
  justify-content: space-between;
}

#icon {
  font-size: 1.8rem;
  cursor: pointer;
  margin-left: 7px;
  margin-right: 7px;
}

.body {
  padding: 1rem;
}

.box {
  box-shadow: 0px 3px 5px grey;
  border-radius: 5px;
  padding: 1.5rem 2rem;
  margin: 1rem;
  & button {
    background: red;
    padding: 0.8rem 4rem;
    color: white;
    border-radius: 5px;
    outline: none;
    border: 0px;
  }
  & h5 {
    font-weight: bold;
  }
  & li {
    list-style: none;
  }
  & img {
    max-width: 10%;
    height: auto;
  }
  & p {
    font-size: 1.2rem;
  }
}
</style>