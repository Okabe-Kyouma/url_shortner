const Url = require('../models/model');
const { nanoid } = require("nanoid");

async function handleRedirect(req,res){

    const id = req.query.id || req.params.id;

    if(!id){
        return res.status(400).json({error:"Please enter id"});
    }

    try{

    const getUrl = await Url.findOne({short_url:id});
    console.log(getUrl);

    res.status(200).redirect(getUrl.redirect_url);

    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"});
    }

}

async function handleUrlShorternerGet(req,res){

    const {url} = req.body;


    if(!req.body || !url){
     return res.status(400).json({error:"Please enter a url"});
    }

    try{

    const customId = nanoid(8);


    const newItem = new Url({
        short_url:customId,
        redirect_url:url,
     });

    await newItem.save();

    const urls = await Url.find();

    //res.status(200).json({customid: `Your customId ${customId}`});
    res.status(200).render('home',{customId,urls});

    }
    catch(err){
        res.staus(500).json({error:"Internal Server Error"});
    }

}

module.exports = {handleUrlShorternerGet,handleRedirect};