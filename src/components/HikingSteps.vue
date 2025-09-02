<template>
    <div id="hiking_steps" class="flex flex-col gap-52 justify-center items-center -mt-56 pb-20">
        <div :class="['item', 'flex', 'gap-28', 'items-center', 'relative', itemReverse(index)]"
            v-for="(data, index) in commonData.stepsData" :key="index">
            <div :class="[
                'text-[240px]',
                'opacity-10',
                'font-bold',
                'absolute',
                'top-0',
                changeLocation(index),
            ]">
                {{ "0" + data.index }}
            </div>
            <div class="flex-1 max-w-2xl pl-12">
                <div class="flex flex-col gap-7">
                    <div class="flex gap-3 items-center">
                        <div class="w-16 border-t border-accent"></div>
                        <p class="uppercase text-accent tracking-[6px] text-nowrap">
                            {{ data.subtitle }}
                        </p>
                    </div>
                    <p class="text-6xl font-headers">{{ data.title }}</p>
                    <p>{{ data.description }}</p>
                    <div class="flex items-center gap-4 more-link hover:animate-pulse">
                        <a href="#" class="text-accent">read more</a>
                        <img src="/src/components/icons/arrow_right.png" alt="arrow right" class="w-6 h-4" />
                    </div>
                </div>
            </div>
            <div class="overflow-hidden cursor-pointer" @click="data.showModal = true">
                <img class="max-w-full h-auto object-cover" :src="data.image" :alt="'image of step ' + data.index" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import ImagePopup from "./modules/ImageOpen.vue";
import type { CommonData } from "../data/types";

const commonData = inject<CommonData>("commonData")!;

console.log(commonData.stepsData[0].showModal);

const itemReverse = (index: number) => {
    return {
        "flex-row-reverse": (index + 1) % 2 === 0,
        "flex-row": (index + 1) % 2 !== 0,
    };
};

const changeLocation = (index: number) => {
    return {
        "left-[45%]": (index + 1) % 2 === 0,
        "left-[-7%]": (index + 1) % 2 !== 0,
    };
};
</script>

<style lang="scss" scoped></style>
