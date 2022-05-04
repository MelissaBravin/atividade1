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

app.get("/:id", async function(req, res){
  var mostrar = await usuario.findOne({where: {id: req.params.id}});
  res.json(mostrar);
});

app.post("/", async function(req, res){
   var visualizar = await usuario.create(req.body);
  res.json(visualizar);
});

app.put("/:id", async function(req, res){
   var visualizar = await usuario.update(req.body,{where: {id: req.params.id}});
  res.json(visualizar);
});

app.delete("/:id", async function(req, res){
   var visualizar = await usuario.destroy({where: {id: req.params.id}});
  res.json(visualizar);
});

app.listen(3000, function(){
  console.log("Olá Amigos");
});
