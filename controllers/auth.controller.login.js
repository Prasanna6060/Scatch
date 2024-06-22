import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/users.model.js';
import "dotenv/config.js";
import { generateToken } from '../utils/generateToken.js';


export const loginUser =  async(req, res) => {
    const {email, password } = req.body;
    // console.log(email, password);
    console.log(process.env.JWT_SECRECT)
    
    
    try {
        const findUser = await userModel.findOne({ email: email});
        if(!findUser) {
            return res.status(401).send("User doesnot exist proceed to login");
        }

        const isMatched = await bcrypt.compare(password, findUser.password);
        if(!isMatched) {
            return res.status(401).send("Invalid password or email");
        }

       
        const token = generateToken(findUser);
        console.log(token);
        res.status(201).send(token);
    } catch (error) {
        throw(error)
    }
}