<template>
  <div>
    <div>{{list.name}}</div>
    <div>{{list.family}}</div>
    <child></child>
  </div>
</template>

<script>
import child from "./SetChild";
export default {
  data() {
    return {
      list: {}
    };
  },
  mounted() {
    // this.list.name = "zhidan";
    // this.list.family = "xu";
    this.$set(this.list, "name", "zhidan");
    this.$set(this.list, "family", "xu");
  },
  components: {
    child
  }
};
</script>

<style scoped>
</style>
