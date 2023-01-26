const RPS = ["Rock", "Paper", "Scissors"];
const playerChoice = "Rock"
let winCount = 0
function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}
function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        console.log("player choice: " + playerChoice);
        console.log("computer choice: " + computerChoice);
        return "Draw";
    }
    else if (computerChoice === "Paper") {
        console.log("player choice: " + playerChoice);
        console.log("computer choice: " + computerChoice);
        winCount--;
       // console.log(winCount)
        return "Computer wins the round!";
        
    }
    else {
        console.log("player choice: " + playerChoice);
        console.log("computer choice: " + computerChoice);
        winCount++;
       // console.log(winCount)
        return "Player wins the round!";

    }
}
function game(){
    
    for (let i = 0; i < 5; i++){
        playRound(playerChoice);
        }
    console.log("Finished 5 games.")
    if (winCount > 0) {
        console.log("Player wins with score of: " + winCount);
    }
    else if (winCount < 0) {
        console.log("Computer wins with score of: " + winCount);
    }
    else {
        console.log("Game Draw!");
    }
}
