<template>
  <div class="header flex justify-between">
    <a href="#" class="logo">
      <img src="/src/components/icons/Logo.svg" alt="logo" class="hover:animate-bounce" />
    </a>
    <div class="cursor-pointer">
      <ul class="flex gap-10">
        <li class="hover:animate-bounce">Equipment</li>
        <li class="hover:animate-bounce">About us</li>
        <li class="hover:animate-bounce">Blog</li>
      </ul>
    </div>
    <a href="#" class="login flex gap-2 hover:animate-bounce">
      <img src="/src/components/icons/cart.png" alt="account image" class="login" />
      <p class="account">Account</p>
    </a>
  </div>
</template>

<script setup lang="ts"></script>
