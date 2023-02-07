const RPS = ["Rock", "Paper", "Scissors"];
let playerChoice ;
let winCount = 0
const para = document.createElement("p");
const paraTwo = document.createElement("p");
const paraThree = document.createElement("p");
paraThree.textContent = "Current score: " + winCount;
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
        winCount ++; 
        para.textContent = "Player wins!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(para);
        paraThree.textContent = "Current score: " + winCount;
        btnContainer.appendChild(paraThree);
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Rock" && computerChoice == "Paper") {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        winCount --;
        para.textContent = "Computer wins!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(para);
        paraThree.textContent = "Current score: " + winCount;
        btnContainer.appendChild(paraThree);
    }
    else {
        paraTwo.textContent = "The player has chosen: " + playerChoice + " | The Computer has chosen: " + computerChoice + "!";
        para.textContent = "Game Draw!";
        btnContainer.appendChild(paraTwo);
        btnContainer.appendChild(para);
        paraThree.textContent = "Current score: " + winCount;
        btnContainer.appendChild(paraThree);
    }
}
buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click",game);
    button.addEventListener("transitionend",removeTransition);
}
