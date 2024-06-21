import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/users.model.js';

export const loginUser =  async(req, res) => {
    const {email, password } = req.body;
    console.log(email, password);
    
    const findUser = await userModel.findOne({ email: email});
    if(!findUser) {
        return res.status(401).send("User doesnot exist proceed to login");
    }
    try {
        const isMatched = await findUser.compare(password);
        if(!isMatched) {
            return res.status(401).send("Invalid password or email");
        }

    } catch (error) {
        
    }
}