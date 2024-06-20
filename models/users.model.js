import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Array,
    default: [],
  },
  contact: {
    type: Number,
  },
  picture: {
    type: String
  }
},);

const userModel = mongoose.model("User", userSchema);

export default userModel;
