const { mongoose } = require("../config/dbConnection");

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category:{ type: String, required: true }
    // categoryId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
  },
  {
    collection: "food",
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
