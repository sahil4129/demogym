
const Mysql = require('sync-mysql');

const connection = new Mysql({ 
  host: 'remotemysql.com',
  user: 'SzA7EBwb4f',
  password: 'b1NryJX0AQ',
  database: 'SzA7EBwb4f',
});
  

module.exports = connection;

