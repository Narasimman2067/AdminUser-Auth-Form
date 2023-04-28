import mongoose from "mongoose";


const adminSchema =new mongoose.Schema({
    
    email:{
        type:String,
      require:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true,
        minLength:8
    },
    
   
    

});

export default mongoose.model("Admin",adminSchema)