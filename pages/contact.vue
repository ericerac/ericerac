<template>
    <div class="bloc_contact" >
<div class="head_contact">
<h1>
    Pour nous contacter
</h1>
</div>
<div class="main_contact">
<a href="http://wistitiweb.com" target="_blank" >Site:
    wistitiweb.com
</a>

<a href="mailto:info@wistitiweb.com">
    Email:
    info@wistitiweb.com
</a>
<p>

</p>
</div>
    </div>
</template>

<script setup>

import { usePageDataStore } from  "../store/dataNav"
const dataPageStore = usePageDataStore()
const { pageName } =  dataPageStore 
const route = useRoute()
let params = route.fullPath.split("/")[1]
pageName(params)
</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");
.bloc_contact{
    display:flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap:30px;
    width:100vw;
    height:100vh;

}
h1{
    font-size: calc(25px + 3vw) ;
    width:auto;
    height:auto;
    padding:5px;
    color:white
}
.main_contact{
    color:white;
    font-size: 20px;
}
</style>