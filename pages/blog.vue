<template>
    <div class="bloc_total_blog">
       <div class="messageDelete" style="color: white;" v-if="message">
        <h1>{{ message }}</h1>
       </div>
            <loader v-if="load"/>
       
        <themeSelect :listTheme="listTheme" :themeActive="themeActive" @openTheme="themeChoise" v-if="!load" />
        <postCard v-if="post && !load" :posted="post" :user="user" @delete="deleteToPost"/>

    </div>
</template>

<script setup>
import { ref,toRef } from "vue";
import { storeToRefs } from "pinia";
import { usePageDataStore } from "../store/dataNav"
import themePost from '../composables/theme'
import { getPageUseStore } from "../store/postGet"
import { useDelPage } from "../store/postDelete"
import filterByTheme from '../utils/filterByTheme'


const delStore = useDelPage()
const { deletePost } = delStore
const dataPageStore = usePageDataStore()
const { pageName } = dataPageStore
const route = useRoute()
let params = route.fullPath.split("/")[1]
pageName(params)
// let user = ref(false)
let user = useCookie('hy!edf')
const pageStore = getPageUseStore()
const { dataPage, dataPostSelected } = pageStore
let post = toRef("")
let listTheme = ref("")

let postDataPage =
{
    d: "post",
    l: "fr"
}

const pst = async () => {
    await dataPage(postDataPage) 
        post.value = pageStore.dataP.reverse()
        listTheme.value = themePost(post.value)
        
}
pst()

let themeActive = ref("")
const themeChoise = ((t) => {
     console.log("EMIT CHOISE THEME--->", t.toLowerCase());
    post.value = filterByTheme(t.toLowerCase())
    themeActive.value = t
})
let idToDelete = ref("")
const deleteToPost = (async(id)=>{
    let confirmation = confirm("Sûr de vouloir effecer ce post ? ")
    if (confirmation) {   
        idToDelete.value = id
        await deletePost(id)
    }
// console.log("ID TO DELETE BLOG PAGE FUNCTION",id);
})


let load = ref(false)
watchEffect(() => {
    if (pageStore.loading) {
        // console.log("WATCHER LOADER BLOG PAGE", pageStore.loading);
        load.value = true
    }
    else {
        load.value = false
    }
});


const { message, status } = storeToRefs(delStore)


if (message === "Post supprimé !") {
    console.log("POST SUPPRIMË IF",status);
   } else {
    
   }
watchEffect(() => {
    if (delStore.status) {
        // console.log("WATCHER LOADER BLOG PAGE", pageStore.loading);
      let nd = post.value
      console.log("POST VALUE SUPP",nd);
      post.value = nd.filter(x => x._id != idToDelete.value )
      console.log("POST VALUE SUPP",post.value);
      
        console.log("WATCH MESSAGE",delStore.status);
    }
    else {
     
    }
   
});

watch(
    () => message,
    () => {
   
    },
  )

watch(
    () => status,
    () => {
    if (status == "success") {
        console.log("STATUS SUCCESFULL");
    }
    },
  )


</script>

<style lang="css" scoped>
.bloc_total_blog {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: auto;
}


@media screen and (min-width:992px) {}

@media screen and (min-width:1080px) {}

@media screen and (min-width:1220px) {
    .bloc_total_blog {
        max-width: 1150px;
    }
}

@media screen and (min-width:1440px) {
    .bloc_total_blog {
        max-width: 1400px;
    }
}

@media screen and (min-width:1680px) {
    .bloc_total_blog {
        max-width: 1600px;
    }
}
.messageDelete{
    width:100dvw;
    height: 100dvh;
    position: fixed;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: rgba(0,0,0,.3);
    z-index:111
}
.messageDelete h1{
    margin: auto;
}
</style>