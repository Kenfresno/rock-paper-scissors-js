const RPS = ["Rock", "Paper", "Scissors"];
let playerChoice ;
let winCount = 0
const para = document.createElement("p");
const paraTwo = document.createElement("p");
btnContainer = document.querySelector("body");
function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}



function game(e){
    playerChoice = e.target.className;
    computerChoice = getComputerChoice();

    if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Rock") {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        winCount ++; 
        para.textContent = "Player wins with score of: " + winCount;
        btnContainer.appendChild(paraTwo)
        btnContainer.appendChild(para);
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Rock" && computerChoice == "Paper") {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        winCount --;
        para.textContent = "Computer wins with score of: "+ winCount;
        btnContainer.appendChild(paraTwo)
        btnContainer.appendChild(para);
    }
    else {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        para.textContent = "Game Draw! Score sits at: " + winCount;
        btnContainer.appendChild(paraTwo)
        btnContainer.appendChild(para);
    }
}
window.addEventListener("click", game);