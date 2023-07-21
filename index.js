var express=require("express");
var path=require("path");
var usuariosrutas=require("./rutas/usuarios");
var session=require("express-session");
require("dotenv").config();

var app=express();
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("/web", express.static(path.join(__dirname, "web")));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:process.env.SECRETO_SESION, resave:true, saveUninitialized:true
}));

app.get('/', (req, res) => {
    res.render('index.js');
  });
  
  app.get('/menu', (req, res) => {
    res.render('menu.ejs');
  });
  
  app.get('/visitas', (req, res) => {
    res.sendFile(__dirname + '/visitas.ejs');
  });
  
  app.get('/recomendaciones', (req, res) => {
    res.sendFile(__dirname + '/recomendaciones.ejs');
  });

  

app.use("/",usuariosrutas);

var port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("servidor en http://localhost:"+port);
});