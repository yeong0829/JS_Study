"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id){
    const users = (JSON.parse(data));    
    const idx = users.id.indexOf(idnum);
      const usersKeys = Object.keys(users); // => [name, email, tel, comment]
      const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
    return userInfo;
  }
  static #getUsers(data, isAll, fields){
    const users = JSON.parse(data);
    if(isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll,...fields) {
    return fs.readFile("./src/databases/users.json")
    .then((data) => {
    return this. #getUsers(data, isAll, fields);
  })
  .catch(console.error);
    //const users = this.#users;
  }

  static getUserInfo(idnum) {
    return fs.readFile("./src/databases/users.json")
      .then((data) => {
      return this.#getUserInfo(data, id)
    })
    .catch(console.error);
  }

  static async save(userInfo){
    const users = await this.getUsers(true);
      if(users.name==""){
        alert("이름을 입력하세요");
        return { success :false};
      }
      users.name.push(userInfo.name);
      users.tel.push(userInfo.tel);
      users.idnum.push(userInfo.idnum);
      users.email.push(userInfo.email);
      users.comment.push(userInfo.comment);
      fs.writeFile("./src/databases/users.json", JSON.stringify(users));
      return { success: true};
    }
 }


module.exports = UserStorage;
