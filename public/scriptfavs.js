let arr2 = [];
document.getElementById("boton3").addEventListener("click", guardar);

function home() {
  location.replace("/");
}

document.getElementById("botonHome").addEventListener("click", home);
function guardar() {
  let nuevaPelicula2 = {
    Title: document.getElementsByTagName("h1")[0].innerText,
    Year: document.getElementsByTagName("h2")[0].innerText,
    Director: document.getElementsByTagName("h3")[0].innerText,
    Actors: document.getElementsByTagName("h4")[0].innerText,
    Awards: document.getElementsByTagName("h5")[0].innerText,
    Genre: document.getElementsByTagName("h6")[0].innerText,
    Runtime: document.getElementsByTagName("h7")[0].innerText,
    Poster: document.getElementById("Poster").src,
  };

  if (JSON.parse(localStorage.getItem("Películas")))
    arr2 = JSON.parse(localStorage.getItem("Películas"));
  else arr2 = [];
  arr2.push(nuevaPelicula2);
  localStorage.setItem("Películas", JSON.stringify(arr2));
  location.replace("/");
}
