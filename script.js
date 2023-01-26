const RPS = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}
function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        //console.log("player choice: " + playerChoice);
        //console.log("computer choice: " + computerChoice);
        return "Draw";
    }
    else if (computerChoice === "Paper") {
        //console.log("player choice: " + playerChoice);
        //console.log("computer choice: " + computerChoice);
        return "Computer wins the round!";
    }
    else {
        //console.log("player choice: " + playerChoice);
        //console.log("computer choice: " + computerChoice);
        return "Player wins the round!";
    }
}
