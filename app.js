const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

// app.get('/',(req,res)=>{
//   console.log("redirect");
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, '/')));


app.post('/example', (req, res) => {
    //console.log(req.body);
    if(req.body.username=="admin" && req.body.password=="fxadmin" && req.body.phone=="123321" && req.body.token=="admin"){
      res.send("login Sucess !!");
    }
    else{
      res.send("login Failed");
    }
});


const port = 3000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});