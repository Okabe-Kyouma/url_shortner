const user = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth');

async function handleLogin(req,res){

    res.render('login');
  

}

async function handleLoginPost(req,res){

    if(!req.body)return res.status(500).redirect('/signup');

    const {email,password} = req.body;

    if(!email || !password)return res.status(500).redirect('/signup');

    const foundUser = await user.findOne({email:email});

    console.log(`found the fuckinn loser:: ${foundUser}`);

    if(!foundUser)return res.status(400).redirect('/signup');

    req.user = foundUser;

    const sessionId = uuidv4();

    setUser(sessionId,foundUser);
    res.cookie("uid",sessionId);

    return res.redirect('/home');

}

module.exports = {handleLogin,handleLoginPost};