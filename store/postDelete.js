import { defineStore } from 'pinia'


export const useDelPage = defineStore("pageDel", {

    state: () => {
        return {

        }
    },
    actions: {
        async deletePost(id) {
             //console.log("ID TO DELETE STORE FUNCTION",id);
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
                const data = await $fetch(`/api/post?token=${token.value}&idTo=${idTodelete}&userId=${userId}`, {
                    method: 'delete',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                    .then((res) => {
                        console.log("RES REQUEST PAGEDELETE STORE", res.message);
                        if (res.message == "Suppression non autorisée !") {
                            // navigateTo("/login")
                        }
                    });
                // console.log("SUCCES FORM DATA STORE DELETE PAGE");
            } catch (error) {
                // console.log("ERROR", error);
            }
        }
    }
})