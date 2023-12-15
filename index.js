const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "node_bd"
});
    
const sql = `SELECT * FROM users`;
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    const users = results;

    for(let i=0; i < users.length; i++){
      if(users[i].name === 'Артёмка') {
        console.log(`нашёлся Артёмка`);
      }
    }
});
 
connection.end();