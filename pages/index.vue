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
import { usePageDataStore } from  "../store/dataNav";


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
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Foldit:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Cinzel:wght@400..900&family=Foldit:wght@500&display=swap');
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
    color:rgb(240, 240, 240);
    width:60%;
    margin-inline:auto;
    animation: animPhrase .3s ease-out 2.4s forwards;
    opacity: 0;
font-size: calc(20px + .5vw);
    font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}
.txt{
    opacity: 0;
    font-size: calc(20px + 3vw);

    font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
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
   transform: translateY(-20px);
   opacity:0
  }

  to {
    transform: translateY(0px);
    opacity:1
  }
}
@keyframes animPhrase {
    0%{
   filter:blur(2px);
   transform: scale(0);
   opacity:0
  }
    70%{
        filter:blur(4px);
        transform: scale(1.3);
  }

  100% {
    filter:blur(0px);
    transform: scale(1);
    opacity:1
  }
}
</style>