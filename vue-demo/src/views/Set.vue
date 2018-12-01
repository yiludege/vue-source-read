<template>
  <div>
    <div>{{list.name}}</div>
    <div>{{list.family}}</div>
    <div>{{list.old}}</div>
    <button @click="list.old += 1">年龄</button>
    <child></child>
  </div>
</template>

<script>
import child from "./SetChild";
export default {
  data() {
    return {
      list: {},
      tmpList: {}
    };
  },
  mounted() {
    // this.list.name = "zhidan";
    // this.list.family = "xu";
    // this.list = { name: "xu", family: "zhidan" };
    // this.$set(this.list, "name", "zhidan");
    // this.$set(this.list, "family", "xu");
    let data = { name: "xu", family: "zhidan" };
    this.tmpList = data;
    data.old = 20;
    this.list = data;
  },
  components: {
    child
  }
};
</script>

<style scoped>
</style>
