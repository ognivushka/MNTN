<script setup>
const props = defineProps({
    show: Boolean,
});
</script>

<template>
    <Transition name="image">
        <div v-if="show" class="image-popup-mask">
            <div class="image-popup-container flex flex-col">
                <button class="popup-default-button" @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <slot name="image"> jakiś obrazek </slot>
            </div>
        </div>
    </Transition>
</template>

<style>
.image-popup-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.image-popup-container {
    position: relative;
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.image-popup-header h3 {
    margin-top: 0;
    color: #42b983;
}

.image-popup-body {
    margin: 20px 0;
}

.popup-default-button {
    position: absolute;
    float: right;
    top: 2%;
    right: 2%;
}

.image-popup-enter-from {
    opacity: 0;
}

.image-popup-leave-to {
    opacity: 0;
}

.image-popup-enter-from .image-popup-container,
.image-popup-leave-to .image-popup-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
