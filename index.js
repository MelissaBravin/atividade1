var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var visualizar = await usuario.findAll();
  res.json(visualizar);
});

app.post("/", async function(req, res){
   var visualizar = await usuario.create(req.body);
  res.send(visualizar);
});

app.listen(3000, function(){
  console.log("Olá Amigos");
});
