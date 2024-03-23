<template>
    <div class="bloc_modal">
        <div class="modal_content" 
      
         >
            
            {{ message.message }} {{ message.success }}
        </div>
    </div>
</template>

<script setup>

let message = defineProps(['message','success'])


//  :class="[message.success ? bloc_modal_success : bloc_modal_error]" 
</script>

<style lang="css" scoped>

.bloc_modal{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
    z-index:2;
    border:2px solid red;
    background-color: rgba(210, 105, 30,.3);
}
.modal_content{
    width:200px;
    height: 150px;
    color:white;
    margin: auto;
    text-align: center;
    line-height: 150px;  
}
.bloc_modal_error{
   
    background-color: blueviolet;
    border:2px solid red;
  
}
.bloc_modal_success{
   
    background-color: rgb(16, 91, 7);
    border:2px solid green;
}

</style>