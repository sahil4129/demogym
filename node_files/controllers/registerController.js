const Mysql = require('sync-mysql');
var db=require('../dbConnection/connectDb');
var result = [];

console.log(result);

exports.registerUserfun = (req, res) => {  
    res.status(200).json({
        status: 'login Sucess',
    });
};