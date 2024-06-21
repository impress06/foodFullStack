const mongoose=require('mongoose')


const MONGO_DB_CONNECTION=process.env.MONG0_STRING




const dBConnection = ()=>{

    mongoose.connect(MONGO_DB_CONNECTION).then(()=>{
        console.log('Mongo Db Connetted')
    }).catch(()=>{
        console.log("Mngo Db Connection FAİLED")
    })

}


module.exports={mongoose,dBConnection}