<template>
  <div>
    <div>{{list.name}}</div>
    <div>{{list.family}}</div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
</style>
