const { mongoose } = require("../config/dbConnection");



const orderSchema = new mongoose.Schema({
    userId: {type:String,required:true},
    items: { type: Array, required:true},
    amount: { type: Number, required: true},
    address:{type:Object,required:true},
    status: {type:String,default:"Food Processing"},
    date: {type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
},{
    collection:"order",
    timestamps:false
})


module.exports=mongoose.model("Order",orderSchema)