<template>
  <div class="hello">
    <div @click="changeProps">{{e.key}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    e: {
      type: Object,
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    changeProps() {
      this.e.key += 'why';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
