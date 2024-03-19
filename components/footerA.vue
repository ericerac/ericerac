<template>
    <div class="bloc_footer">
<ul>
    <li>Home</li>
    <li>Blog</li>
    <li>Contact</li>
    
</ul>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");

.bloc_footer{
width:100vw;
height:80px;
/* border-top: 2px solid white; */
box-shadow: 2px 0px 1px rgba(255,255,255,1);
}
ul{
    display: flex;
    flex-direction: column;
    gap:5px;
    color:white
}
</style>