const user = require('../models/user');


async function handleSignUp(req,res){
 
    return res.render('signup');

}

async function handleSingUpPost(req,res){

     const {full_name,email,password} = req.body;

     if(!full_name || !email || !password)return res.status(400).render('signup');

     try{

     const newUser = new user({
        full_name:full_name,
        email:email,
        password:password,
     })

     await newUser.save();
    


     return res.status(200).redirect('app/login');

    }
    catch(err){
        if(err.errorResponse.code==11000)return res.status(404).redirect('/signup');
    }

}

module.exports = {
    handleSignUp,
    handleSingUpPost
}