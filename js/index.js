const mysql    = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mirim',
  database : 'newMember_db'
});

connection.connect();

connection.query('SELECT * from newMember_db.users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();