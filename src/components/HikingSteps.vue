<template>
    <div id="hiking_steps" class="flex flex-col gap-52 justify-center items-center -mt-56 pb-20">
        <div :class="['item', 'flex', 'gap-28', 'items-center', 'relative', itemReverse(index)]"
            v-for="(data, index) in sectionData" :key="index">
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
                <div>
                    <Teleport to="body">
                        <ImagePopup :show="data.showModal" @close="data.showModal = false">
                            <template #image>
                                <img class="max-w-full h-auto object-cover" :src="data.image"
                                    :alt="'image of step ' + data.index" />
                            </template>
                        </ImagePopup>
                    </Teleport>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
// import Modal from "./modules/Popup.vue";
import ImagePopup from "./modules/ImageOpen.vue";

// const showModal = ref(false);

const sectionData = ref([
    {
        index: 1,
        title: "What level of  hiker are you?",
        subtitle: "GEt Started",
        description:
            "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
        image: "/public/step_1.png",
        link: "/hiking-step-1",
        showModal: false,
    },
    {
        index: 2,
        title: "Picking the right Hiking Gear!",
        subtitle: "Hiking Essentials",
        description:
            "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
        image: "/public/step_2.png",
        link: "/hiking-step-2",
        showModal: false,
    },
    {
        index: 3,
        title: "Understand Your Map & Timing",
        subtitle: "where you go is the key",
        description:
            "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.",
        image: "/public/step_3.png",
        link: "/hiking-step-3",
        showModal: false,
    },
]);

const itemReverse = (index) => {
    return {
        "flex-row-reverse": (index + 1) % 2 === 0,
        "flex-row": (index + 1) % 2 !== 0,
    };
};

const changeLocation = (index) => {
    return {
        "left-[45%]": (index + 1) % 2 === 0,
        "left-[-7%]": (index + 1) % 2 !== 0,
    };
};
</script>

<style lang="scss" scoped></style>
