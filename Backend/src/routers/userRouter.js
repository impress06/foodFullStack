const userController = require('../controllers/userController')

const router=require('express').Router()





router.route('/')
.post(userController.create)
.get(userController.list)

router.route('/:id')
.get(userController.read)
.put(userController.update)
.delete(userController.delete)


module.exports=router