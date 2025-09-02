<template>
    <div class="flex gap-6 items-center" :class="isRotate(props.rotate)">
        <p>Follow me</p>
        <div v-for="(media, index) in commonData.socials" :key="index">
            <a :href="media.url" :alt="'social media link to ' + media.name">
                <img :src="`/src/components/icons/${media.name}.svg`" :alt="`icon of ${media.name}`"
                    class="hover:animate-spin max-h-5" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { CommonData } from "../data/types";

const commonData = inject<CommonData>("commonData")!;

const props = defineProps<{
    rotate?: boolean;
}>();

const isRotate = (rotate: boolean | undefined) => {
    return rotate ? "rotate-90" : "";
};
</script>

<style></style>
