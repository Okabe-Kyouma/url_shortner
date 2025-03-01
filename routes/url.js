const express = require('express');
const {handleUrlShorternerGet,handleRedirect} = require('../controllers/url');

const router = express.Router();

router.post('/',handleUrlShorternerGet);
router.get('/:id?',handleRedirect);



module.exports = router;