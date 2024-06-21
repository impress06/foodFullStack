const sendMail = require("../helper/sendMail");
const userModal = require("../models/userModel");

module.exports = {
  list: async (req, res) => {
    const data= await res.getModelList(userModal)
    res.status(200).send({
        error:false,
        data
    })
  },
  create: async (req, res) => {
    const data = await userModal.create(req.body);

    req.body.isStaff = false;
    req.body.isAdmin = false;
    req.body.isSuperUser = false;

    //TODO:Auto registration

    if (data) {
      sendMail(
        data.email,
        "new registration",
        ` Hi Dear ${data.name}
                your account This;
                email:${data.email}
                password:${req.body.password}
                `
      );
    }

    res.status(201).send({
      error: false,
      message: "success Added",
      data,
    });
  },
  read: async (req, res) => {
  
    customFilter = req.user.isAdmin
    ? { _id: req.params.id }
    : { _id: req.user._id };
    const data= userModal.findOne(customFilter)
    res.status(200).send({
        error:false,
        data
    })
  },
  update: async (req, res) => {
    try {
      let id = req.params.id;
  
      if (!req.user) {
        return res.status(401).send({
          error: true,
          message: "Unauthorized",
        });
      }
  
      if (req.user.isSuperUser) {
        const data = await userModal.updateOne({ _id: id }, req.body);
        return res.status(200).send({
          error: false,
          data,
          updated: await userModal.findOne({ _id: id }),
        });
      }
  
      if (!req.user.isAdmin) {
        delete req.body.isAdmin;
        delete req.body.isStaff;
        id = req.user._id;
      }
  
      if (req.user.isAdmin && req.user._id.toString() == req.params.id) {
        delete req.body.isAdmin;
        delete req.body.isStaff;
      }
  
      const data = await userModal.updateOne({ _id: id }, req.body);
  
      if (data.modifiedCount === 0) {
        return res.status(400).send({
          error: true,
          message: "Update failed",
        });
      }
  
      res.status(200).send({
        error: false,
        data,
        updated: await userModal.findOne({ _id: id }),
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: error.message,
      });
    }
  },
  
  
  delete: async (req, res) => {
    if(!req.user.isAdmin){
        const data= await userModal.deleteOne({_id:req.params.id})
        if(data.deletedCount>0) res.json({error:false,message:"user deleted success"})
         else    res.json({error:true,message:"you can not God remove"})
    }
    else{
        res.json({error:true,message:"Admin cannot Delete"})
    }
  },
};
