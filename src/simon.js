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