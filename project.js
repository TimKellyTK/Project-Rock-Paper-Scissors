<script>
/// Creating the variables
const choices = ["rock", "paper", "scissors"];
let playerSelection = "paper";
let computerSelection;

/// Random choice for the computer (scissor, paper or rock)
function computerPlay() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}
console.log(computerPlay())

/// Convert playerSelection to lowercase (requested by The Odin Project)
function playerPlay(playerSelection) {
    selectionLower = playerSelection.toLowerCase();
    if (selectionLower = "rock") {
        playerSelection = "rock";
    }
    else if (selectionLower = "paper") {
        playerSelection = "paper"
    }
    else {
        playerSelection = "scissors"
    }
    return playerSelection;
}

console.log(playerSelection)

/// Play one round of scissor, paper, rock
function playRound(playerSelection, computerSelection) {
    /// Outcomes for player chooses rock
    if(playerSelection == "rock" && computerSelection == "rock") {
            alert("You draw! You both picked rock.");
            }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("You win! Rock beats scissors.");
            }
    else if (playerSelection == "rock" && computerSelection == "paper") {
            alert("You lose! Paper beats rock.");
    }

    /// Outcomes for player chooses scissors
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
            alert("You draw! You both picked scissors.");
            }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
            alert("You lose! Rock beats scissors")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("You win! Scissors beats paper.");
    }

    /// Outcomes for player chooses paper
    else if (playerSelection == "paper" && computerSelection == "paper") {
            alert("You draw! You both picked paper.");
            }
    else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("You win! Paper beats rock");
            }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
            alert("You lose! Scissors beats paper")
    }

    /// Outcome if player chooses a different result
    else {
            alert("Unexpected result");
    }
}

console.log(playRound(playerSelection, computerSelection))

</script>