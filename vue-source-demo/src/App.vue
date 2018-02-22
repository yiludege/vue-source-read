<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <div>item2</div>
    <div>{{item[1]}}</div>
    <div @click="changeItemTwo">改变two</div>
    <div>item3name</div>
    <div>{{item[2].name}}</div>
    <div @click="changeItemThree">改变three</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {
      item: [1, 2, { name: 'xu' }],
    };
  },
  methods: {
    changeItemTwo() {
      // this.item[1] = this.item[1] + 1;
      this.$set(this.item, 1, this.item[1] + 1);
    },
    changeItemThree() {
      if (this.item[2].name === 'xu') {
        this.item[2].name = 'zhi';
      } else {
        this.item[2].name = 'xu';
      }
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
