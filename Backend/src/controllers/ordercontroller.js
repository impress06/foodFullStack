const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");


module.exports={

    listOrderAdmin:async(req,res)=>{
        
      const data= await  res.getModelList(orderModel)
      res.status(200).send({
        error:false,
        data,
        detail:await res.getModelListDetail(orderModel)

      })
    },
    listOrderUser:async(req,res)=>{
        const id=req.user._id

        const data= await foodModel.find({_id:id})
        res.status(200).send({
            error:false,
            data
        })
    },

    create:async(req,res)=>{

       id=req.user._id

        const data= await foodModel.create(req.body)
        await userModel.findOneAndUpdate({_id:id},{carTData:{}})

        //Todo:IYIZICO PAYMENT SYSTEM

        res.status(200).send({
            error:false,
            data

        })

    },
   
    updateStatus:async(req,res)=>{
        

        const data=  await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });

        res.status(201).send({
            error:false,
            data

        })


    },

    delete:async(req,res)=>{
        const id=req.params.id

        

        const data= await orderModel.findByIdAndDelete(id)
        
        res.status(200).json({error:false,message:"deleted"})

    },
     verifyOrder : async (req, res) => {
        const { orderId, success } = req.body;
        
            if (success === "true") {
                await orderModel.findByIdAndUpdate(orderId, { payment: true });
                res.json({ success: true, message: "Paid" })
            }
            else {
                await orderModel.findByIdAndDelete(orderId)
                res.json({ success: false, message: "Not Paid" })
            }
        
        }

}