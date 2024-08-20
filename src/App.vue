<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="background">
    <!-- Header -->
    <header class="px-20 pt-16 pb-48">
      <Header/>
    </header>
   <!-- Hero Section -->
    <Hero/>
  </div>
</template>

<style scoped>

*{
  font-family: Mont, sans-serif;
  font-size: 18px;
  letter-spacing: 0.025em;
  color: #fff;
  /*background-color: #0B1D26;*/
}

.background{
  background-image: url('/public/sky-1.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 100vh;
  
}
</style>
