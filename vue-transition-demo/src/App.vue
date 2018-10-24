<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <div class="default" :class="show ? 'show': 'hide'">
      why
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.default {
  opacity: 0;
  transition: all 0.5s
}

.hide {
  display: none;
}

.show {
  display: block;
  opacity: 1;
}
</style>
