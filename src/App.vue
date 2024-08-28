<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import anime from "animejs";
import SocialMedia from "./components/SocialMedia.vue";
</script>

<template>
  <div class="background relative">
    <!-- Social Media Fixed -->
    <SocialMedia />
    <!-- Header -->
    <header class="px-20 pt-16 pb-48">
      <Header />
    </header>
    <!-- Hero Section -->
    <div class="hero px-20 flex gap-80 justify-end items-center">
      <Hero />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Mont, sans-serif;
  font-size: 18px;
  letter-spacing: 0.025em;
  color: #fff;
  /*background-color: #0B1D26;*/
}

.background {
  background-image: url("/public/sky-1.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
