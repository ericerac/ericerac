import Citation from "../models/cita.ts"

export default defineEventHandler(async (event) => {


    let params =  getQuery(event)
    let field = ""
    // console.log("PARAMS API GET PHRASE",params.field);

    if (params.field = 'undefined') {
        console.log("PARAMS UNDEFINED");
        field = "['auteur','citation','theme']"
        // console.log("FIELD NEW VALUE",field);
    }
    const data = await Citation
    .find({
      name : 'citation',
     })
    //  .select(field) // select a specific field
    .then((phraseData) => {
      //   res.status(200).json(page.reverse());
        console.log("RESPONSE GET BACK 1----->", phraseData);
      return phraseData
    })
    .catch((error) =>{
      return{
        message: "error",
      }
    });

    return data

})