import { defineStore } from 'pinia'


export const useDelPage = defineStore("pageDel", {

    state: () => {
        return {
status:"",
message:"",
        }
    },
    actions: {
        async deletePost(id) {
             console.log("ID TO DELETE STORE FUNCTION",id);
            let token = useCookie('token')
            let userId = useCookie('2kihuf7') 
            let idTodelete = id
            //console.log("STORE CREATE POST TOKEN VALUE", token.value,"ID---->",userId.value);
            if (token.value == undefined || userId.value == undefined) {
                
                return navigateTo("/login")
            }
            let accessToken = token.value
            // console.log("BODY RECEIVE STORE POST PAGE-->",bodyFormData.entries());
            try {
                const data = await $fetch(`/api/post?token=${token.value}&idTo=${idTodelete}&userId=${userId.value}`, {
                    method: 'delete',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                    .then((res) => {
                        console.log("RES REQUEST PAGEDELETE STORE", res.message);
                        if (res.status == "error") {
                            this.status = "error"
                            this.message = res.message
                            setTimeout(() => {
                                // delStore.$patch({ message: "", status:"" })
                                this.status = ""
                            this.message = ""
                               }, 2000);
                            console.log("RES REQUEST PAGEDELETE STORE", res.message);
                        }
                        else{
                            this.status = "success"
                            this.message = res.message
                            setTimeout(() => {
                                // delStore.$patch({ message: "", status:"" })
                                this.status = ""
                            this.message = ""
                               }, 2000);
                            console.log("RES REQUEST PAGEDELETE STORE", res.message);
                        }
                    });
                // console.log("SUCCES FORM DATA STORE DELETE PAGE");
            } catch (error) {
                // console.log("ERROR", error);
            }
        }
    }
})