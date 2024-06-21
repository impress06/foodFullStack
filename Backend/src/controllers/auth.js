const passwordEncrypt = require("../helper/passwordEncrypt");
const tokenModal = require("../models/tokenModel");
const userModal = require("../models/userModel");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await userModal.findOne({ email });

    if (user && user.password === passwordEncrypt(password)) {
      if (user.isActive) {
        req.session.email = user.email;
        req.session.password = user.password;

        if (req.body.rememberMe) {
          req.sessionOptions.maxAge = 1000 * 60 * 24 * 3;
        }

        let tokenData = await tokenModal.findOne({ userId: user._id });

        if (!tokenData) {
          tokenData = await tokenModal.create({
            userId: user._id,
            token: passwordEncrypt(user._id + Date.now()),
          });
        }

        res.status(200).send({
          error: false,
          token: tokenData.token,
          user,
        });
      } else {
        res.status(403).send({
          error: true,
          message: "you are banned please contact admin",
        });
      }
    } else {
      res.status(203).send({
        error: true,
        message: "password or username is wrong",
      });
    }
  },
  logout: async (req, res) => {
    const tokenData = req.headers.authorization;
    console.log(tokenData)
    if (tokenData) {
      const data = await tokenModal.deleteOne({ token: tokenData.split(' ')[1] });
      if (data.deletedCount > 0) {
        res.status(200).json({
          error: false,
          message: "logout succeeded",
        });
      } else {
        res.status(400).json({
          error: true,
          message: "logout failed",
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: "you didn't logout already",
      });
    }
  },
};
