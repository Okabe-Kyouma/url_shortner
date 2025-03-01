const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    short_url:{
        type:String,
        requried:true,
        unique:true,
    },
    redirect_url:{
        type:String,
        required:true,
    },
})

const Url = mongoose.model("Url",UrlSchema);

module.exports = Url;
