<template>
    <div class="flex items-center justify-between">
        <img src="../../public/Logo.svg" width="108px" height="38px" alt="logo" />
        <nav class="flex gap-6">
            <ul v-for="item in commonData.navigation" :key="item.name">
                <a :href="item.url" class="hover:animate-pulse">{{ item.name }}</a>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { CommonData } from "../data/types";

const commonData = inject<CommonData>("commonData")!;
</script>
