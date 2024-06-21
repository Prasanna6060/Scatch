import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import dbConnection from "./config/db.config.js"; 

import userRouter from "./routes/user.routes.js";
import ownerRouter from './routes/owner.routes.js';
import productRouter from './routes/product.routes.js';

const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/product', productRouter);

app.listen(PORT, () => {
    console.log(`severis is runnning in ${PORT} `)
})