import handlerPhrase from "../utils/phraseHandler"

export const usePhraseStore = defineStore('phraseStore', {

    state: () => {
        return {
            dataPhrase: "",
            phraseLength:"",
            onePhrase:""
        }
    },
    actions: {
        async getPhrase(p) {
            console.log("GET PHRASE ACTION STORE",p);
            const  responseData  = await $fetch(`/api/phrase?field=${p}`, {
                method: 'get',
            })
             console.log("RESPONSE STORE FROM API REQUEST",responseData);
           this.dataPhrase = responseData
           let data = handlerPhrase(responseData)
         
           this.onePhrase = data.unicPhrase
        //    console.log("this.phraseLength---->",this.phraseLength);

        }

    }
})