<template>
    <div id="master" class="bloc_postSelected" @click="closePostId()">
        <header class="header">
            <div class="bloc_img">
                <img :src="postSelected[0].imageUrl" alt="">
            </div>
            <h1> {{ postSelected[0].title_P }} </h1>
        </header>
        <main class="main">
            <section class="title">
                <h2>
                    {{ postSelected[0].subTitle_P }}
                </h2>
            </section>
            <section class="paraf">
                <h3>{{ postSelected[0].title_1 }}</h3>
                <h3>{{ postSelected[0].subTitle_1 }}</h3>
                <p>{{ br(postSelected[0].p_1) }}</p>
            </section>
            <section class="paraf" v-if="postSelected[0].p_2">
                <h3>{{ postSelected[0].title_2 }}</h3>
                <h3>{{ postSelected[0].subTitle_2 }}</h3>
                <p>{{ postSelected[0].p_2 }}</p>
            </section>
            <section class="paraf" v-if="postSelected[0].p_3">
                <h3>{{ postSelected[0].title_4 }}</h3>
                <h3>{{ postSelected[0].subTitle_4 }}</h3>
                <p>{{ postSelected[0].p_4 }}</p>
            </section>
            <section class="paraf" v-if="postSelected[0].p_4">
                <h3>{{ postSelected[0].title_4 }}</h3>
                <h3>{{ postSelected[0].subTitle_4 }}</h3>
                <p>{{ postSelected[0].p_4 }}</p>
            </section>
            <section class="paraf" v-if="postSelected[0].p_5">
                <h3>{{ postSelected[0].title_5 }}</h3>
                <h3>{{ postSelected[0].subTitle_5 }}</h3>
                <p>{{ postSelected[0].p_5 }}</p>
            </section>
        </main>
        <loader v-if="load"/>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPageUseStore } from "../store/postGet"
import {closeTimeOut , openedPost} from '../utils/openedPost'

const pageStore = getPageUseStore()
const { dataPostSelected } = pageStore

const route = useRoute()
const id = route.params.id

let dataPost = ref("")
const load = ref(false)

// load.value = true 
dataPost.value = await dataPostSelected(id)
   
let postSelected = ref(pageStore.postSelect)

const closePostId = (() => { 
    navigateTo("/blog")
    closeTimeOut();
})

const br = ((p)=>{
return p.split(/<br ?\/?>/)
 .map((line, i) => [line])
})

</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");
@import url("../assets/style/font.css");

.bloc_postSelected {
    /* --hue-color: 230;
    --textColor :hsl(var(--hue-color), 8%, 75%);; */
    animation: fadeIn 1s ease-in forwards;
    margin-top: 50px;
    position: relative;
   
}

.header {
    position: relative;
    max-width: 100vw;
    max-height: 100dvh;
    overflow: hidden;
}
.bloc_img {
    position: relative;
    max-width:100vw;
    /* height: 100dvh;  */
    object-fit: contain;
   
}
.bloc_img > img { 
    width:auto;
    max-height: 100dvh;   
    /* aspect-ratio: auto;
    aspect-ratio: 16/9; */
    margin:auto;
}

.title {
    position: relative;

}


.header>h1 {
    color: white;

    background-color: rgb(38, 38, 38, .3);

    position: absolute;
    top: 80%;
    left: 0;
    right: 0;

    text-align: center;
    padding:  10px
}

.paraf {
    width: 90%;
    margin: 20px auto;
    color: white;
    text-align: center;
    padding: 10px 0;
    user-select: none;

}

.paraf>p {
    margin: 20px auto;
    text-indent: 20px;
    text-align: justify;
    color:var( --textColor);
    font-weight:lighter;

}
@media screen and (min-width:756px) and (max-height:500px) {
    .bloc_img {
    position: relative;
    width:100%;
    height: 100%;
  
   
}
.bloc_img > img {
    object-fit: cover;
    object-position: 0 -100px;
}
}
@media screen and (min-width:992px){
    .paraf{
        margin-top:30px
    }
    .paraf > h3 {
        margin:30px auto;
    }
    .paraf > p {
        column-count: 2;
        gap:30px;
        margin: 30px auto;
        padding:30px;
        width:70%;
        line-height: 25px;
    }
}

 /* ANIM */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>