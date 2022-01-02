const mongoose=require("mongoose")

const productschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    
    state:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
});

const product = new mongoose.model("product",productschema)
module.exports=product;