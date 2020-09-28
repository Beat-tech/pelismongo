let arr = [];
document.getElementById("submit").onclick = () => {
  localStorage.getItem("Películas")
    ? (arr = JSON.parse(localStorage.getItem("Películas")))
    : (arr = []);

  let nuevaPelicula = {
    Title: document.getElementById("title").value,
    Director: document.getElementById("director").value,
    Year: document.getElementById("year").value,
  };

  arr.push(nuevaPelicula);

  localStorage.setItem("Películas", JSON.stringify(arr));
};

function home() {
  location.replace("/");
}
document.getElementById("imgcamera").addEventListener("click", home);

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
