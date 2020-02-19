/// Creating the variables
const choices = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundHeading = document.querySelector("#round-count-top");
const computerScoreText = document.querySelector(".computer_score");
const playerScoreText = document.querySelector(".my_score");
const roundSummaryText = document.querySelector("#round");
const computerChoiceText = document.querySelector(".computer_choice");
const roundResultBox = document.querySelector(".round_result_box");
const playerSelectBox = document.querySelector(".player_select_box");
const gameResultBox = document.querySelector(".game_result_box");


/// Creating the functions
function computerPlay() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
};

function updateRound() {
        roundCount++;
        roundHeading.innerHTML = "Round: " + roundCount;
        computerChoiceText.textContent = `The computer choses ${computerSelection}`;
        }

function checkForWinner() {
        if(computerScore >= 5 || playerScore >= 5) {
                gameResultBox.style.display = "block";
                roundResultBox.style.display = "none";
                playerSelectBox.style.display = "none";

                const gameResultText = document.querySelector("#game")
                if (playerScore > computerScore) {
                        gameResultText.textContent = "You win - that silly computer never had a chance";
                } else {
                        gameResultText.textContent = "You lose - that computer ain't bad";
                }
        }
}

function playerWins() {
        ++playerScore;
        playerScoreText.textContent = `Your Score: ${playerScore}`;
        roundSummaryText.textContent = `Round ${roundCount} result: You win!`;
        checkForWinner();
}

function computerWins() {
        ++computerScore;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        roundSummaryText.textContent = `Round ${roundCount} result: You lose!`;
        checkForWinner();
}

function draw() {
        roundSummaryText.textContent = `Round ${roundCount} result: You draw!`;
}

function playRound(playerSelection, computerSelection) {
        /// Outcomes if player chooses rock
        if(playerSelection == "rock" && computerSelection == "rock") {
                updateRound();
                draw();
                }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
                updateRound();
                playerWins();
                }
        else if (playerSelection == "rock" && computerSelection == "paper") {
                updateRound();
                computerWins();
        }

        /// Outcomes if player chooses scissors
        else if (playerSelection == "scissors" && computerSelection == "scissors") {
                updateRound();
                draw();
                }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
                updateRound();
                computerWins();
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
                updateRound();
                playerWins();
        }

        /// Outcomes if player chooses paper
        else if (playerSelection == "paper" && computerSelection == "paper") {
                updateRound();
                draw();
                }
        else if (playerSelection == "paper" && computerSelection == "rock") {
                updateRound();
                playerWins();
                }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
                updateRound();
                computerWins();
        }

        /// Outcome if player chooses a different result
        else {
                alert("Unexpected result");
        }
};

function newGame() {
        gameResultBox.style.display = "none";
        roundResultBox.style.display = "block";
        playerSelectBox.style.display = "block";

        playerScore = 0;
        computerScore = 0;
        roundCount = 0;

        playerScoreText.textContent = `Your Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;

        roundHeading.innerHTML = "Round: 1";
        roundSummaryText.textContent = "";
        computerChoiceText.textContent = "";
}

/// Event listener for player to choose scissors, paper or rock
const buttons = document.querySelectorAll(".player_selection");
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
  });
});

/// Event listener for player to restart game
const newGameButton = document.querySelector(".button_new_game");
newGameButton.addEventListener('click', newGame);