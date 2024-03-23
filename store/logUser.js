import { defineStore } from 'pinia'
import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();
export const postUserStore = defineStore('postUserStore', {
    state: () => {
        return {
            userName: "",
            userEmail: "",
            userToken: "",
            user:null,
            userLogged:"",
            loggingMessage : "",
        }
    },
    actions: {
        async userLogin(body) {
             console.log("BODY LOGIN USER STORE", body)
            let bodyData = {
                email: body.email,
                password: body.password,
            }
                        const { data } = await useFetch(`/api/user?email=${bodyData.email}&password=${bodyData.password} `, {})
                      console.log("DATA STORE GET USER",data);
                        if (!data.value.user ) {
                            console.log("USER FALSE STORE");
                            this.user = false
                            this.loggingMessage = data.value.message
                            this.userLogged = false                         
                        } else {
                            this.user = true
                            // console.log("STORE GET USER DATA 2",data.value.user);
                            cookies.set('token',data.value.token)
                            cookies.set('2kihuf7',data.value.userId)
                            cookies.set('hy!edf',data.value.user)
                            this.loggingMessage = data.value.message
                        }
        }
    }
})