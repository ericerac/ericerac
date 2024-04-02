<template>
    <div class="bloc_postSelected">
<!-- <h1 style="color: aliceblue;">{{postSelected.title_P}}</h1> -->
<header>
    <div class="bloc_img">
        <img :src="postSelected[0].imageUrl" alt="">
    </div>
</header>
<main class="main">
<section class="title">
<h1>
   {{ postSelected[0].title_P}}
</h1>
<h2>
    {{ postSelected[0].subTitle_P }}
</h2>
</section>
<section class="paraf">

</section>
</main>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPageUseStore } from "../store/postGet"
const pageStore = getPageUseStore()
const { dataPostSelected } = pageStore

const route = useRoute()

const id = route.params.id

let dataPost = ref("")

    dataPost.value = await dataPostSelected(id)
    let postSelected = ref(pageStore.postSelect)



</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");
.bloc_postSelected{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width:100vw;
    height:auto;
    opacity:0;
animation: fadeIn 1s ease-in forwards;
}
.bloc_img{
    width:350px;
    height: auto;
    aspect-ratio: 16 / 9;
    border:1px solid white
}
.title{
    color:white
}
@keyframes fadeIn {
    from{
opacity:0;
    }
    to{
        opacity:1;
    }
}
</style>