import { defineStore } from 'pinia'


export const usePostPage = defineStore("pagePost",{

status:()=>{
    return {
form_data :null
    }
},
actions:{
    async createPost(bodyFormData){
      let token = useCookie('token')
       let userId = useCookie('2kihuf7')

       console.log("STORE CREATE POST TOKEN VALUE", token.value);
      //  console.log("STORE CREATE POST USERID VALUE", userId.value);
      if (token.value == undefined) {
        console.log("TOKEN OR USER NOT COOKIES");
        return navigateTo("/login")
      }
      let accessToken = token.value
// console.log("BODY RECEIVE STORE POST PAGE-->",bodyFormData.entries());
        try {
                const  data = await $fetch('/api/post',{
                method:'post',
              //   body:{
              //   bodyForm:bodyFormData,
              //   id:userId
              // },
               body:bodyFormData,
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
            })
            .then((res)=>{
console.log("RES REQUEST PAGEPOST STORE",res);
            });
            console.log("SUCCES FORM DATA STORE POST PAGE" );
        } catch (error) {
            console.log("ERROR",error);
        }
    },

    async countPost(data) {
      console.log("COUNT POST", data);

      return new Promise((resolve, reject) => {
        instance
          .put("/inici/fieldPost", data, {
          })
          .then((response) => {
            console.log("SEND FIELD ONE ", response);
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });

    },

}

})