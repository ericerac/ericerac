import { getPageUseStore} from "../store/postGet"

const filterByTheme = ((t)=>{
    console.log("FILTER THEME",t);
    const pageStore = getPageUseStore()
    const data = pageStore.dataP
    if (t === "all") {
        return pageStore.dataP
    }
    let themeSelected = data.filter(x => x.theme.toLowerCase() === t)
    return themeSelected
})
export default filterByTheme