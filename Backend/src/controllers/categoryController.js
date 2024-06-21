const categoryModel = require("../models/categoryModel");



module.exports={

    list:async(req,res)=>{
        
      const data= await  res.getModelList(categoryModel)
      res.status(200).send({
        error:false,
        data,
       

      })
    },
    create:async(req,res)=>{


        const data= await categoryModel.create(req.body)

        res.status(200).send({
            error:false,
            data

        })

    },
    read:async(req,res)=>{
        const id=req.params.id

        const data= await categoryModel.findOne({_id:id})
        res.status(200).send({
            error:false,
            data
        })
    },
    update:async(req,res)=>{
        const id=req.params.id

        const data= await categoryModel.findByIdAndUpdate(id,req.body,{new:true})

        res.status(201).send({
            error:false,
            data

        })


    },

    delete:async(req,res)=>{
        const id=req.params.id

        const data= await categoryModel.findByIdAndDelete(id)
        
        res.status(204).json({error:false,message:"deleted"})

    }

}