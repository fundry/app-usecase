<template>
  <div>
    <div class="profile">
      <div class="profile-contain" onselectstart="return false">
        <div>
          <div class="profile-item">
            <img alt="Usecase cover" src="../../assets/images/sample.png" />
            <h2>Hasura</h2>
          </div>
          <div class="options-container">
            <BIconGear id="icon" />
            <ul>
              <li>
                <div id="flex">
                  <BIconEyeSlash id="opt-icons" />Visibility
                </div>
              </li>

              <li>
                <div id="flex">
                  <BIconPeople id="opt-icons" />Collaborators
                </div>
              </li>

              <li>
                <div id="flex">
                  <BIconEnvelopeOpen id="opt-icons" />Invite
                </div>
              </li>

              <li>
                <div id="flex">
                  <BIconTrash id="opt-icons" />Delete
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="left">
          <div class="integration">
            <h5>integrations</h5>
            <ul>
              <li>
                <img alt="integration illustration" src="../../assets/images/Git.png" />
              </li>
              <li>
                <img alt="integration illustration" src="../../assets/images/Git.png" />
              </li>
              <li>
                <img alt="integration illustration" src="../../assets/images/Git.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="desc">
        <h5 onselectstart="return false">Hasura</h5>

        <p>Description of Hasura</p>
      </div>
    </div>
    <div class="body">
      <Usecases />
    </div>
  </div>
</template>

<script>
import {
  BIconGear,
  BIconTrash,
  BIconPeople,
  BIconEnvelopeOpen,
  BIconEyeSlash
} from "bootstrap-vue";
import Usecases from "./lists/usecase.list";

export default {
  name: "Case",
  components: {
    BIconGear,
    BIconEyeSlash,
    BIconTrash,
    BIconEnvelopeOpen,
    BIconPeople,
    Usecases
  }
};
</script>

<style scoped lang="postcss" >
.profile-contain {
  padding: 0.6rem 2rem;
  display: flex;
  justify-content: space-between;
  & h5 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.1rem;
    text-align: center;
  }
  & ul {
    text-align: center;
    display: flex;
    list-style: none;
  }
  & img {
    margin: 0.5rem;
    height: auto;
    width: 5rem;
    text-align: center;
  }
}
.body {
  padding: 1rem 1rem;
}

.profile {
  border-bottom: 1px solid #000;
  padding: 0.1rem 0.5rem;
}

.profile-item {
  padding-top: 5px;
  display: flex;
  & h2 {
    font-size: 2rem;
    padding: 2.5rem 1rem;
  }
  & img {
    height: 11vh;
    width: 7rem;
  }
}

.options-container {
  padding: 0.1rem 1rem;
  display: flex;
  float: right;
  & ul {
    padding-top: 5px;
    visibility: hidden;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  & li {
    margin: 0.2rem 0.7rem;
  }
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    background: #ebeef3;
    & ul {
      visibility: visible;
      position: aboslute;
    }
    & li {
    }
  }
  &: focus-within ul > li;
}

.desc {
  padding-top: 5px;
  border-top: 0.7px solid #000;
  display: flex;
  & h5 {
    padding: 0.5rem 1.5rem;
    background: #ebeef3;
    margin: 3px 15px;
    border-radius: 5px;
    font-size: 1.4rem;
    text-align: center;
  }
  & p {
    padding-top: 10px;
    font-size: 1.2rem;
  }
  &:hover {
    & h5 {
      cursor: pointer;
      color: #326690;
    }
  }
}

#left {
  padding-top: 2rem;
}

.integration {
  & img {
    max-width: 50px;
  }
}

#icon {
  font-size: 2.5rem;
  text-align: right;
}

#opt-icons {
  font-size: 2.1rem;
  padding-right: 3px;
}
</style>