<template>
    <div class="container_theme">
       
       
 <h3 @click="open(true)" :class="dark ? 'txtDark' : 'txtDay'" class=""> Tematíc </h3>

       <div class="bloc_theme" v-if="openedTheme" :class="dark ? 'txtDark' : 'txtDay'">
           <span @click.stop="$emit('openTheme', 'all')" :class="{ 'isActive' : choiseActive == 'all' }" class="theme_post">All theme</span>
           <div  v-for="t in theme" :key="t"  > 
               <span :class="{ 'isActive' : choiseActive == t }"  class="theme_post" @click="$emit('openTheme', t)">{{ t }}</span>
           </div>
       </div>
    
   </div>
</template>

<script setup>
// import { storeToRefs } from "pinia";
// import { computed, ref, watchEffect } from "vue";
import { getPageUseStore} from "../store/postGet"
// // import StringParse from "../composable/jsonStringParse"
// let dark = useState('dark')

// const listTheme = defineProps(['listTheme','themeActive'])
const listTheme = defineProps(['listTheme'])
 const pageStore = getPageUseStore()
 const theme = ref(pageStore.postTheme)
// let choiseActive = ref("")

// const themeSelect = ((t) => {
//     console.log("THEME SELECTED", t);

// })
// let openedTheme = ref(false)
// const open = ((o)=>{
//     console.log("OPENED INTRO");
//     openedTheme.value = !openedTheme.value
// })
// watchEffect(() => {
//   // console.log("WATCH INDEX PAGE", stateStore.getLangPage);
//    if (listTheme.themeActive) {
//     console.log("WATCH",listTheme.themeActive)
//     choiseActive.value = listTheme.themeActive
//   } 
// });
</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");
/* @import url("../assets/style/theme.css"); */
/* @import url("../assets/style/theme.css"); */

.container_theme {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin:10px auto;
    padding:10px;
    height:auto;
    gap:20px;
    border:1px solid white
}
.container_theme h3{
    font-size: 20px;
    font-weight: lighter;
    color: white;
     background-color: rgba(142, 1, 207,.5);
     padding:5px 10px;
     border-radius: 5px;
     box-shadow:3px 3px 13px  rgba(142, 1, 207,.7);
     cursor: pointer;
}
.container_theme h3:hover{
    transform:scale(1.1);
    transition: .3s;
}
.isActive{
    border:1px solid red;
    background-color: rgba(165, 42, 42,.2);
}
.bloc_theme {
    width: 90%;
    /* height:auto; */
    margin: 0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    row-gap: 20px;
    column-gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    
    /* display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 15px;
    column-gap: 10px; */
    /* border: 1px solid blue; */

}

.theme_post {
    display: block;
    height: 25px;
    line-height: 25px;
    width: 100px;
    border: 1px solid rgb(4, 4, 4); 
    text-align: center;
    border-radius: 5px;
    box-shadow: 1px 1px 12px rgba(240, 248, 255,1);
    cursor: pointer;
}

@media screen and (min-width:1440px) {
    fieldset{
        margin:0 auto;
        background-color: rgba(240, 248, 255,.3);
    } 

}
/* CLASS WITH CONDITION */
.isActive{
    border:1px solid red;
    background-color: rgba(165, 42, 42,.2);
}
.bgDark{
    color:white;
background-color: rgb(114, 1, 134);
    box-shadow: 1px 1px 12px rgba(240, 248, 255,1);
}
.bgDay{
    box-shadow: 1px 1px 12px rgba(240, 248, 255,1);
}
.blocBgDark{
    
}
.blocBgDay{

}
</style>