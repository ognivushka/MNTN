<template>
    <div class="flex justify-between">
        <div class="flex flex-col justify-between">
            <img src="../../public/Logo.svg" width="108px" height="38px" alt="logo" />
            <p class="text-lg font-bold">
                Get out there & discover your next <br />
                slope, mountain & destination!
            </p>
            <p class="text-gray-500/50">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div class="flex flex-col gap-6">
            <h4 class="text-accent font-bold text-2xl">More on MNTN</h4>
            <nav v-for="item in commonData.navigation" :key="item.name">
                <ul>
                    <a :href="item.url" class="hover:underline">{{ item.name }}</a>
                </ul>
            </nav>
        </div>
        <div class="flex flex-col gap-6">
            <h4 class="text-accent font-bold text-2xl">More on The Blog</h4>
            <nav v-for="item in commonData.blogNavigation" :key="item.name">
                <ul>
                    <a :href="item.url" class="hover:underline">{{ item.name }}</a>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { CommonData } from "../data/types";

const commonData = inject<CommonData>("commonData")!;

console.log(commonData);
</script>

<style scoped></style>
