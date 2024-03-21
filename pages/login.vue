<template>
    <div class="bloc_login">
        <div class="bloc_input">
            <label for="email">Email
        <input type="email" v-model="email" name="email" >
    </label>
        <label for="password">Password
        <input type="password" v-model="password" name="password">
    </label>
        <button class="btn" @click="login()">
            Enter
        </button>
    </div>
    <div class="modal" v-if="modal">
        <modalMessage  :success="successMessage" :message="message" />
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// const route = useRoute()



// let params = route.fullPath.split("/")[1]


import { watch } from "vue";
import { postUserStore } from "../store/logUser";
import { modelNames } from 'mongoose';
const logStore = postUserStore()
const  { userLogin }  = logStore

let password = ref("")
let email = ref("")
let message = ref("")
let errorMessage = ref("")
let successMessage = ref("")
let modal = ref("")


let valueMail = ref("")

const login = async () => {
    
let dataLogin = {
    email: email.value,
    password: password.value,
}
console.log("DATA TO LOGIN",dataLogin);
const getUser = await userLogin(dataLogin)

}
// WATCHER
watchEffect(() => {

if (logStore.user == false || logStore.user == true ) {
    console.log("USER LOG WATCHER");
    if (logStore.user == false) {
        console.log("LOGIN USER FALSE");
        modal.value = true
        errorMessage.value = true
        message.value = logStore.loggingMessage

        logStore.$patch({
            user: "",
            userLogged: "",
        })
        setTimeout(() => {
            modal.value = false
            message.value = ""   
            password.value = ""
            email.value = ""
        }, "2000")
    } else {
        modal.value = true
        successMessage.value = true
        message.value = logStore.loggingMessage
        setTimeout(() => {
            modal.value = false
            message.value = ""
            navigateTo("/")
        }, "2000");
    }

} 
});

</script>

<style lang="css" scoped>

.bloc_login{
    position:relative;
    display: flex;  
    align-items: center;
    width:100vw;
    height:100vh;
}

.modal{
position: absolute;
top:0;
left:0;
bottom:0;
right: 0;
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
.btn:active{
    box-shadow: inset 1px 1px 5px black, inset -2px -2px 2px white;
}

label{
    display: flex;
    flex-direction: column;
    gap: 5px;
    color:white
}
</style>