<template>
    <div id="master" class="bloc_card">
        <main class="main">

            <section  id="bloc_to_display" class="section_post" v-for=" (p, index) in dataPosted" :key="index"
                :class="{ row_reverse: modulo(index) == 0 }">
                <div class="bloc_img">

                    <img :src="p.imageUrl" alt="">
                </div>
                <div class="bloc_text">
                    <h1>{{ p.title_P }}</h1>
                    <span class="open_Article" @click="openPost(p._id)">Lecture <em>{{ read(p._id) }}</em></span>
                    <h2>{{ p.subTitle_P }}</h2>
                    <h3>{{ p.title_1 }}</h3>
                    <h3>{{ p.subTitle_1 }}</h3>
                    <p class="p_Display" @click="openPost(p._id)"> {{ p.p_1 }} </p>
                </div>
<span v-if="user" class="btnUser" @click="$emit('delete',p._id)">Delete</span>
            </section>
        </main>
        <!-- <button @click="scrollTop">To up</button> -->
    </div>
</template>

<script setup>
import { timeToRead } from "../utils/timeToRead"
import Filter from '../utils/filterId';
import { displayCard } from '../utils/observer'

let posted = defineProps(['posted','user'])
let dataPosted = posted.posted
onMounted(()=>{
    let target = document.querySelectorAll("#bloc_to_display")
    //  displayCard(target)
    // console.log("TARGET ON PAGE",target);
})

const read = (id) => {
    let postRead = Filter(id, posted.post);
    const timed = timeToRead(postRead)
    // console.log("TIMED POST", timed);
    let timedPost = timed.toString()
    let timedMinut = timedPost.split(".")[0]
    let timedSecond = timedPost.split(".")[1]
    let timedS = Math.round(timedSecond * 6);
    // console.log("TIMESD", typeof timedS, timedS);
    if (timedMinut == 0) {
        return " - 1 min"
    }
    if (isNaN(timedS)) {
        timedS = "-"
    }

    // console.log("timedPosted-----",timedPosted);
    return timedMinut + '"' + timedS + "'"
    // return timed
}

const modulo = ((k) => {
    return k % 2
})

const openPost = ((id) => {
    navigateTo(`${id}`)
})

</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");

.bloc_card {
    --fontSizeTiltle: calc(20px +3vw);
display: flex;
flex-direction: row;
    margin: 10px auto
}

.section_post {
    width: 350px;
    height: 150px;
    position: relative;
    margin: 15px auto;
    /* opacity: 0; */  /*si display card on */
    opacity: 0;
    animation: fadeOn linear forwards;
    animation-timeline: view(90vh 0px);
    /* animation-range:contain; */
    /* animation-range-start: 300px; */
}

.bloc_img {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.bloc_img>img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    object-position: 0 -50px;
}
.section_post:hover .bloc_img > img {
    transform: scale(1.2);
    transition:.5s;
  
}
.section_post:hover .info_hover{
display: inline;
position: absolute;
top:0;
left:0;
transition: .3s;
height:auto;
}
.bloc_text {
    position: absolute;
    bottom: 50%;
    left: 75%;
    transform: translate(-50%, 50%);
    width: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .3);
    color: white;
    padding: 10px;
    gap: 10px;
    overflow: hidden;
    /* opacity: 0;
    animation-timeline: view(90vh 0px);
    animation: fadeOnTitle .3s ease-in forwards; */
}
.bloc_text h3{
    display:none
}
.p_Display{
   display: none;
}
.bloc_text h1 {
    font-size: var(--fontSizeTiltle);
}

.open_Article {
    font-size: 14px;
    background-color: rgba(240, 248, 255, .1);
    padding: 1px 5px;
    border-radius: 3px;
    cursor: pointer;
  
}

.open_Article:hover {
    background-color: rgba(240, 248, 255, .2);
}
/* HOVER EFFECT CARD*/ 
.section_post:hover .bloc_text{
   
    height: 100%;
    transition: .4s;
}
@media screen and (min-width:760px) {
    .bloc_text {
        animation: none;
    }
}

@media screen and (min-width:760px) {
   .main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   }
   .bloc_text {
        animation: none;

    }
}
@media screen and (min-width:992px) {
    .main{
       gap:20px;
    }
     .section_post {
    width: 300px;
    height: 200px;
    position: relative;
    margin: 15px auto;
}
.bloc_text {
    position: absolute;
   bottom:0;
    left: 0;
    transform: translate(0%, 0%);
    width: 100%;
    height: 50px;
    display: block;
    align-items: center;
    /* flex-direction: column; */
    background-color: rgba(0, 0, 0, .3);
    color: white;
  
}
.bloc_text h3{
    display:block
}
.p_Display{
    margin: 20px auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-indent: 20px;
    text-align: justify;
    height: auto;
    cursor: pointer;
}
}
@media screen and (min-width:992px) {
    
}

/* DISPLAY CARD CLASS */

.card_on{
    animation: fadeOn .3s ease-in forwards;
}
@keyframes fadeOn {
    from{
opacity:0;
transform: translateY(50px);
    }
    to{
        opacity:1;
transform: translateY(0px);
    }
}
@keyframes fadeOnTitle {
    from{
opacity:0;
transform: translate(-10%,-10%);
    }
    to{
        opacity:1;
transform: translate(-50%,50%);
    }
}

/* USER CLASS*/ 
.btnUser{
    position: absolute;
    width:max-content;
    padding-inline: 10px;
    /* inset:5px  80% 80%; */
    background-color: rgba(0, 8, 5, .5);
    top:0;
    right: 0;
    color:white;
    cursor: pointer;
}
/* HOVER EFFECT*/ 
.info_hover{
    display:none;
}
</style>