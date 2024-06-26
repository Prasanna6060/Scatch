import express from 'express';
import { registerUser } from '../controllers/auth.controller.register.js';
import { loginUser, logoutUser } from '../controllers/auth.controller.login.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("user router")
})
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser)

export default router;