<template>
  <div class="body">
    <div v-if=" hasJote !== true ">
      <div class="no-jote">
        <div>
          <p>You have no Jottings</p>

          <button>Create a Jotter</button>
        </div>
      </div>
    </div>

    <div v-else>
      <BCard class="card">
        <div>
          <p>Introduction Paragraph</p>

          <BIconThreeDotsVertical id="icon" />
        </div>
      </BCard>
    </div>
  </div>
</template>

<script>
import { BCard, BIconThreeDotsVertical } from "bootstrap-vue";

export default {
  name: "Editor",
  components: {
    BIconThreeDotsVertical
  },
  data: () => {
    return {
      hasJote: true
    };
  }
};
</script>

<style lang="postcss" scoped >
.card {
  padding: 0.5rem;
  width: 25rem;
  height: 30vh;
  box-shadow: 2px 3px 6px grey;
  & div {
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    & p {
      font-size: 1.1rem;
    }
  }
}

#icon {
  font-weight: 2rem;
}

.body {
  padding: 1rem;
}

.no-jote {
  display: flex;
  place-items: center;
  justify-content: center;
  & button {
    padding: 0.8rem 5rem;
    background: transparent;
    border: 1px solid #000;
    color: #000;
    outline: 0px;
    border-radius: 5px;
  }
}
</style>