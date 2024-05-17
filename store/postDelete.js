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
            //  console.log("ID TO DELETE STORE FUNCTION",id);
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
                    
                        if (res.deletedCount == 0) {
                            this.status = "error"
                            this.message = "Post introuvable"
                            setTimeout(() => {                       
                                this.status = ""
                            this.message = ""
                               }, 2000);
                       
                        }
                        if (res.deletedCount == 1) {
                            this.status = "success"
                            this.message = "Post supprimé !"
                            setTimeout(() => {                   
                                this.status = ""
                            this.message = ""
                               }, 2000);
                         
                        }
                        
                    });
                // console.log("SUCCES FORM DATA STORE DELETE PAGE");
            } catch (error) {
                // console.log("ERROR", error);
            }
        }
    }
})