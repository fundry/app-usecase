<template>
  <div class="body">
    <BCard class="card">
      <div>
        <img alt="Item cover" />

        <ul>
          <li>
            <h4>Organizing The 2020 Annual Developer's Conference</h4>
          </li>
          <li>Published on 20-20-20 to Medium.com</li>
        </ul>

        <button>Visit</button>
      </div>
    </BCard>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";

export default {
  name: "Publish",
  components: {},
  data: () => {
    return {
      date: Date.now()
    };
  }
};
</script>

<style scoped lang="postcss" >
.body {
  padding: 1rem;
}
.card {
  padding: 1rem 3rem;
  & div {
    display: flex;
    justify-content: space-between;
    & ul {
      list-style: none;
      & li {
        text-align: center;
      }
    }
  }
  & button {
    padding: 0.7rem 3rem;
    border: 1px solid black;
    text-align: center;
    outline: none;
    background: transparent;
    color: #000;
    border-radius: 5px;
  }
}
</style>