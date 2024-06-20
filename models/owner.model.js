import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
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
  picture: {
    type: String
  }
},);

export default  ownerModel = mongoose.model("User", ownerSchema);

