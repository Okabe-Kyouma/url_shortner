const express = require('express');
const Url = require('../models/model');

const router = express.Router();


router.get('/',async (req,res)=>{
    const customId = null;
    const urls = await Url.find();
     res.status(200).render('home',{customId,urls});
})

module.exports = router;