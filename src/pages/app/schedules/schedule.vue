<template>
  <div class="body">
    <p>You have no schedules relating to your writing</p>
  </div>
</template>

<script>
export default {
  name: "Schedule",
  components: {},
  data: () => {
    return {
      hasSchedule: false
    };
  }
};
</script>

<style scoped lang="postcss" >
.body {
  padding: 1rem;
  & p {
    text-align: center;
  }
}
</style>