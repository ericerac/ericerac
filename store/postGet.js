import { defineStore } from 'pinia'
import themePost from "../composables/theme";
import { openedPost } from '../utils/openedPost'
export const getPageUseStore = defineStore('getPageStore', {
  
  state: () => {
    return {
      dataP: [],
      postSelect: "",
      nPage: "inici",
      postTheme:"",
      loading:false
    }
  },
  
  actions: {
    async dataPage(d) {
        // console.log("PAYLOAD STORE POST GET",d);
      this.loading = true
      const { data } = await useFetch(`/api/post?name=${d.d}&lang=${d.l}`); 
      if (data.value) {
        //  console.log("DATA VALUE",data.value);
       
           this.postTheme = themePost(data.value)
           this.dataP = data.value;      
           this.loading = false
       
      }
    },
    async dataFieldPage(d) {
      // console.log("DATA FIELD FUNCTION STORE",d);
      const { data } = await useFetch(`/api/page?name=${d.d}&lang=${d.l}&field=${d.t}`); 
      if (data.value) {
        // console.log("DATA VALUE",data.value);
         this.postTheme = themePost(data.value)
      }
    },
    async dataPostSelected(d) {
      //  console.log("STORE DATAPOST SELECTED---->",d);
      const { data } = await useFetch(`/api/post?id=${d}`); 
      if (data.value) {
        openedPost(d)
        // console.log("DATA VALUE",data.value);
        this.postSelect = data.value;
      }
    }

  }
})