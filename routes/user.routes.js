import express from 'express';
import { registerUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("user router")
})
router.post('/register', registerUser)

export default router;