const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const Mysql = require('sync-mysql');

const adminRouter = require('./node_files/routes/adminLoginrouter');
const registerRouter = require('./node_files/routes/registerRouter');
const adminDetails = require('./node_files/routes/adminDetailsrouter');

//routes
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'protected'));


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register',registerRouter);
app.use('/loginAdmin', adminRouter);



//server

const port = 3000;
app.listen(process.env.PORT || 3000, function(){
  console.log(`Server running on port ${port}`);	  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
