import { play } from "./funciones.js";

//Variables -Selectores
const hithatSelector = document.querySelector("#hithat-selector");

const bomboSelector = document.querySelector("#bombo-selector");
const bomboSelector2 = document.querySelector("#bombo-selector2");

const cajaSelector = document.querySelector("#caja-selector");

const platilloCrashIzq = document.querySelector("#platillo-crash-izq-selector");
const platilloCrashDer = document.querySelector("#platillo-crash-der-selector");

const platilloRideSelector = document.querySelector("#platillo-ride-selector");

const tomSueloSelector = document.querySelector("#tom-suelo-selector");

const btnPlay = document.querySelector("#playBtn");

btnPlay.addEventListener("click", (e) => {
  e.preventDefault();
  const instrucciones = document.querySelector(".instrucciones");
  const containerDrumkit = document.querySelector(".container-drumkit");

  instrucciones.remove();

  const div = document.createElement("div");
  div.classList.add("play");
  div.textContent = "Toca la bateria con un click en sus partes";

  const p = document.createElement("p");
  p.innerHTML = ` 
  La opcion de las teclas esta en proceso mi equipo no trabajo x'D
  (Okay no🙈🙊, no esta en proceso..No tengo mucho tiempo no lo desarrolle, sorry 👉👈)

  <br>
  <br>
  Abajo esta mi info :3
  `;
  div.appendChild(p);
  containerDrumkit.appendChild(div);
});

//Escucha Todos los eventos
eventLisneteners();

//Eventos
function eventLisneteners() {
  //Escucha el veneto click en el hit-hat
  hithatSelector.addEventListener("click", () =>
    play("hit-hat.png", "hit-hat.mp3")
  );

  //Escucha el veneto click en el bombo
  bomboSelector.addEventListener("click", () => play("bombo.png", "bombo.mp3"));

  bomboSelector2.addEventListener("click", () =>
    play("bombo.png", "bombo.mp3")
  );

  cajaSelector.addEventListener("click", () => play("caja.png", "caja.mp3"));

  platilloCrashIzq.addEventListener("click", () =>
    play("platillo-crash-izquierdo.png", "platillo-crash-izquierdo.mp3")
  );

  platilloCrashDer.addEventListener("click", () =>
    play("platillo-crash-derecho.png", "platillo-crash-derecho2.mp3")
  );

  platilloRideSelector.addEventListener("click", () =>
    play("platillo-ride.png", "platillo-ride.mp3")
  );

  tomSueloSelector.addEventListener("click", () =>
    play("tom-suelo.png", "tom-suelo.mp3")
  );
}
