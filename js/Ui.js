const drumkit = document.querySelector("#drumkit");

class UI {
  changeImage(img) {
    drumkit.src = `./../img/${img}`;
  }

  backToBaseImg() {
    setTimeout(() => {
      //Cambia la img
      this.changeImage("base.png");
    }, 300);
  }
}

export default UI;
