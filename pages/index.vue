<template>
    <div class="bloc_master">
        <div class="bloc_title">
<h1 class="txt item1">W</h1>
<h1 class="txt item2">I</h1>
<h1 class="txt item3">S</h1>
<h1 class="txt item4">T</h1>
<h1 class="txt item5">I</h1>
<h1 class="txt item6">T</h1>
<h1 class="txt item7">I</h1>
<h1 class="txt item8">W</h1>
<h1 class="txt item9">E</h1>
<h1 class="txt item10">B</h1>
</div>
<div class="phrase">

     {{ dataPhrase.citation }} 
    <em><i> - {{ dataPhrase.auteur }} -</i> </em>
</div>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { usePhraseStore } from "../store/phraseGet"
import {storeToRefs} from "pinia"
import { usePageDataStore } from  "../store/dataNav"

const storePhrase = usePhraseStore()
const { getPhrase } = storePhrase
let dataPhrase = ref("")
let loading = ref(true)

const dataPageStore = usePageDataStore()
const { pageName } =  dataPageStore 
const route = useRoute()
let params = route.fullPath.split("/")[1]
pageName(params)
console.log("PARAMS INDEX PAGE",params);

onMounted(async () => {
    await getPhrase()
    dataPhrase.value = storePhrase.onePhrase
    loading.value = false
})




//  let routerPage = defineProps(['routPage'])
let user = ref(false)




</script>

<style lang="css" scoped>

.bloc_master{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    color:white;
    text-align: center;
    
}
.bloc_title{
    display:flex;
    flex-direction: row;
    margin-inline:auto
}

.phrase{
    display:flex;
    flex-direction: column;
    color:white;
    width:60%;
    margin-inline:auto;
    animation: anim .3s ease-out 2.4s forwards;
    opacity: 0;
}
.txt{
    opacity: 0;
    font-size: calc(20px + 3vw);
}
.item1{
    animation: anim 1s ease-in-out 0s  forwards;
}
.item2{
    animation: anim 1s ease-in-out .2s  forwards;
}
.item3{
    animation: anim 1s ease-in-out .4s  forwards;
}
.item4{
    animation: anim 1s ease-in-out .6s  forwards;
}
.item5{
    animation: anim 1s ease-in-out .8s  forwards;
}
.item6{
    animation: anim 1s ease-in-out 1s  forwards;
}
.item7{
    animation: anim 1s ease-in-out 1.2s  forwards;
}
.item8{
    animation: anim 1s ease-in-out 1.4s  forwards;
}
.item9{
    animation: anim 1s ease-in-out 1.6s  forwards;
}
.item10{
    animation: anim 1s ease-in-out 1.8s  forwards;
}
@keyframes anim {
    from {
   
   opacity:0
  }

  to {
   
    opacity:1
  }
}
</style>