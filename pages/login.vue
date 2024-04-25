<template>
    <div class="bloc_login">
        <div class="bloc_input">
            <label for="email">Email
                <input type="email" v-model="email" name="email">
                <div class="messageLogin" v-if="errorMessage">           
                    {{ message }}
        </div>
            </label>
            <label for="password">Password
                <input type="password" v-model="password" name="password">
            </label>
            <button class="btn" @click="login()">
                Enter
            </button>

        </div>
        <div class="loggedOn" v-if="successMessage">
           <p>{{ message }}</p> 
        </div>
       
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { watch } from "vue";
import { postUserStore } from "../store/logUser";
import { usePageDataStore } from "../store/dataNav"
import { modelNames } from 'mongoose';

const route = useRoute()
let params = route.fullPath.split("/")[1]

// let pageTo = useState("routePage" , () => params)


const logStore = postUserStore()
const { userLogin } = logStore
const dataPageStore = usePageDataStore()
const { pageName } = dataPageStore
pageName(params)

let password = ref("")
let email = ref("")
let message = ref("")
let errorMessage = ref("")
let successMessage = ref("")
let modal = ref(false)
let activePage = ref("")
let successLogin = ref(false)


const login = async () => {

    let dataLogin = {
        email: email.value,
        password: password.value,
    }
    // console.log("DATA TO LOGIN", dataLogin);
    const getUser = await userLogin(dataLogin)

}
// WATCHER
watchEffect(() => {
    if (logStore.user == null) {
        return
    }
    if (logStore.user == false || logStore.user == true) {
        // console.log("USER LOG WATCHER");
        if (logStore.user == false) {
            // console.log("LOGIN USER FALSE");
            successLogin.value = true
            errorMessage.value = true
            message.value = logStore.loggingMessage
            logStore.$patch({
                user: "",
                userLogged: "",
            })
            setTimeout(() => {
                successLogin.value = false
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
.bloc_login {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: auto;
    margin: auto;
}

/* .bloc_modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
} */
.messageLogin{
    display: block;
    color:red;
    font-size: 20px;
}
.loggedOn{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    text-align: center;
    color: blanchedalmond;
    background-color: green;
}
.loggedOn > p {
    width:auto;
    font-size: 20px;
    margin: auto;
    
}
.bloc_input {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 300px;
    height: 250px;
    box-shadow: 1px 1px 3px white, -1px -1px 3px white;
    border-radius: 10px;
}

.btn {
    color: white;
    background-color: blue;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    box-shadow: 1px 1px 3px white, -1px -1px 3px white;
}

.btn:hover {
    color: white;
    background-color: blue;
    border-radius: 5px;

    transform: scale(1.2);
    animation-duration: .3s;
    box-shadow: 2px 2px 5px white, -2px -2px 5px white;
}

.btn:active {
    box-shadow: inset 1px 1px 5px black, inset -2px -2px 2px white;
}

label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white
}
</style>