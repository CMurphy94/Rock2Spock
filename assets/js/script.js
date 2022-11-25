/**
 * Instructios on how to play the game code from W3Schools, directly credited in ReadMe
 */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("instBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Game set up
 */

let userPick = {

}


let compPick = {
  Math.random();
}
if (compPick < 0.2) {
  compChoice = "Rock";
} else if (compPick < 0.4) {
  compChoice = "Paper";
} else if (compPick < 0.6) {
  compChoice = "Scissors";
} else if (compPick < 0.8) {
  compChoice = "Lizard";
} else {
  compChoice = "Spock";
}


let gameRules = {

}


function runGame() {

}


function compareAnswers() {

}


function incrementScore() {

}


function loseLife() {

}


function newGame() {

}