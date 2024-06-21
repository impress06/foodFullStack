const foodController = require("../controllers/foodController");
const { uploadFood } = require("../midilwares/uploads");
const router = require("express").Router();

router
  .route("/")
  .post(uploadFood.single("image"), foodController.create)
  .get(foodController.list);

router
  .route("/:id")
  .get(foodController.read)
  .put(uploadFood.single("image"), foodController.update)
  .delete(foodController.delete);

module.exports = router;
