<template>
    <div class="bloc_login">
        <div class="bloc_input">
            <label for="email">Email
        <input type="email" v-model="email" name="email" >
    </label>
        <label for="password">Password
        <input type="password" v-model="password" name="password">
    </label>
        <button class="btn">
            Enter
        </button>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let email = ref("")
let password = ref("")

definePageMeta({
  middleware: ["routing"]
  // or middleware: 'auth'
})




</script>

<style lang="css" scoped>

.bloc_login{
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
}

.bloc_input{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: auto;
    width:300px;
    height:250px;
    box-shadow: 1px 1px 3px white, -1px -1px 3px white;
    border-radius: 10px;
}
.btn{
color: white;
background-color: blue;
border-radius: 5px;
padding :10px 15px;
border: none;
box-shadow: 1px 1px 3px white, -1px -1px 3px white;
}
.btn:hover{
    color: white;
background-color: blue;
border-radius: 5px;

transform: scale(1.2);
animation-duration: .3s;
box-shadow: 2px 2px 5px white,-2px -2px 5px white;
}
input:focus {
  color: red;
}
label{
    display: flex;
    flex-direction: column;
    gap: 5px;
    color:white
}
</style>