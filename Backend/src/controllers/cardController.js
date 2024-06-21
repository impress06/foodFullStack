const userModel = require("../models/userModel")

module.exports={

     addCart : async (req, res) => {
        const id = req.user._id || req.body.id
        const item = req.body.itemId;
        const user = await userModel.findOne({ _id: id });
       
      
        if (!user) {
          return res.json({
            error: true,
            message: "User not found",
          });
        }
      
        // let cartData = user.cartData || {};
        let cartData =  user.cartData || {}
        if (!cartData[item]) {
          cartData[item] = 1;
        } else {
          cartData[item] += 1;
        }
      
       await userModel.findByIdAndUpdate(id,{cartData})
     
        res.json({ success: true, message: "Added To Cart" });
      },
      removeCard : async (req, res) => {
        const id = req.user._id || req.body.id
        const item = req.body.itemId;
        const user = await userModel.findOne({ _id: id });
       
      
        if (!user) {
          return res.json({
            error: true,
            message: "User not found",
          });
        }
      
        
        let cartData =  user.cartData || {}
        if (cartData[item]>0) {
          cartData[item] -= 1;
        }

        const cartValues=Object.values(cartData)
        
               
                const total = cartValues.reduce((accumulator, item) => {
                    return accumulator + item
                  }, 0);
                  console.log(total)
                  if(total==0) cartData = {}
          
      
       await userModel.findByIdAndUpdate(id,{cartData})
      
     
        res.json({ success: true, message: "removed" });
      },
      getCart : async (req, res) => {
        const id = req.user._id || req.body.id
        const item = req.body.itemId;
        const user = await userModel.findOne({ _id: id });
       
      
        if (!user) {
          return res.json({
            error: true,
            message: "User not found",
          });
        }
      
       
        let cartData =  user.cartData || {}

        
      
   
        res.json({ success: true,cartData});
      },
}