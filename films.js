const fetch = require("node-fetch");
const bbdd = require("./bbdd");

exports.gethome = async (req, res) => {
  let favoritas = await bbdd.getFilmsDetail();

  res.render("home.pug", {
    hache1: "Pelis favos",
    favorites: favoritas,
  });
};

exports.saveFilm = (req, res) => {
  var peli = req.body;

  //guardar en BBDD
  bbdd.createMovie(peli);
  res.status(200).redirect("/");
  // res.render("home");
  // res.send(req.body);
};

exports.deleteFilm = (req, res) => {
  console.log("borrao");
  var peli = req.body.title;
  bbdd
    .deleteMovie(peli)
    .then((datos) => {
      console.log(datos);
      res.send();
    })
    .catch((e) => console.log(e));
};

exports.getDetail = (req, res) => {
  var peli = req.params.titulo;
  bbdd
    .getMovie(peli)
    .then((datos) => {
      res.render("movie.pug", {
        Title: datos.Title,
        Year: datos.Year,
        Director: datos.Director,
        Actors: datos.Actors,
        Genre: datos.Genre,
        Awards: datos.Awards,
        Runtime: datos.Runtime,
        Poster: datos.Poster,
      });
    })
    .catch((e) => console.log(e));
};

exports.edit = (req, res) => {
  res.render("formulario.pug", {
    Título: req.query.titulo,
    Director: req.query.director,
    Year: req.query.year,
    Actors: req.query.actors,
    Genre: req.query.genre,
    Awards: req.query.awards,
    Runtime: req.query.runtime,
  });
};
exports.getfilms = (req, res) => {
  let titulo = req.params.titulo;
  fetch(`http://www.omdbapi.com/?apikey=fbc7a715&t=${titulo}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      res.render("movie.pug", {
        Title: data.Title,
        Year: data.Year,
        Director: data.Director,
        Poster: data.Poster,
        Actors: data.Actors,
        Genre: data.Genre,
        Awards: data.Awards,
        Runtime: data.Runtime,
      });
      // console.log(response);
      //   console.log("La película es = ", data.title);
      res.end();
    });
};
exports.formulario = (req, res) => {
  res.render("formulario", {});
};

// exports.postFormulario = ()

exports.geterror = (req, res) => {
  res.render("error", {
    mensaje: "Shhh! Unicornio durmiendo...",
    mensaje2: 404,
  });
};
