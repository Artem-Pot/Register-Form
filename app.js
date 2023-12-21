const express = require("express");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (_, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.login} - ${request.body.password}`);
});
   
app.listen(5500, ()=>console.log("Сервер запущен..."));