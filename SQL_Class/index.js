const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const app = express();
const port = 8080;
// for using override;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "7890=()+@Ra",
  });
const { faker } = require("@faker-js/faker");
let getRandomUser = ()=> {
    let value = [
       faker.string.uuid(),
       faker.internet.username(), // before version 9.1.0, use userName()
       faker.internet.email(),
       faker.internet.password(),
    ];
    return value;
  };
  app.get("/",(req, res)=>{
    let q = `select count(*)from User`;
    try{
        connection.query(q,(err, result)=>{
            if(err) throw err;
            let count = result[0]["count(*)"]; // ["count(*)"] It is the key used to display the no rather than object form
            console.log(count); 
    res.render("home.ejs", {count});
          });
      }
      catch(err){
        console.log(err);
        res.send("some error occurred");
      }
      
  });
  // Show Routes
  app.get("/user", (req, res)=>{
    let q = `select * from user`;
    try{
      connection.query(q,(err, result)=>{
          if(err) throw err;
          // console.log(result); 
  res.render("showUsers.ejs" , {result});
        });
    }
    catch(err){
      console.log(err);
      res.send("some error occurred");
    }
  });
  // Editing the route by id
  app.get("/user/:id/edit",(req, res)=>{
    let {id} = req.params;
    let q = `select * from user where id = '${id}'`;
    console.log(id);
    try{
      connection.query(q,(err, result)=>{
          if(err) throw err;
          let user = result[0];
          console.log(user); 
  res.render("edit.ejs" , {user});
        });
    }
    catch(err){
      console.log(err);
      res.send("some error occurred");
    }
  })
  // Update route
  app.patch("/user/:id", (req, res)=>{
    let {id} = req.params;
    let q = `select * from user where id = '${id}'`;
    try{
      connection.query(q, (err , result)=>{
      if(err) throw err;
      let user = result[0];
     let {username: formUser , password: formPass} = req.body;
     console.log(formPass, formUser);
     if(formPass != user.password){
      res.send("Password incorrect babes");
     }
     else{
      let q2 = `update user set username = '${formUser}' where id = '${id}'`;
      connection.query(q2, (err, result)=>{
        if(err) throw err;
        res.send( result);
      })
     }
      });
    }
    catch(err){
      console.log(err);
      res.send("some error in DB");
    }
  });
  app.listen(port, ()=>{
    console.log("Listening your request");
  })

  // connection.end();
//  let q = "insert into user (id, username, email, password) Values ?"; // Used to pass the value at the place of ? it will take that value which will entered by you.
//   console.log(getRandomUser());
// let data = [];
// let i = 0;
// while(i<101){
//   i++;
//   // console.log(getRandomUser());
//   data.push(getRandomUser()); // 100 fake data;

// }
  

  //Inserting new data
  // try{
  //   // let q = "show tables"
  //   connection.query(q,[data],(err, result)=>{
  //       if(err) throw err;
  //       console.log(result);
  //       console.log(result.length);
  //     });
  // }
  // catch(err){
  //   console.log(err);
  // }