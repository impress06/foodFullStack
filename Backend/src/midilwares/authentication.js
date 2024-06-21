const tokenModal = require("../models/tokenModel")


module.exports=async(req,res,next)=>{
   

    const authorization = req.headers.authorization
   

    if(authorization)
        {
            const tokenData=authorization.split(' ')

            if(tokenData[0]==="Token")
                {
                    const user= await tokenModal.findOne({token:tokenData[1]}).populate("userId")
                    
                    if(user)
                        {
                          
                            req.user=user.userId

                            next()


                        }
                        else{
                            
                            next()
                        }

                }
                else{
                    next()
                }

        }
        else{
            next()
        }

}