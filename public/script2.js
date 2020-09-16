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
