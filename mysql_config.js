const config = {
  host: 'kloverde-1.cytlrdvhi9ve.us-east-1.rds.amazonaws.com',
  user: 'web_user',
  password: 'Y%Ur?Tf!oPkRx]9-^p:ps?D+1J7D:7',
  database: 'resume'
}

const mysql = require('mysql');
const pool= mysql.createPool(
config
);
module.exports = pool;

// connection.connect((err) => {
//   if(err){
//     connectionsole.log('Error connecting to Db');
//     return;
//   }
//   connectionsole.log('Connection established');
// });
//
// connection.end((err) => {
//   //terminate gracefully
// });
