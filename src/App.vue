<template>
  <div id="app">

    <h1>TEST</h1>

    <h2 v-for="elements in link" :key="elements.url">

      <p> test text: {{ elements.url }} </p>

      <img :src="elements.url" alt="img-not-display">
    </h2>

  </div>
</template>

<script>
import { link } from '@/assets/link.js';

export default {
  name: 'App',
  data() {
    return {
      link,
    }
  }
}
</script>


<style lang="scss">
h2 {
  background-color: aqua;
}
</style>
