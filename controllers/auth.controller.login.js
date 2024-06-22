import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/users.model.js';
import "dotenv/config.js";


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

        // generate token

        const generateToken = (user) => {
            const payload = {
                id: user._id,
                email: user.email
            };

        //  define the secrets
        const secret = process.env.JWT_SECRECT;

        // options
        const option = {
            expiresIn: '1h'
        }

        // generate token
        const token = jwt.sign(payload, secret, option);

        return token;
        }
        const token = generateToken(findUser);
        console.log(token);
        res.status(201).send(token);
    } catch (error) {
        throw(error)
    }
}