<template>
    <div class="bloc_total_blog">
        <themeSelect />
        <postCard  :posted="post"  v-if="post"/>
     
        <!-- <postCard  v-for=" { p, index } in post" :key="index" :title="p" /> -->
       
<!-- <h1>
    Bientôt en ligne
</h1> -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import { usePageDataStore } from  "../store/dataNav"
import themePost from '../composables/theme'
import { getPageUseStore } from "../store/postGet"

const dataPageStore = usePageDataStore()
const { pageName } =  dataPageStore 
const route = useRoute()
let params = route.fullPath.split("/")[1]
pageName(params)

const pageStore = getPageUseStore()
const { dataPage, dataPostSelected } = pageStore
let post = ref("")
let listTheme = ref("")
let postDataPage =
{
    d: "post",
    l: "fr"
}


const pst = async () => {
    await dataPage(postDataPage)
    post.value = pageStore.dataP.reverse()
    console.log("POST VALUE POST PAGE",post.value);
    listTheme.value = themePost(post.value)
}
pst()


</script>

<style lang="css" scoped>

.bloc_total_blog{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

/* h1{
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

   
} */
</style>