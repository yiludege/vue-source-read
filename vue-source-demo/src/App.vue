<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{a}}</div>
    <div>{{b+a}}</div>
    <div @click="changeItemTwo">改变b</div>
    <div>item3name</div>
    <div>{{c}}</div>
    <div>{{d}}</div>
    <div @click="changeItemThree">改变three</div>
    <hello-world :e="e"></hello-world>
    <div>{{e.key}}</div>
    <vmode v-model="f"></vmode>
    <div>{{f}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import vmode from './components/vmode';

export default {
  name: 'App',
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
      e: { key: 'asdf' },
      f: 'haha',
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
  components: {
    HelloWorld,
    vmode,
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
