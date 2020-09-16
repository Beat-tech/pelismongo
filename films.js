const fetch = require("node-fetch");
exports.gethome = (req, res) => {
  res.render("home.pug", { hache1: "Pelis favos" });
}; // Se muestra la plantilla hello.pug

exports.getDetail = (req, res) => {
  // console.log(req);
  res.render("movie.pug", {
    Title: req.query.titulo,
    Year: req.query.year,
    Director: req.query.director,
    Actors: req.query.actors,
    Genre: req.query.genre,
    Awards: req.query.awards,
    Runtime: req.query.runtime,
    Poster: req.query.poster,
  });
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
