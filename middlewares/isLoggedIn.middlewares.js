import jwt from "jsonwebtoken";
import 'dotenv/config.js';

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
      return res.status(401).redirect('/');
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRECT);
      req.user = decoded; 
      next();
  } catch (error) {
      console.error("JWT Verification Error:", error.message);
      return res.status(400).send("Invalid token.");
  }
}
