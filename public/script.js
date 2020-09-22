function redireccionar() {
  let peli = document.getElementById("peticion");
  console.log(peli.value);
  location.replace("/film/" + peli.value);
}
if (document.getElementById("boton") != null)
  document.getElementById("boton").addEventListener("click", redireccionar);

function redireccionar2() {
  location.replace("/formulario");
}
if (document.getElementById("boton2") != null)
  document.getElementById("boton2").addEventListener("click", redireccionar2);

function borrarMovie(pelicula) {
  fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title: pelicula }),
  })
    .then((datos) => {
      location.reload();
    })
    .catch((e) => {
      console.log("Ocurrió un error:" + e);
    });
}

function detalles(titulo) {
  let url = `/film/detalle/${titulo}`;
  location.replace(url);
}

function editar(titulo) {
  let url = `/film/edit/${titulo}`;
  location.replace(url);
}
