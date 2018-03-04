<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <div>{{a}}</div>
    <div>{{b}}</div>
    <div @click="changeItemTwo">改变b</div>
    <div>item3name</div>
    <div>{{c}}</div>
    <div>{{d}}</div>
    <div @click="changeItemThree">改变three</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
    };
  },
  methods: {
    changeItemTwo() {
      this.b = this.b + 1;
    },
    changeItemThree() {
      this.c = 8;
    },
  },
  watch: {
    b() {
      this.c = this.c + 1;
    },
  },
  computed: {
    d() {
      return this.b + this.c;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; margin-top: 60px; }
</style>
