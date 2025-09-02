<script setup>
const props = defineProps({
    show: Boolean,
});
</script>

<template>
    <Transition name="popup">
        <div v-if="show" class="popup-mask">
            <div class="popup-container">
                <div class="popup-header">
                    <slot name="header">default header</slot>
                </div>

                <div class="popup-body">
                    <slot name="body">default body</slot>
                </div>

                <div class="popup-footer">
                    <slot name="footer">
                        default footer
                        <button class="popup-default-button" @click="$emit('close')">OK</button>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.popup-mask {
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

.popup-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.popup-header h3 {
    margin-top: 0;
    color: #42b983;
}

.popup-body {
    margin: 20px 0;
}

.popup-default-button {
    float: right;
}

.popup-enter-from {
    opacity: 0;
}

.popup-leave-to {
    opacity: 0;
}

.popup-enter-from .popup-container,
.popup-leave-to .popup-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
