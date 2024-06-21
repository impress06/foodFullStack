const categoryController = require("../controllers/categoryController");
const router = require("express").Router();

router.route("/").post(categoryController.create).get(categoryController.list);

router
  .route("/:id")
  .get(categoryController.read)
  .put(categoryController.update)
  .delete(categoryController.delete);

module.exports = router;
