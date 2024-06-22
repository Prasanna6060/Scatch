import jwt from "jsonwebtoken";


 // generate token

 export const generateToken = (user) => {
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