const routerUser = require("./userRouter");
const routerAuth = require("./authrouter");
const routerCard = require("./cardRouter");
const routerFood = require("./foodrouter");
const routerCategory = require("./categoryrouter");
const routerOrder = require("./orderrouter");

const router = require("express").Router();

router.use("/user", routerUser);
router.use("/auth", routerAuth);
router.use("/card", routerCard);
router.use("/food", routerFood);
router.use("/category", routerCategory);
router.use("/order", routerOrder);

module.exports = router;
