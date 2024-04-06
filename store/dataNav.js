export const usePageDataStore = defineStore('usePageDataStore', {
    state: () => {
        return {
            routePage : ""
        }
    },
    actions: {
        pageName (p) {
            // console.log('PAGE STORE NAME',p);
            if (p == "") {
                this.routePage = "home"
            } else {
                
                this.routePage = p
            }

        }
    }
})