import { getPageUseStore} from "../store/postGet"


const Filter = (x, pD, link) => {
    const pageStore = getPageUseStore()
  const post = pageStore.dataP;
  const cardUp = post.find((i) => i._id == x);
   //console.log("CARD UP FILTER ID",cardUp);
  return cardUp
}
export default Filter