export default defineNuxtRouteMiddleware(async(to, from)=>{
    
    let routeTo = to
    let routeFrom = from
    
     let  user = useCookie('hy!edf').value
    //  console.log("MIDDLEWARE COOKIE",user,"ROUTE",to.path);
     if (to.path == "/postCreate" || to.path == "/adminBoard" || to.path == "/CreatePhrase" || to.path == "/PostUpdate" ) {
        try {
            //  console.log("TO POST CREATE ROUTE",typeof user);
            if (typeof user == "undefined") {
                //  console.log("POST CREATE ROUTE 2");
                return navigateTo('/')
            }else{
                //  console.log("POST CREATE ROUTE 22");
            }
        } catch (error) {
            if (error) {
                navigateTo('/post')
                // console.log("POST CREATE ROUTE 3",error);
            }
        }
        // console.log("POST CREATE ROUTE 4",user);
     }
    
    
    })