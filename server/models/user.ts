import {Schema , model} from 'mongoose'

const adminSchema = new Schema({
 
  name:{ type: String, unique: true, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
},
{
  timestamps:true,
  });



export default model("admin", adminSchema);