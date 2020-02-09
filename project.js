/// Creating the variables
const computerSelect = ["rock", "paper", "scissors"];
let playerSelect;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let topScore = 0;
let roundCount = 0;

/// Function to generate a random choice for the computer (scissors, paper or rock)
function computerPlay() {
  computerSelection = computerSelect[Math.floor(Math.random() * computerSelect.length)];
  return computerSelection;
}
console.log(computerPlay())

/// Function for player to choose scissors, paper or rock



/// Function to update the 'round'
function updateRound() {
        let roundHeading = document.querySelector("#round-count-top");
        
        roundCount++;
        roundHeading.innerHTML = "Round: " + roundCount;
      }

/// Function to update the 'top score'
function updateTopScore() {
        if (playerScore > computerScore) {
                topScore = playerScore
        }
        else {
                topScore = computerScore
        }
}
     

///  Function to play one round of scissor, paper, rock
function playRound(playerSelection, computerSelection) {
        /// Outcomes if player chooses rock
        if(playerSelection == "rock" && computerSelection == "rock") {
                alert("You draw! You both picked rock.");
                updateRound();
                }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
                alert("You win! Rock beats scissors.");
                ++playerScore;
                updateTopScore();
                updateRound();
                }
        else if (playerSelection == "rock" && computerSelection == "paper") {
                alert("You lose! Paper beats rock.");
                ++computerScore;
                updateTopScore();
                updateRound();
        }
    
        /// Outcomes if player chooses scissors
        else if (playerSelection == "scissors" && computerSelection == "scissors") {
                alert("You draw! You both picked scissors.");
                updateRound();
                }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
                alert("You lose! Rock beats scissors");
                ++computerScore;
                updateTopScore();
                updateRound();
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
                alert("You win! Scissors beats paper.");
                ++playerScore;
                updateTopScore();
                updateRound();
        }
    
        /// Outcomes if player chooses paper
        else if (playerSelection == "paper" && computerSelection == "paper") {
                alert("You draw! You both picked paper.");
                updateRound();
                }
        else if (playerSelection == "paper" && computerSelection == "rock") {
                alert("You win! Paper beats rock");
                ++playerScore;
                updateTopScore();
                updateRound();
                }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
                alert("You lose! Scissors beats paper");
                ++computerScore;
                updateTopScore();
                updateRound();
        }
    
        /// Outcome if player chooses a different result
        else {
                alert("Unexpected result");
        }
    }

    /// Function to play 5 rounds