<template>
  <div class="body">
    <div class="box">
      <div>
        <div id="flex">
          <h5>User</h5>

          <BIconPencil id="icon" />
        </div>
        <hr />
        <div id="flex">
          <p>Nwani Victory</p>
          <p>Vickywane@gmail.com</p>
        </div>
        <h6>Send a copy of actions to my email</h6>
      </div>
      <br />
      <div>
        <h5>Integrations</h5>
        <hr />
      </div>
      <ul>
        <li>
          <img alt="Integration" src="../../assets/images/Git.png" />
        </li>
      </ul>

      <hr />
      <div id="flex">
        <button>Change My Password</button>
        <button>Delete My Account</button>
      </div>
    </div>
    <br />
    <div class="box">
      <p>Preferences pane</p>

      <button>Delete My Account</button>
    </div>
  </div>
</template>

<script>
import { BIconPencil } from "bootstrap-vue";

export default {
  name: "Settings",
  components: {
    BIconPencil
  }
};
</script>

<style scoped lang="postcss" >
#flex {
  display: flex;
  justify-content: space-between;
}

#icon {
  font-size: 1.7rem;
  cursor: pointer;
}

.body {
  padding: 1rem;
}

.box {
  box-shadow: 0px 3px 5px grey;
  border-radius: 5px;
  padding: 1.5rem 2rem;
  width: 120%;
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
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  & img {
    max-width: 7%;
    height: auto;
  }
  & p {
    font-size: 1.4rem;
  }
}
</style>