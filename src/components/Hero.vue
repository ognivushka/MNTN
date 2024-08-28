<script setup lang="ts">
import { defineProps, ref } from "vue";
import anime from "animejs";

interface Slide {
  subtitle: string;
  title: string;
  active: boolean;
}

const slidesData = ref<Slide[]>([
  {
    subtitle: "A Hiking guide",
    title: "Be prepared for the Mountains and beyond!",
    active: true,
  },
  {
    subtitle: "A Hiking guide 2",
    title: "Information on the best trails and routes",
    active: false,
  },
  {
    subtitle: "A Hiking guide 3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    active: false,
  },
  {
    subtitle: "A Hiking guide 4",
    title: "Lconsectetur adipiscing elit Lorem ipsum dolor sit amet",
    active: false,
  },
]);

const showSlide = (index: number) => {
  slidesData.value.forEach((slide, i) => {
    slide.active = i === index;
    if (i === index) {
      anime({
        targets: `.hero-slide-${i + 1}`,
        keyframes: [{ translateY: -100 }, { translateY: 0 }],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutSine",
      });
      return;
    }
  });
};
</script>

<template>
  <div class="hero-slider flex flex-col gap-8">
    <div v-for="(slide, index) in slidesData" :key="index" v-show="slide.active" :class="[
      `hero-slide-${index + 1}`,
      'max-w-4xl',
      'flex',
      'flex-col',
      'gap-8',
      'overflow-hidden',
    ]">
      <div class="flex gap-3 items-center">
        <div class="w-16 border-t border-accent"></div>
        <p class="uppercase text-accent tracking-[6px]">{{ slide.subtitle }}</p>
      </div>
      <div>
        <h1 class="text-7xl font-headers capitalize">
          {{ slide.title }}
        </h1>
      </div>
    </div>
    <a href="#" class="flex gap-3 items-center">
      <p>scroll down</p>
      <img src="/src/components/icons/arrow_downward.png" alt="arrow down" />
    </a>
  </div>
  <div class="hero_slider-navigation flex flex-col items-end">
    <div v-for="(slide, index) in slidesData" :key="index">
      <a href="#" :class="[
        'pr-6',
        'pb-5',
        'pt-5',
        'border-r',
        'block',
        'duration-300',
        { 'border-r-2': slide.active },
        { 'font-bold': slide.active },
        { 'text-accent': slide.active },
      ]" @click="showSlide(index)">
        {{ "0" + (index + 1) }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
