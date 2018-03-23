<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <div @click="changeItemOne">改变pro</div>
    <div>proData的显示{{proData.num}}</div>
    <div>{{b}}</div>
    <div @click="changeItemTwo">改变b</div>
    <div>item3name</div>
    <div>{{c}}</div>
    <div>{{d}}</div>
    <div @click="changeItemThree">改变three</div>
    <myComponent></myComponent>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  props: {
    proFun: { type: Function },
    proData: { type: Object },
  },
  data() {
    return {
      a: 0,
      b: 2,
      c: 3,
    };
  },
  beforeUpdate() {
    // eslint-disable-next-line
    debugger
    // eslint-disable-next-line
    console.log('childBeforeUpdate');
  },
  updated() {
    // eslint-disable-next-line
    console.log('childUpdated');
  },
  methods: {
    changeItemOne() {
      this.proFun(1);
    },
    changeItemTwo() {
      this.b = this.b + 1;
    },
    changeItemThree() {
      this.$emit('click', 2);
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
