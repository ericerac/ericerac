import Post from "../models/post"


export default defineEventHandler(async (event) => {
  let post = getQuery(event)
  //  console.log("PAGE:GET:API",post);

if (post.id) {
  // console.log("POST ID SERVER",post.id);
  const data = await Post
    .find({
      _id: post.id,
      
    }) //.select(field) // select a specific field
    .then((postData) => {
     
      //  console.log("RESPONSE GET BACK 1----->", postData);
      return postData
    })
    .catch((error) =>
      console.log("ERREUR",error)
    );
    return data
} else if(post.field){
  let field = post.field
  const data = await Post
    .find({
      name: post.name,
       lang: post.lang,
    }).select(field) // select a specific field
    .then((pageData) => {
     
      // console.log("RESPONSE GET BACK 1----->", pageData);
      return pageData
    })
    .catch((error) =>{
      return{
        message: "error",
      }
    });
    return data
  
}else{
  // console.log("REQ GET-PAGE NAME", post.name);
  // console.log("REQ GET-PAGE LANG", post.lang);

  const data = await Post
    .find({
      name: post.name,
       lang: post.lang,
    }) //.select(field) // select a specific field
    .then((pageData) => {
      //   res.status(200).json(page.reverse());
      // console.log("RESPONSE GET BACK 1----->", pageData);
      return pageData
    })
    .catch((error) =>{
      return{
        message: "error",
      }
    });
    return data
  }
})