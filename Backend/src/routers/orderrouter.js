const orderController = require("../controllers/ordercontroller");
const router = require("express").Router();

router
  .route("/")
  .post(orderController.create)
  .get(orderController.listOrderUser);

router
  .route("/admin")
  .get(orderController.listOrderAdmin)

  router
  .route("/:id")
  .put(orderController.updateStatus)
  .delete(orderController.delete);

  router
  .route("/verfy")
  .post(orderController.verifyOrder)

module.exports = router;
