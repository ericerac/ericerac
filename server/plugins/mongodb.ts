import mongoose from "mongoose"

export default async ()=>{
    const config = useRuntimeConfig()
   try {
    //    await mongoose.connect(`mongodb+srv://ericerac007:Ti5nWV3fqjrZLLLz@cluster0.qefdtr9.mongodb.net/`)
       await mongoose.connect(`mongodb+srv://${config.dbUserName}:${config.dbPassword}@cluster0.qefdtr9.mongodb.net/`)
console.log("BASE DE DONNÉES CONNECTÉE");

   } catch (error) {
    console.log("ERROR CONNECTION",error);
   }
}