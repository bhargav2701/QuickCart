import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageurl: { type: String, required: true },
    cartitems: { type: Object, default: {} },
  },
  { minimize: false }
);

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
