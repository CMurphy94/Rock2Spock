/**
 * Instructios on how to play the game code from W3Schools, directly credited in ReadMe
 */
// Get the modal
/* var modal = document.getElementById("myModal");

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
} */

/**
 * Game set up
 */


function userPick(input) {
  let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

  let compPick = Math.random();
  
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

  switch(compareAnswers[compPick][userPick]) {

  }

}

function runGame() {
  
}



const compareAnswers = {
  Rock: {
    Rock: "draw",
    Paper: "win",
    Scissors: "lose",
    Lizard: "lose",
    Spock: "win"
  },
  Paper: {
    Rock: "lose",
    Paper: "draw",
    Scissors: "win",
    Lizard: "win",
    Spock: "lose"
  },
  Scissors: {
    Rock: "win",
    Paper: "lose",
    Scissors: "draw",
    Lizard: "lose",
    Spock: "win"
  },
  Lizard: {
    Rock: "win",
    Paper: "lose",
    Scissors: "win",
    Lizard: "draw",
    Spock: "lose"
  },
  Spock: {
    Rock: "lose",
    Paper: "win",
    Scissors: "lose",
    Lizard: "win",
    Spock: "draw"
  },
}


function incrementScore() {

}


function loseLife() {

}


function newGame() {

}