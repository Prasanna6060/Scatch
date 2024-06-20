import mongoose from "mongoose";
import 'dotenv/config';

const dbURl = process.env.DB_CONNECTION;

mongoose.connect(dbURl)
 .then(() => {
    console.log("Db connected successfully")
 }).catch((err) => {
    console.log("Error on connecting in db" + err)
 })

 export default mongoose.connection;