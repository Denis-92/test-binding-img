<template>
  <div id="app">

    <h1>TEST</h1>

    <h2 v-for="elements in link" :key="elements.url">

      <p> test text: {{ elements.url }} </p>

      <img :src=elements.url alt="img-not-display">

      <!-- :src="require(elements.url)" DA WARNING E ROMPE IL DISPLAY DELLA PAGINA -->

    </h2>

    <h2>
      <!-- QUESTO FUNZIONA MA NON MI PERMETTE DI PASSARE CON IL V-FOR L'INDIRIZZO DELLE IMMAGINI DINAMICAMENTE CON UNA VARIABILE -->
      <img :src="require('@/assets/foto1.png')" alt="immagine1">
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
