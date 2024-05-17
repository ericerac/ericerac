import Post from "../models/post.ts";
import fs from "fs";
import delFileName from "../utils/delFile.js"


export default defineEventHandler(async (event) => {

  const authorization = getHeaders(event)

  const queries = getQuery(event)

  const id = queries.idTo
  const userId = queries.userId

  

  if (userId != process.env.USER_ID) {
    return {
      message: "Suppression non autorisée !",
      status: "error",
    }
  } else {

    // ________ TEST PAGE FINDONE -------//

    await Post
      .findOne({
        _id: id,
      })
      .then((res) => {
        //  console.log("RESPONSE FIND FUNCTION",res);

        const filename = res.imageUrl.split('/img/')[1]; // Pour récuprer le nom du fichier à éffacer
        console.log("FILENAME TO DELETE", filename);
        // 1-trouver l'URL du fichier 2- sectionner l'Url en deux autour du mot /image/ que contient l'Url
        // 3- Retourne un tableau de deux éléments, avec [1] on garde le deuxième qui est le nom

        const deletFilePost = fs.unlink(`assets/img/${filename}`, (err) => {  // 1º argument Nom du fichier 2º callback qui supprime l'objet de la BDD
          if (err) {
            console.log("ERREUR IMAGE", err);
            return {
              message: "erreur lors de l'éffacement de l'image",
              status: "error"
            }
          } else {
            delPost()
          }
          // console.log("DELETE FILE RES", res, "ERROR", err);
        }); // end fs unlink
       
      }).catch((err) => { return err })

    } // fin else

    let message = {
      message: "",
      status: "success",
    }

    const delPost = Post.deleteOne({ _id: id })
 
    return delPost
})