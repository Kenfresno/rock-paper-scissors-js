const RPS = ["Rock", "Paper", "Scissors"];
let playerChoice ;
let pWins = 0;
    cWins = 0;
const paraOne = document.createElement("p");
const paraTwo = document.createElement("p");
const paraThree = document.createElement("p");
btnContainer = document.querySelector("body");
function getComputerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}
function removeTransition(e){
    e.target.classList.remove("playing"); 
}

function game(e){
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    e.target.classList.add("playing");

    if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Paper" || 
        playerChoice == "Paper" && computerChoice == "Rock") {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        pWins ++; 
        paraOne.textContent = "Player scores!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(paraOne);
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Rock" && computerChoice == "Paper") {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        cWins ++;
        paraOne.textContent = "Computer scores!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(paraOne);
    }
    else {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        paraOne.textContent = "Game Draw!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(paraOne);
    }
    if (pWins >= 5) {
        paraOne.textContent = "Player has won the game!";
        btnContainer.removeChild(paraTwo);
        btnContainer.removeChild(paraThree);
        btnContainer.appendChild(paraOne);
        pWins = 0;
        cWins = 0;
    }
    else if (cWins >= 5) {
        paraOne.textContent = "Computer has won the game!";
        btnContainer.removeChild(paraTwo);
        btnContainer.removeChild(paraThree);
        btnContainer.appendChild(paraOne);
        pWins = 0;
        cWins = 0;
    }
    paraThree.textContent = "Player points: " + pWins + " || Computer wins: " + cWins;
    btnContainer.appendChild(paraThree);

}
buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click",game);
    button.addEventListener("transitionend",removeTransition);
}
