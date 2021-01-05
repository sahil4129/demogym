const Mysql = require('sync-mysql');
var db=require('../dbConnection/connectDb');
const conn =require('../dbConnection/connectDb');
var result = [];

console.log(result);

exports.registerUserfun = (req, res) => {  
    try {
        let name,age,gender,height,weight,phone,address,purposeJoin,timings,durationOfPkg,verifyPay;
        let activeOrNot = 0;
        if(req.body.name){
            name= req.body.name;
        }if(req.body.age){
            age= req.body.age;
        }if(req.body.gender){
            gender= req.body.gender;
        }if(req.body.height){
            height= parseFloat(req.body.height);
        }if(req.body.weight){
            weight= parseFloat(req.body.weight);
        }if(req.body.phone){
            phone= req.body.phone;
        }if(req.body.address){
            address= req.body.address;
        }if(req.body.purposeJoin){
            purposeJoin= req.body.purposeJoin;
        }if(req.body.timings){
            timings= req.body.timings;
        }if(req.body.durationOfPkg){
            durationOfPkg= parseInt(req.body.durationOfPkg);
        }if(req.body.verifyPay){
            verifyPay= req.body.verifyPay;
        }
        
        let joiningDate = new Date();
        let endingDateInNormal = new Date(Number(joiningDate));
        endingDateInNormal.setMonth(endingDateInNormal.getMonth()+durationOfPkg);

        if(verifyPay =='fxadmin123'){
            activeOrNot=1;
        }

        let insertResult = `INSERT INTO users (name, age,gender,height,weight,phoneNumber,address,purposeJoining,duration,verificationCode,active,joiningDate,endingDate) VALUES ('${name}', '${age}','${gender}','${height}','${weight}','${phone}','${address}','${purposeJoin}','${durationOfPkg}','${verifyPay}','${activeOrNot}','${joiningDate.getTime()}','${endingDateInNormal.getTime()}')`;

        conn.query(insertResult);
        
        res.status(200).render('success', {});
    }catch(err) {
        console.log(err);
    }
};