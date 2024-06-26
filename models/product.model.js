import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: Buffer,
    discount: {
        type: Number,
    },
    price: {
        type: Number
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

export default mongoose.model("Product", productSchema); 