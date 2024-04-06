<template>
    <div class="bloc_default">
        <div class="menuNav">
            <menuNav :routePage="paging" />
        </div>
        <div class="slot">
            <slot class="bloc_page"></slot>
        </div>
        <div class="bloc_footer">
            <footerA />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'



</script>

<style lang="css" scoped>
.bloc_default {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100vw;
    gap:20px
}

.menuNav {

    animation: navAnim .5s ease-in-out 2.5s forwards;
    opacity: 0;
    z-index:111;
}

@keyframes navAnim {
    from {
        transform: translateY(-100px);
        filter: blur(10px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}
</style>