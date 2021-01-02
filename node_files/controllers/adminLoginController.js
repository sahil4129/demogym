const Mysql = require('sync-mysql');
const conn =require('../dbConnection/connectDb');
const cron = require('node-cron');
const path = require('path');
const catchAsync = require('./../catch/catchAsync');
var result = [];


exports.loginAdminfun = catchAsync (async (req, res) => {
    try { 
        let result1 = conn.query('SELECT * FROM admin');
        result = result1[0];
        if(req.body.username==result.username && req.body.password==result.password && req.body.phone==result.phone && req.body.token==result.token){
                let activeResult = conn.query("SELECT * FROM users where active = '1'");
                let inactiveResult = conn.query("SELECT * FROM users where active = '0'");
                let activewithin7 = conn.query("SELECT * FROM users where active = '1' and joiningDate >= (DATE(NOW()) - INTERVAL 7 DAY)");
                let inactivewithin7 = conn.query("SELECT * FROM users where active = '0' and joiningDate >= (DATE(NOW()) - INTERVAL 7 DAY)");

                res.status(200).render('adminDetails', {activeResult,inactiveResult,activewithin7,inactivewithin7});
        }else{
            res.status(401).json({status: 'login Failed',});
        }
    }catch(err) {
        console.log(err);
    }
});

cron.schedule('*/10 * * * * *', () => {

    console.log("Cron Job Running Starting");
    try {
        let currentActiveResult = conn.query("SELECT * FROM users where active = '1'");
        for(var i=0;i<currentActiveResult.length;i++){
            let currentDate = new Date();
            let joinDate = (currentActiveResult[i]).joiningDate;
            let endDate = (currentActiveResult[i]).endingDate;
            let durInMonth= parseInt((currentActiveResult[i]).duration);
            let joinDateInNormal = new Date(Number(joinDate));
            joinDateInNormal.setMonth(joinDateInNormal.getMonth()+durInMonth);
            try {
                if((currentDate.getTime() > endDate) && currentDate.getTime() > joinDateInNormal.getTime() ){
                    let updateStatusSQL = conn.query("UPDATE users SET active = '0' WHERE id = "+(currentActiveResult[i]).id);
                    console.log(result.affectedRows + " record(s) updated");
                }
            }catch(err) {
                console.log(err);
            }
        }
    }catch(err) {
        console.log(err);
    }
    console.log("Cron Job Running Ending");
});

