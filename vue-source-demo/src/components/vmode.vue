<template>
  <div>
    <div @click="handleClick">{{see}}</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'see',
    event: 'make',
  },
  props: {
    see: {
      type: String,
    },
    make: {
      type: Function,
    },
  },
  methods: {
    handleClick() {
      this.$emit('make', `${this.see}1`);
    },
  },
};
</script>

<style scoped>

</style>
