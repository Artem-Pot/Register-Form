const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root"
});
 
// connection.query("CREATE DATABASE node_bd",
//   function(err, results) {
//     if(err) console.log(err);
//     else console.log("База данных создана");
// });

// const sql = `CREATE TABLE if not exists users(
//     id int primary key auto_increment,
//     surname varchar(255) not null,
//     name varchar(255) not null,
//     patronymic varchar(255) not null,
//     email varchar(255) not null,
//     telephone int not null,
//     country varchar(255) not null,
//     city varchar(255) not null,
//     date int not null,
//     gender varchar(255) not null,
//     comment varchar(255) not null,
//     login varchar(255) not null,
//     password varchar(255) not null)
//   )`;
   
  const sql = `CREATE TABLE if not exists users(
        id int primary key auto_increment,
        surname varchar(255) not null
  )`;


  connection.query(sql, function(err, results) {
      if(err) console.log(err);
      else console.log("Таблица создана");
  });
  connection.end();


//   DROP TABLE users // удаление таблицы