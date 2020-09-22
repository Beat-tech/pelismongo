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

  // let misPelis = JSON.parse(localStorage.getItem("Películas"));

  // for (let i = 0, j = misPelis.length; i < j; i++) {
  //   if (misPelis[i].Title === titulo) {
  //     misPelis.splice(i, 1);
  //   }
  //   localStorage.setItem("Películas", JSON.stringify(misPelis));
  //   location.reload();
  // }
}

function detalles(i) {
  let arr3 = JSON.parse(localStorage.getItem("Películas"));

  location.replace(
    `/film/detalle/${i}?titulo=${arr3[i].Title}&year=${arr3[i].Year}&director=${arr3[i].Director}&genre=${arr3[i].Genre}&awards=${arr3[i].Awards}&runtime=${arr3[i].Runtime}&poster=${arr3[i].Poster}`
  );
}

function editar(i) {
  let arr3 = JSON.parse(localStorage.getItem("Películas"));

  location.replace(
    `/film/edit/${i}?titulo=${arr3[i].Title}&year=${arr3[i].Year}&director=${arr3[i].Director}&genre=${arr3[i].Genre}&awards=${arr3[i].Awards}&runtime=${arr3[i].Runtime}`
  );
}

// function detalle(titulo) {
//   location.replace("/film/" + titulo);
// }
// onclick="detalle('${nuevaPelicula[i].Title}')"

// function renderMovies() {
//   let nuevaPelicula = JSON.parse(localStorage.getItem("Películas"));
//   for (let i = 0; i < nuevaPelicula.length; i++) {
//     let data = `<div class="tarjeta">
//         <p class= "enunciados">Título: ${nuevaPelicula[i].Title} </p>
//         <p class= "enunciados"> Director: ${nuevaPelicula[i].Director} </p>
//         <p class= "enunciados"> Año: ${nuevaPelicula[i].Year} </p>
//         <input type="button" value= "Borrar" class="botonHome" id="botonB${i}" onclick="borrarMovie('${nuevaPelicula[i].Title}')">
//         <input type="button" value= "Editar" class="botonHome" id="botonE${i}" onclick="editar('${i}')" >
//         <input type="button" value= "Detalle" class="botonHome"  id="botonD${i}" onclick="detalles('${i}')">
//         </div>`;

//     document.getElementById("data").innerHTML += data;
//   }
// }
// if (document.getElementById("data") != null) renderMovies();
