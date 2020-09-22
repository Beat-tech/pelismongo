// Ejercicio API REST:
// API de pelis:
// http://www.omdbapi.com/
// GET dame una pelicula por titulo. Devuelve JSON. Ruta: api/films/:titulo
// Para tus favoritas( fakear BBDD con LocalStorage):
// POST crea una pelicula y guarda. Devuelve un status 200. Ruta: api/films
// DELETE borra una pelicula api/films
// PUT actualiza una peli guardada en LocalStorage api/films/:id
// Si la ruta no existe, se debe devolver 404 Not Found (editado)

const express = require("express");
const films = require(`./films`);
const bodyParser = require("body-parser");
const bbdd = require(`./bbdd`);
const app = express();

const port = 3000;

app.use("/", express.static("public"));
app.use("/formulario", express.static(__dirname + "/public"));
//app.use(/api\/films\/(.*)/, express.static(__dirname + "/public"));
app.use("/film/:titulo", express.static(__dirname + "/public"));
app.use("/film/detalle/:i", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./views"); //Le estás diciendo dónde están las plantillas
app.set("view engine", "pug"); //Le estás diciendo que motor vas a utilizar

app.get("/home", films.gethome);
app.get("/", films.gethome);
app.get("/formulario", films.formulario);
app.get("/film/:titulo", films.getfilms);
app.get("/film/detalle/:titulo", films.getDetail);
app.get("/film/edit/:i", films.edit);

app.get("/pruebas", (req, res) => {
  bbdd
    .getMovie("John")
    .then((datos) => console.log(datos))
    .catch((e) => console.log("ocurrió un error:" + e));
  res.send("Hello World!");
});

app.get("*", films.geterror);
app.post("/submit-form", films.saveFilm);
app.post("/delete", films.deleteFilm);
//crear ruta nueva de post para borrar, el fetch envía
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
