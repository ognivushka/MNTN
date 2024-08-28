<template>
    <div class="flex gap-6 rotate-90 fixed top-96">
        <p>Follow us</p>
        <div v-for="(data, index) in socMediaData" :key="index">
            <a :href="data.link" :alt="'social media link ' + data.name">
                <img :src="`/src/components/icons/${data.name}.svg`" alt="social media icon"
                    class="hover:animate-spin" />
            </a>
        </div>
    </div>
</template>

<script setup>
const socMediaData = [
    {
        name: "instagram",
        link: "https://www.instagram.com",
    },
    {
        name: "twitter",
        link: "https://www.twitter.com",
    },
];
</script>

<style></style>
