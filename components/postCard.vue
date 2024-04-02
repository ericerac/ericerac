<template>
    <div class="bloc_card">
        <main>
          
            <section class="section_post" v-for=" (p,index) in posted.posted" :key="index" :class="{ row_reverse: modulo(index) == 0 }">
                <div class="bloc_img"  >
               
                    <!-- <img :src="p.imageUrl" alt=""> -->
                </div>
                <div class="bloc_text">
                   <h1>{{ p.title_P}}</h1>
                   <h2>{{ p.subTitle_P}}</h2>
               
                   <span class="open_Article" @click="openPost(p._id)">Lire l'article <em> 3''</em></span>
                </div>
                
            </section>
        </main>
        <button @click="scrollTop">To up</button>
    </div>
</template>

<script setup>

let posted = defineProps(['posted'])
console.log("POSTED DATA",posted.posted);

const modulo = ((k) => {
    return k % 2
})
const openPost = ((id)=>{
navigateTo(`${id}`)
})
</script>

<style lang="css" scoped>
.bloc_card {
    --fontSizeTiltle:calc(20px +3vw)
    display:grid;
grid-row: auto;
margin:10px auto
}
.section_post{
    display:flex;
    flex-direction: row;
    width: 350px;
    height: 150px;
    /* border: 1px solid red; */
    border-radius: 10px;
    color:white;
    margin:10px auto;
    background-color: rgba(0, 0, 0,.1);
    padding:10px;
}
.bloc_img{
    width:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid green;
    border-radius: 50%;
    /* padding:10px */
}
.bloc_text{
    position:relative;
    width:200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bloc_text h1{
    font-size: var(--fontSizeTiltle);
}
.row_reverse {
        display: flex;
        flex-direction: row-reverse;
    }
    .open_Article{
        position:absolute;
        bottom:5px;
        left:5px;
        font-size: 14px;
        background-color: rgba(240, 248, 255,.1);
        padding:1px 5px;
        border-radius: 3px;
        cursor: pointer;
        /* box-shadow: 1px 1px 5px rgba(240, 248, 255,.3); */
    }
    .open_Article:hover{
        background-color: rgba(240, 248, 255,.2);
        /* box-shadow: 1px 1px 5px rgba(240, 248, 255,.3); */
    }
</style>