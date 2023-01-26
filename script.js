const RPS = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}