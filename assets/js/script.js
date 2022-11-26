/*
 * Instructions on how to play the game code from W3Schools, directly credited in ReadMe
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
 const compareAnswers = {
  Rock: {
    Rock: 'draw',
    Paper: 'win',
    Scissors: 'lose',
    Lizard: 'lose',
    Spock: 'win'
  },
  Paper: {
    Rock: 'lose',
    Paper: 'draw',
    Scissors: 'win',
    Lizard: 'win',
    Spock: 'lose'
  },
  Scissors: {
    Rock: 'win',
    Paper: 'lose',
    Scissors: 'draw',
    Lizard: 'lose',
    Spock: 'win'
  },
  Lizard: {
    Rock: 'win',
    Paper: 'lose',
    Scissors: 'win',
    Lizard: 'draw',
    Spock: 'lose'
  },
  Spock: {
    Rock: 'lose',
    Paper: 'win',
    Scissors: 'lose',
    Lizard: 'win',
    Spock: 'draw'
  }
}

let [score, lives] = [0, 5];

function updateScore(userScore, userLives) {
    document.getElementById('score').innerHTML = userScore;
    document.getElementById('lives').innerHTML = userLives;
}

function userPick(input) {
  const options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  const randomNum = Math.trunc(Math.random() * 5);
  const compChoice = options[randomNum];

  switch(compareAnswers[compChoice][input]) {
    case 'win':
      alert(`You chose ${input}, the computer chose ${compChoice}. Congratulations, you won!`);
      score++;
      break;
    case 'lose':
      alert(`You chose ${input}, the computer chose ${compChoice}. Unfortunately you lose this round, why not try again?`);
      lives--;
      break;
    default:
      alert(`You chose ${input}, the computer chose ${compChoice}. It's a tie! Try again?`)
    }
    updateScore(score, lives);

    if(lives < 1) {
      alert(`Oh no! Looks like you've ran out of lives. Good job on getting a high score of ${score} though. Why not see if you can beat it!`);
      updateScore(0, 5);
    }
}  