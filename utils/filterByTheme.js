import { getPageUseStore} from "../store/postGet"

const filterByTheme = ((t)=>{
    // console.log("FILTER THEME",t);
    const pageStore = getPageUseStore()
    const data = pageStore.dataP
    if (t === "all") {
        console.log("data all post Theme",pageStore.dataP);
        return pageStore.dataP
    }
    // console.log("DATA FILTER THEME BEFORE FILTER",data);
    let themeSelected = data.filter(x => x.theme.toLowerCase() === t)
    // console.log("POST THEME SELECTED RETURN FILTER",themeSelected);
    return themeSelected
})
export default filterByTheme