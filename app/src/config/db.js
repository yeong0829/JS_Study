const  mysql = require("mysql");

const db = mysql.createConnection({
    host:"jsstudy.c5drxfrqhy4y.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password:"jsstudy13",
    database:"apply",
});
db.connect();

module.exports = db;