// app.get('/', function (req, res) {
//   res.send('hello world')
// })
// app.listen(3000)

const express = require("express");
const app = express();
   
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (_, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.name} - ${request.body.password}`);
});
   
app.listen(5500, ()=>console.log("Сервер запущен..."));