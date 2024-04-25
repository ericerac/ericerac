import Post from "../models/post.ts";
import fs from "fs";
 import delFileName from "../utils/delFile.js"


export default defineEventHandler( async (event)=>{
    
      const authorization = getHeaders(event)
  //  console.log("AUTH HEADERS",authorization.authorization.split("Bearer")[1]);
   const queries = getQuery(event)
    // console.log("REQ PUT-PAGE",await readBody(event));
  const id = queries.idTo
  const userId = queries.userId
  console.log("USER ID SERVER",userId);
  if (userId != process.env.USER_ID) {
    return {
      message:"Suppression non autorisée !",
      status:"error"

    }
  }
   console.log("ID-->",queries.idTo);
    // let data = await readBody(event)
    //    console.log("USER ID",data.id);
    // ________ TEST PAGE FINDONE -------//
   
    await Post
    .findOne({
      _id: id,
    })
    .then((res)=>{
        //  console.log("RESPONSE FIND FUNCTION",res);
        const filename = res.imageUrl.split('/img/')[1]; // Pour récuprer le nom du fichier
        console.log("FILENAME TO DELETE", filename);
      // 1-trouver l'URL du fichier 2- sectionner l'Url en deux autour du mot /image/ que contient l'Url
      // 3- Retourne un tableau de deux éléments, avec [1] on garde le deuxième qui est le nom
       fs.unlink(`assets/img/${filename}`, () => { // fonction du pakage fs qui supprime le fichier
          // 1º argument Nom du fichier 2º callback qui supprime l'objet de la BDD

        Post.deleteOne({ _id:id })
          .then((res) => {
            console.log("RESPOONSE FOUND",res);
            return { 
              message: 'Post supprimé !'          
          }
        })
          .catch(error => ({ error }));
       });
        if(!res){
         return {
            message:"Post non trouvée",
            status:"error"
         }
        }
            }).catch((err)=>{return err})

    
})