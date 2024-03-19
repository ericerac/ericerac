<template>
    <div>
        <div class="menuNav">

            .<menuNav />
        </div>
<slot></slot>
<footerA />
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

.menuNav{
    animation: navAnim .5s ease-in-out 2.5s forwards;
    opacity: 0;
    
}
@keyframes navAnim {
    from{
        transform: translateY(-100px);
        filter: blur(10px);
opacity: 0;
    }
    to{
        transform: translateY(0px);
        filter: blur(0px);
opacity: 1;
    }
}
</style>