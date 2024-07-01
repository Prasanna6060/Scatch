import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import dbConnection from "./config/db.config.js"; 
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";
import ownerRouter from './routes/owner.routes.js';
import productRouter from './routes/product.routes.js';
import indexRoute from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Call cookieParser as a function

// Routes
app.use('/', indexRoute);
app.use('/api/users', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
