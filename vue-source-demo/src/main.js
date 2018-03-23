// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false;
Vue.component('myComponent', { template: '<div>component</div>' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, HelloWorld },
  data: { pro: { num: 1 } },
  methods: {
    plus(val) {
      this.pro.num = this.pro.num - val;
    },
    add(val) {
      this.pro.num = this.pro.num + val;
    },
  },
  beforeUpdate() {
    // eslint-disable-next-line
    debugger
    // eslint-disable-next-line
    console.log('fatherBeforeUpdate');
  },
  updated() {
    // eslint-disable-next-line
    console.log('fatherUpdated');
  },
  template: '<div><div>pro显示{{pro.num}}</div><div @click="plus(\'1\')">改变pro</div><App :pro-data="pro" :pro-fun="pro.num > 0 ? plus : add" v-on:click="add"/></div>',
});
