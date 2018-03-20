// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
Vue.component('my-component', { template: '<div>component</div>' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  data: { pro: 1 },
  methods: {
    add(val) {
      this.pro = this.pro + val;
    },
  },
  template: '<div><div>pro显示{{pro}}</div><div>make</div><App :hello="add" v-on:click="add"/></div>',
});
