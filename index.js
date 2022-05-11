var express = require("express");
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios", async function(req, res){
  var visualizar = await usuario.findAll();
  res.json(visualizar);
});

app.get("/usuarios/:id", async function(req, res){
  var mostrar = await usuario.findOne({where: {id: req.params.id}});
  res.json(mostrar);
});

app.post("/usuarios", async function(req, res){
   var visualizar = await usuario.create(req.body);
  res.json(visualizar);
});

app.put("/usuarios/:id", async function(req, res){
   var visualizar = await usuario.update(req.body,{where: {id: req.params.id}});
  res.json(visualizar);
});

app.delete("/usuarios/:id", async function(req, res){
   var visualizar = await usuario.destroy({where: {id: req.params.id}});
  res.json(visualizar);
});

//empresa

app.get("/empresas", async function(req, res){
  var visualizar = await empresa.findAll();
  res.json(visualizar);
});

app.get("/empresas/:id", async function(req, res){
  var mostrar = await empresa.findOne({where: {id: req.params.id}});
  res.json(mostrar);
});

app.post("/empresas", async function(req, res){
   var visualizar = await empresa.create(req.body);
  res.json(visualizar);
});

app.put("/empresas/:id", async function(req, res){
   var visualizar = await empresa.update(req.body,{where: {id: req.params.id}});
  res.json(visualizar);
});

app.delete("/empresas/:id", async function(req, res){
   var visualizar = await empresa.destroy({where: {id: req.params.id}});
  res.json(visualizar);
});
app.listen(3000, function(){
  console.log("ta x");
});
