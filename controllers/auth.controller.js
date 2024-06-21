import userModel from '../models/users.model.js'
import bcrypt from 'bcrypt'

export const registerUser = async(req, res) => {
    const {email, fullname, password} = req.body;
    // console.log(email,fullname, password);

    try {
        const existingUser = await userModel.findOne({ email : email});
        console.log(existingUser) 
        if(existingUser) {
            return res.status(409).send("User already exists login into your account"); 
        };
 
        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new userModel({
            fullname,
            email,
            password: hashedPassword
        })
        const saveUser = await newUser.save();
        res.status(201).send("user created successfully" + saveUser)
    } catch (error) {
        res.status(501).send("Internal server issue")
    }

} 