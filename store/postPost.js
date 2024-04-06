import { defineStore } from 'pinia'


export const usePostPage = defineStore("pagePost",{

status:()=>{
    return {
form_data :null
    }
},
actions:{
    async createPost(bodyFormData){
// console.log("BODY RECEIVE STORE POST PAGE-->",bodyFormData.entries());
        try {
                const  data = await $fetch('/api/post',{
                method:'post',
                body:bodyFormData
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