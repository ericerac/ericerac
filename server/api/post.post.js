import Post from "../models/post.ts";
 import sharp from 'sharp ';
import fs from "fs"
import multer from "multer"
import  jwt from 'jsonwebtoken';

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {


    let authorization = getHeaders(event)
   
    let token = authorization.authorization.split("Bearer")[1]

    
    const queries = getQuery(event)
    // console.log("REQ PUT-PAGE",await readBody(event));
    
    const userId = queries.userId
    console.log("API POST SERVER id",userId);

if (userId != process.env.USER_ID) {
 return {
   message:"Création non autorisée !",
   status:"error"

 }
}

  const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
  };
  // -------------------EXTRACT FILE FROM FORMDATA---------------------------//
  

  const formData = await readMultipartFormData(event)


  let file = "";
    // console.log("FORM_DATA", formData);
  file = formData.find(x => x.name == "file");

  // ------------- DEFINE PATH WHERE IS THE FILE IS STORED---------------------------------//

  const pathImg = "_nuxt/assets/img/"
  let NameFile = ""
  let pathToWrite=""
  // ------------- END PATH WHERE IS THE FILE IS STORED---------------------------------//
  
if (file) {
  
  // +++ FILE NAME CREATION +++//
  let fileName = file.filename.split(" ").join("_");
  fileName = fileName.split(".")[0];
  const extension = MIME_TYPES[file.type];
  fileName = (fileName + Date.now() + "." + extension)
  
  // +++ END FILE NAME CREATION +++//
  // ------------- CREATE PATH WHERE IS THE FILE IS STORED---------------------------------//
   NameFile = '_nuxt/assets/img/'+fileName
   pathToWrite = './assets/img/'+fileName

  // ------------- END PATH WHERE IS THE FILE IS STORED---------------------------------//
}
  const expect = formData.filter(x => x.name != "file")
  const expectFile = expect.filter(x => x.name != "fileName")
  // ------------------- END EXTRACT FILE FROM FORMDATA---------------------------//

  // --------++++++++ MULTER CONFIG +++++++++-----------//
// const storageImage = multer.memoryStorage()
// const upload = multer({storage:storageImage})
  
  // -------- ++++++++ END MULTER CONFIG- +++++++++----------//

  // -------- ++++++++  SHARP RESIZER FILE- +++++++++----------//

  // let resizedPhoto
  //   await sharp(file.data)
  //     .resize({ width: 100, height: 100, fit: 'fill' })
  //     .toFile("small")
  //     .toBuffer()
  //     .then((data) => {
  //       console.log("RESIZER");
  //       resizedPhoto = data
  //     })
  //     .catch((err) => {})

  // -------- ++++++++ END FSHARP RESIZER FILE- +++++++++----------//

  // ------------- CONVERT FORM DATA TO OBJECT---------------------------------//

  let values = []
  let obj = []
  for (let property of expectFile) {
    obj.push(`${property.name}`)
    values.push(`${property.data}`)
  }
  const obj1 = { ...obj }
  const values1 = { ...values }

  const obj1Keys = Object.keys(obj1);
  const obj1Value = Object.values(obj1);
  const Values1Keys = Object.keys(values1);
  const Values1Value = Object.values(values1);

  let obj2 = {};
  let test = (() => {
    obj1Value.forEach((k, i) => { obj2[k] = Values1Value[i] })
  })
  test()
  

  // -------------- END CONVERT FORM DATA TO OBJECT--------------------------------//

  let pageData = "";
  const page = async function () {
    if (!file) {
      // console.log(" NOT FILE SAVE FUNCTION ");
      pageData = await Post({
        ...obj2,
      }).save();
    } else {
      fs.writeFile(pathToWrite, file.data, function (err, file) {  
         if (err) {
         
          throw err
          return
        };
         console.log('Image enregistrée !');});

      pageData = await new Post({
        ...obj2,
        imageUrl: NameFile
      }).save().then((res) => {
        if (res) {
          console.log("SUCCES UPLoaD");
          pageData = res
        }
      });
    }
    return pageData
  }
  return {
    data: page(),
    message: pageData
  }
})

