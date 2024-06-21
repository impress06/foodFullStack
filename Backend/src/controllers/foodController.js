const foodModel=require('../models/foodModel')
const fs =require('node:fs')
module.exports={

    list:async(req,res)=>{
        
      const data= await  res.getModelList(foodModel)
      res.status(200).send({
        error:false,
        data

      })
    },
    create:async(req,res)=>{

        const filename= req.file.filename

        req.body.image=filename

        const data= await foodModel.create(req.body)

        res.status(200).send({
            error:false,
            data,
            message:"Food Added successfully"

        })

    },
    read:async(req,res)=>{
        const id=req.params.id

        const data= await foodModel.findOne({_id:id})
        res.status(200).send({
            error:false,
            data
        })
    },
    update:async(req,res)=>{
        const id=req.params.id
        const filename= req.file.filename
        req.body.image=filename

        const data= await foodModel.findByIdAndUpdate(id,req.body,{new:true})

        res.status(201).send({
            error:false,
            data

        })


    },

    delete:async(req,res)=>{
        const id=req.params.id

        const food= await foodModel.findById(id)

        fs.unlink(`uploads/foodimage/${food.image}`, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return res.status(500).json({ error: true, message: "Error deleting file" });
            }
        });

        const data= await foodModel.findByIdAndDelete(id)
        
        res.status(200).json({error:false,message:"deleted successfully"})

    }

}