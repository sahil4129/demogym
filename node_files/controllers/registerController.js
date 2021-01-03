const Mysql = require('sync-mysql');
var db=require('../dbConnection/connectDb');
var result = [];

console.log(result);

exports.registerUserfun = (req, res) => {  
    let name,age,gender,height,weight,phone,address,purposeJoin,timings,durationOfPkg,verifyPay;
    if(req.body.name){
        name= req.body.name;
    }if(req.body.age){
        age= req.body.age;
    }if(req.body.gender){
        gender= req.body.gender;
    }if(req.body.height){
        height= req.body.height;
    }if(req.body.weight){
        weight= req.body.weight;
    }if(req.body.phone){
        phone= req.body.phone;
    }if(req.body.address){
        address= req.body.address;
    }if(req.body.purposeJoin){
        purposeJoin= req.body.purposeJoin;
    }if(req.body.timings){
        timings= req.body.timings;
    }if(req.body.durationOfPkg){
        durationOfPkg= req.body.durationOfPkg;
    }if(req.body.verifyPay){
        verifyPay= req.body.verifyPay;
    }
    
    res.status(200).json({
        status: 'login Sucess',
    });
};