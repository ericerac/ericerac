import { getPageUseStore } from "../store/postGet";
import {timeToRead} from './timeToRead';
import Filter from '../utils/filterId';


let upTime =""
export const openedPost = (async (data) => {
    const dataStore = getPageUseStore()
    
    // console.log("OPENED POST Payload",data);
// *********************************************** //

    let postRead = Filter(data);
    const timed = timeToRead(postRead)
    let timedPost = timed.toString()
    let timedMinut = timedPost.split(".")[0]
    let timedSecond = timedPost.split(".")[1]
    let timedS = Math.round(timedSecond * 6);
    let minutNumber = Number(timedMinut * 60)
    let secondtNumber = Number(timedS)
    let totalTime = minutNumber + secondtNumber

// *********************************************** //

// *********************************************** //

  let PostOpen = {
    id: data,
    opened: "true",
    read: "false",
  }
// // *************REQUEST PATCH+**********// //


try {
   
  await $fetch("/api/post", {
        method:'patch',
        body:PostOpen
          })
          .then((response) => {
            
          })
} catch (error) {
  return {
    message:error
  }
}

  upTime = setTimeout(async () => {
    let PostRead = {
      id: data,
      opened: "false",
      read: "true",
    }
    try {
  await $fetch("/api/post", {
        method:'patch',
        body:PostRead
          })
} catch (error) {
  return {
    message:error
  }
}
  }, totalTime * 1000);
      
      
// // *************END REQUEST PATCH+**********//

})

export const closeTimeOut = () => {
  // console.log("SEND CLOSE TIME OUT ");
  clearTimeout(upTime);
}