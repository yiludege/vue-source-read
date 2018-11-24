<template>
  <div>
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <button @click="handleGroup">group</button>
    <transition-group tag="ul" name="hide">
      <li v-for="num in list" :key="num">{{num}}</li>
    </transition-group>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      show: false,
      list: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    handleGroup() {
      let tmp = this.list.pop();
      this.list.push(tmp + 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.hide-enter-active,
.hide-leave-active {
  transition: height 2s;
}
.hide-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
</style>
