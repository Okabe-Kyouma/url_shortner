const express = require('express');
const {connectMongoose} = require('./connection');
const urlRoutes = require('./routes/url');

connectMongoose();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/url',urlRoutes);
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    const customId = null;
    res.status(200).render('home',{customId});
})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server Started At port ${PORT}`);
})