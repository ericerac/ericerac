import Post from "../models/post.ts";


export default defineEventHandler(async (event) => {
  
    let data = await readBody(event)
    console.log("DATA PAYLOAD PATCH",data);
    // **************** DATA PAYLOAD ******************//

    let id = data.id
    let opened = data.opened
    let read = data.read
    let time = data.time

    // **************** END DATA PAYLOAD ******************//

    const updatePostField = (async () => {

        let doc;
        let result=""
        doc = await Post.findById(id);

        // console.log("POST OPENED ", doc);

        if (opened === "true") {
             console.log("POST OPENED TRUE");
             result = await doc.updateOne(
                {
                    $inc: { postOpened: +1 },
                    // $push: { postGeoloc: loc },
                });
        } else {
        }
        if (read === "true") {
             console.log("POST READ TRUE");
             result = await doc.updateOne(
                {
                    $inc: { postRead: +1 },
                }
            );
        } else {
        }
        if (result) {
            return {
                message: "succés update"
            }
        } else {
            return {
                message: "Erreur update"
            }
        }
    });

    updatePostField()

})