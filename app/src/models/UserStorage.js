"use strict";

const db = require("../config/db");

class UserStorage {

  static getUserInfo(idnum) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE idnum = ?;";
      db.query(query,[id], (err, data)=>{
        if(err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo){
<<<<<<< HEAD
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO USERS(name,tel,idnum,email,comment) VALUES(?,?,?,?,?)";
      db.query(query,
        [userInfo.name, userInfo.tel, userInfo.idnum, userInfo.email,userInfo.comment], 
        (err)=>{
        if(err) reject(`${err}`);
        resolve({success:true});
      });
    });
=======
    const users = await this.getUsers(true);
      users.name.push(userInfo.name);
      users.tel.push(userInfo.tel);
      users.idnum.push(userInfo.idnum);
      users.email.push(userInfo.email);
      users.comment.push(userInfo.comment);
      fs.writeFile("./src/databases/users.json", JSON.stringify(users));
      return { success: true};
>>>>>>> parent of 3ae60fc (..)
    }
 }


module.exports = UserStorage;
