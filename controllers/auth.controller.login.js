import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/users.model.js';
import "dotenv/config.js";
import { generateToken } from '../utils/generateToken.js';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const findUser = await userModel.findOne({ email: email });
        if (!findUser) {
            return res.status(401).send("User does not exist, proceed to register");
        }

        const isMatched = await bcrypt.compare(password, findUser.password);
        if (!isMatched) {
            return res.status(401).send("Invalid password or email");
        }

        const token = generateToken(findUser);
        res.cookie("token", token);
        return res.status(201).redirect('/shop'); // Redirect to '/shop' after setting the cookie
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}


export const logoutUser = (req, res) => {
    res.redirect('/')
}