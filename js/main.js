//Variables -Selectores
const hithatSelector = document.querySelector("#hithat-selector");
const drumkit = document.querySelector("#drumkit");

//Clases

class UI {
  changeImage(img) {
    drumkit.src = `./../img/${img}`;
  }

  backToBaseImg() {
    setTimeout(() => {
      //Cambia la img
      ui.changeImage("base.png");
    }, 300);
  }
}

//Instancia de User interface
const ui = new UI();

//Escucha Todos los eventos
eventLisneteners();

//Eventos
function eventLisneteners() {
  //Escucha el veneto click en el hit-hat
  hithatSelector.addEventListener("click", () =>
    play("hit-hat.png", "hit-hat.mp3")
  );
}

//Funciones

function play(img, soundDrumKit) {
  //Sonar bateria
  playSounds(soundDrumKit);
  console.log("Plsss");
  //Cambia la img
  ui.changeImage(img);
  //Regresa a la base
  ui.backToBaseImg();
}

function playSounds(sound) {
  let sounds = new Audio(`../sounds/${sound}`);
  sounds.play();
}
