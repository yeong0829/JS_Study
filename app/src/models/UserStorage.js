"use strict";

class UserStorage {
  static #users = {
    name : ["박수연", "김윤서"],
    idnum: ["2209","2210"],
    email: ["s2026@e-mirim.hs.kr"],
    tel: ["010-7613-0231","010-1234-1234"],
    comment: ["열심히 할게요ㅜㅜ진짜ㅜㅜ","꿈은 없고요 놀고 싶습니다"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(idnum) {
    const users = this.#users;
    const idx = users.id.indexOf(idnum);
    const usersKeys = Object.keys(users); // => [name, email, tel, comment]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static save(userInfo){
  const users = this.#users;
  users.name.push(userInfo.name);
  users.idnum.push(userInfo.idnum);
  users.email.push(userInfo.email);
  users.tel.push(userInfo.tel);
  users.comment.push(userInfo.comment);
  console.log(users);
  }
}


module.exports = UserStorage;
