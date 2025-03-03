const {handleLogin,handleLoginPost} = require('../../controllers/login');

const express = require('express');

const router = express.Router();

router.get('/login',handleLogin);
router.post('/login',handleLoginPost);



module.exports = router;