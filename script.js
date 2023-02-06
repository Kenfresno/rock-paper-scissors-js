const RPS = ["Rock", "Paper", "Scissors"];
let playerChoice ;
let winCount = 0
function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}

function myFunction(e){
    playerChoice = "";
    console.log(e.target.className);
    playerChoice = e.target.className;
    console.log("player chose: " + playerChoice);
}


function game(){
    
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
window.addEventListener("click", myFunction)