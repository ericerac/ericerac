<template>
    <div class="bloc_total_blog">
<h1>
    Bientôt en ligne
</h1>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

.bloc_total_blog{
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1{
    font-size: calc(25px + 3vw);
    color:white;
    width:auto;
    margin:auto;
    animation: intro 2s ease-in  forwards;
    opacity: 0;
}

@keyframes intro {
    from{
        opacity: 0;
        transform: rotate(0deg) translate(50%)
    }
    to{ 
        opacity: 1;
        transform: rotate(360deg) translate(0%)
    }

   
}
</style>