const mongoose = require('mongoose');

function connectMongoose(){

mongoose.connect('mongodb://localhost:27017/url-shortner');

const db = mongoose.connection;

db.on('error',(err)=>console.log(err));
db.on('open',()=>console.log('Mongodb connected'));

}

module.exports = {connectMongoose};