//Variables
const platillo = document.querySelector(".platillo");
const img = document.querySelector(".img1");
console.log(img.src);

//Eventos
platillo.addEventListener("click", eventoPlatillo1);

//Funciones
function eventoPlatillo1() {
  console.log("Plsss");

  img.src = "./../hit-hat.png";

  setTimeout(() => {
    img.src = "./../base-caja.png";
  }, 200);
}
