const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});