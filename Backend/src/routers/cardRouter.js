const cardController = require('../controllers/cardController')



const router=require('express').Router()





router.route('/add')
.post(cardController.addCart)
router.route('/remove')
.post(cardController.removeCard)
router.route('/get')
.post(cardController.getCart)
// .get(userController.list)

// router.route('/:id')
// .get(userController.read)
// .put(userController.update)
// .delete(userController.delete)


module.exports=router