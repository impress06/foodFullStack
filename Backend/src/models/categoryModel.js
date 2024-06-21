const { mongoose } = require("../config/dbConnection");


const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    }

},{
    collection:"category",
    timestamps:true
})


module.exports=mongoose.model("Category",categorySchema)