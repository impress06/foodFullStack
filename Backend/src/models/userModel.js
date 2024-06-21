const { mongoose } = require("../config/dbConnection");
const passwordEncrypt = require("../helper/passwordEncrypt");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique:true,
      validate: {
        validator: function (email) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: (email) => ` ${email.value} is not a valid email adress`,
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },
    address: {
      type: Object,
      default: {},
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isSuperUser: {
      type: Boolean,
      default:false,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    cartData: {
      type: Object,
      default: {},
    },
    phone:String
  },
  {
    collection: "user",
    timestamps: true,
    minimize: false,
  }
);

module.exports = mongoose.model("User", userSchema);
