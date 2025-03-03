const express = require('express');
const {handleSignUp,handleSingUpPost} = require('../../controllers/signup');

const router = express.Router();

router.get('/',(req,res)=>{
    res.redirect('/signup');
});

router.get('/signup',handleSignUp);
router.post('/signup',handleSingUpPost);

module.exports = router;