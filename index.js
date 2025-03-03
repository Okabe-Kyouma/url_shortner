const express = require('express');
const {connectMongoose} = require('./connection');
const urlRoutes = require('./routes/url');
const homeRoute = require('./routes/home');
const Url = require('./models/model');
const signUpRoute = require('./routes/auth/signup');
const loginRoute = require('./routes/auth/login');
const checkUser = require('./middleware/auth');
const cookieParser = require('cookie-parser');

connectMongoose();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/',signUpRoute);
app.use('/app',loginRoute);
app.use('/home',checkUser,homeRoute);
app.set('view engine','ejs');



// app.get('/',async (req,res)=>{
//     const customId = null;
//     const urls = await Url.find();
//     res.status(200).render('home',{customId,urls});
// })

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server Started At port ${PORT}`);
})