<template>
  <BModal v-model="showModal">
    <p>
      Testing modal
    </p>
  </BModal>
</template>

<script lang="ts">
import Vue from "vue";
import { BModal } from "bootstrap-vue";

export default {
  name: "CreateUsecase",

  components: {
    BModal
  },

  data: () => {
    return { showModal: true };
  }
};
</script>

<style lang="postcss"></style>
