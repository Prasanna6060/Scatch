import express from 'express';
import { isLoggedIn } from '../middlewares/isLoggedIn.middlewares.js';
import productModel from '../models/product.model.js'; // Import your product model

const router = express.Router();

router.get('/', (req, res) => {
    const error = ''; 
    res.render('index', { error });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    try {
        const products = await productModel.find(); 
        res.render('shop', { products }); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
