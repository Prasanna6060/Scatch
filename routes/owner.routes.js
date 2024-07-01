import express from 'express';

const router = express.Router();

router.get('/',(req, res)=> {
    res.send("hello from owner router")
})

router.get('/admin', (req, res) => {
    const success = req.query.success || '';
res.render('createproducts', {success});
})


export default router;