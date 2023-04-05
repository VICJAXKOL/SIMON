export default function Simon() {
  this.sequenceMade = [];
  this.sequenceUser = [];
  this.levelCounter = 0;
}

//This generates a random number and pushes it to the sequenceMade.
Simon.prototype.nextSequence = function () {
  let randomNumber = Math.floor(Math.random() * 4);
  this.sequenceMade.push(randomNumber);
  this.showSequence(this.sequenceMade[this.sequenceMade.length - 1]);
  this.changeLevel();
  this.sequenceUser = [];
};

//This displays the color  of each option
Simon.prototype.showSequence = function (element) {

  switch (element) {
  case 0:
    $("#green").addClass("dissapear");
    setTimeout(function () {
      $("#green").removeClass("dissapear");
    }, 250);
    break;
  case 1:
    $("#red").addClass("dissapear");
    setTimeout(function () {
      $("#red").removeClass("dissapear");
    }, 250);
    break;
  case 2:
    $("#yellow").addClass("dissapear");
    setTimeout(function () {
      $("#yellow").removeClass("dissapear");
    }, 250);
    break;
  case 3:
    $("#blue").addClass("dissapear");
    setTimeout(function () {
      $("#blue").removeClass("dissapear");
    }, 250);
    break;
  }
};