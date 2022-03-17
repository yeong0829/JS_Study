"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.client;
    const {id, psword}= await UserStorage.getUserInfo(client.id);
  }

  async apply(){
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;
    }
    catch(err){
      console.log(err);
    }
  }
}



module.exports = User;
