import {Schema , model} from 'mongoose'

const CitationShema = new Schema({

    name:{type: String, unique: false, required: false,default:"citation"},
    theme:{type: String, unique: false, required: false,default:"all"},
    auteur:{type: String, unique: false, required: false, default:"inconnu"},
    citation:{type: String, unique: false, required: false},
},
{
  timestamps:true,

})

export default model("Citation", CitationShema);