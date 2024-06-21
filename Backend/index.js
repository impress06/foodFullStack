const express=require('express')
require('dotenv').config()
const path = require('path');
require('express-async-errors')
const { dBConnection } = require('./src/config/dbConnection')
const app=express()

//Cors
const cors=require('cors')
app.use(cors({
    origin:"http://localhost:5173"
}))

//Accept Json
app.use(express.json())

//Accept FormData
app.use(express.urlencoded({extended:true}))


const PORT=process.env.PORT || 8000
const HOST=process.env.HOST 

//authentication
app.use(require('./src/midilwares/authentication'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', (req, res, next) => {
  console.log('Requested URL:', req.url);
  next();
});


//Server Checking

app.all('/',(req,res)=>{
    res.send({
        error:false,
        message:"welcome today",
        user:req.user
    })
})


//DB CONNECTION
dBConnection()

//Password encrypt
require('./src/helper/passwordEncrypt')

//filter&sort&Search Midilware

app.use(require('./src/midilwares/pageSortFindFilter'))

//Cookie-session
const session=require('cookie-session')
app.use(session({
    keys:process.env.SECRET_KEY
}))

//Routes

app.use(require('./src/routers/'))



//errHandler

app.use(require('./src/midilwares/errorHandler'))


//Listening..

app.listen(PORT,()=>{
    console.log(`Your Server work on http://${HOST}:${PORT} correctly `)
})