import UI from "./Ui.js";

//Instancia de User interface
const ui = new UI();

//Funciones

export function play(img, soundDrumKit) {
  //Sonar bateria
  playSounds(soundDrumKit);
  //Cambia la img
  ui.changeImage(img);
  //Regresa a la base
  ui.backToBaseImg();
}

function playSounds(sound) {
  let sounds = new Audio(`../sounds/${sound}`);
  sounds.play();
}
