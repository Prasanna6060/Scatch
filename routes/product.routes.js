import express from 'express';
import upload from '../config/multer.config.js';
import productModel from '../models/product.model.js';


const router = express.Router();

router.get('/',(req, res)=> {
    

    res.send("hello from product router")
})

router.post('/create',upload.single('image'), async(req, res) => {
    let {name, price, discount,bgcolor,
        panelcolor,
        textcolor } = req.body;

         if(!req.file) {
            return res.status(400).send('No file uploaded');
         };
        res.send({
            message: 'File uploaded successfully!',
            file: req.file
        });
  
    let newImage = new productModel({
        image: req.file.buffer,
        name, price, discount,bgcolor,
        panelcolor,
        textcolor 
    });

    let  savedImage = await newImage.save();
        
});

export default router;