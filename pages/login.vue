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
       {{ message }}
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// const route = useRoute()

// let email = ref("")
// let password = ref("")

// let params = route.fullPath.split("/")[1]

// let emit = defineEmits(['namePage'])

// definePageMeta({
//   middleware: ["routing"]
//   // or middleware: 'auth'
// })

// // WATCHER
// watchEffect(() => {


// if (params) {
//     console.log("WATCHER LOGIN ROUTE",params);
//    emit('namePage',params)

// } else {
// }
// });



import { watch } from "vue";
import { postUserStore } from "../store/logUser";
const logStore = postUserStore()
const  { userLogin }  = logStore
// import { checkForm, validFirstName, validEmail, validPassword, validLastName } from "../utils/validForm";

// import ModalMessage from "./ModalMessage.vue";






// let login=ref(true)
// let firstName = ref("")
let password = ref("")
let email = ref("")
let message = ref("")
// let messageNom = ref("")
// let messagePrenom = ref("")
// let messageEmail = ref("")
// let inputEmailColor = ref("")
// let messagePassword = ref("")

let valueMail = ref("")

const login = async () => {
    
let dataLogin = {
    email: email.value,
    password: password.value,
}
console.log("DATA TO LOGIN",dataLogin);
const getUser = await userLogin(dataLogin)
console.log("GET USER LOGIN PAGE",getUser);
}
// WATCHER
watchEffect(() => {

if (logStore.loggingMessage) {
    message.value = logStore.loggingMessage
    setTimeout(() => {
        message.value = ""
}, "2000");

} 
});
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