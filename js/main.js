import { play } from "./funciones.js";

import {
  hithatSelector,
  bomboSelector,
  bomboSelector2,
  cajaSelector,
  platilloCrashIzq,
  platilloCrashDer,
  platilloRideSelector,
  tomSueloSelector,
  btnPlay,
} from "./selectores.js";

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

  //Escucha el veneto click en el caja
  cajaSelector.addEventListener("click", () => play("caja.png", "caja.mp3"));

  //Escucha el veneto click en el PlatilloCrashIzq
  platilloCrashIzq.addEventListener("click", () =>
    play("platillo-crash-izquierdo.png", "platillo-crash-izquierdo.mp3")
  );

  //Escucha el veneto click en el PlatilloCrashDereho
  platilloCrashDer.addEventListener("click", () =>
    play("platillo-crash-derecho.png", "platillo-crash-derecho2.mp3")
  );

  //Escucha el veneto click en el PlatilloRide
  platilloRideSelector.addEventListener("click", () =>
    play("platillo-ride.png", "platillo-ride.mp3")
  );

  //Tom suelo
  tomSueloSelector.addEventListener("click", () =>
    play("tom-suelo.png", "tom-suelo.mp3")
  );

  window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 65:
        console.log("a");
        play("hit-hat.png", "hit-hat.mp3");
        break;
      case 83:
        console.log("s");
        play("bombo.png", "bombo.mp3");
        break;
      case 68:
        console.log("d");
        play("caja.png", "caja.mp3");
        break;
      case 70:
        console.log("f");
        play("platillo-crash-izquierdo.png", "platillo-crash-izquierdo.mp3");
        break;
      case 71:
        console.log("g");
        play("platillo-crash-derecho.png", "platillo-crash-derecho2.mp3");
        break;
      case 72:
        console.log("h");
        play("platillo-ride.png", "platillo-ride.mp3");
        break;
      case 74:
        console.log("j");
        play("tom-suelo.png", "tom-suelo.mp3");
        break;

      default:
        break;
    }
  });

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
  <h3>Toca con las teclas 😁🎹🤘🤘</h3> <br>
  a -> Hit-hat, s-> Bombo d->Caja  f-> Platillo Izquierdo  g-> Platillo Derecho <br>
  h->Tom tide j-> tom suelo  
  <br>
  <br>
  Abajo esta mi info ༼ つ ◕_◕ ༽つ 
  `;
    div.appendChild(p);
    containerDrumkit.appendChild(div);
  });
}
