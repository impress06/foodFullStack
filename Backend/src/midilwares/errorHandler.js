
module.exports=(err,req,res,next)=>{
    const errorCode=err.errorCode || res.errorCode || 500

    res.status(errorCode).send({
        error:true,
        message:err.message,
        stack:err.stack,
        cause:err.casuse
    })
}