const {getUser} = require('../service/auth');

async function checkUser(req,res,next){

    const uuid = req.cookies.uid;

    if(!uuid)return res.status(100).redirect('/app/login');

    const user = getUser(uuid);

    if(!user)return res.status(100).redirect('/app/login');

    req.user =  user;
    next();
}

module.exports = checkUser;