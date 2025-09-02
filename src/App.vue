<template>
  <div class="bg-primary relative">
    <!-- Social Media Fixed -->
    <div class="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col gap-4 z-50">
      <SocialMedia :rotate="true" />
    </div>
    <div class="background pb-[400px]">
      <!-- Menu -->
      <div class="menu mx-20 pt-10">
        <Menu />
      </div>
      <!-- Hero Section -->
      <div class="hero flex gap-80 justify-end items-center h-screen">
        <Hero />
      </div>
    </div>
    <!-- Hero Section -->
    <div class="hiking-steps mx-60">
      <HikingSteps />
    </div>
    <!-- Footer Section -->
    <div class="footer mx-60 mt-52 pb-20">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import common from "./data/common.json";
import Hero from "./components/Hero.vue";
import SocialMedia from "./components/SocialMedia.vue";
import HikingSteps from "./components/HikingSteps.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
import anime from "animejs";

provide("commonData", common);
</script>

<style scoped>
* {
  font-family: Mont, sans-serif;
  font-size: 18px;
  letter-spacing: 0.025em;
  color: #fff;
  scroll-behavior: smooth !important;
}

.background {
  background-image: url("/public/background.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
