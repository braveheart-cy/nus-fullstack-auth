// const data = require("./data");
const database = require("./database")
const express = require("express");

let router = express.Router();

router.get("/user/all", (request, response) => {
  // let users = data.get_all_users();
  // response.status(200).send(users);
  database.connection.query("select * from user", (error, result) => {
    if (error) {
      console.log(error);
      response.status(500).send("some internal error");
    } else {
      response.status(200).send(result);
    }
  });
});

router.get("/user/by-email", (request, response) => {
  if (request.query.email == null || request.query.email.length == 0) {  
    response.status(400).send("Invalid email passed in the parameters");
    return
  }

  // let user = data.get_user_by_user_id(request.query.uid);
  // response.status(200).send(user);
  database.connection.query(`select * from user where email = ${request.query.email}`, (error, result) => {
    if (error) {
      console.log(error);
      response.status(500).send("some internal error");
    } else {
      response.status(200).send(result);
    }
  });
});

router.post("/adduser", (request, response) => {
  console.log("add-user...");
  //require body-parser for post
  // example: server.use(express.json());
  
  let user = request.body;
  if (JSON.stringify(user) === "{}") {
    response.status(400).send("Request's body content is invalid!");
  }
  console.log("user parsed"+user+",");
  database.connection.query(
    `insert into user (firstname, lastname, phone, email) 
    values ('${request.body.firstname}', '${request.body.lastname}',
    '${request.body.phone}', '${request.body.email}')`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some internal error occurred");
      } else {
        response.status(200).send("Successfully added the user");
      }
    }
  );

  console.log("post end");
});

module.exports = { router };