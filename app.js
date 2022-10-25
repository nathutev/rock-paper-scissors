let body = document.getElementById("body");
let rock = document.getElementById("buttonRock");
let paper = document.getElementById("buttonPaper");
let scissors = document.getElementById("buttonScissors");
let userText = document.getElementById("userText");
let computerText = document.getElementById("computerText");
let winResult = document.getElementById("winResult");

let win = 0;
let lose = 0;
let tie = 0;

let userSelection;
let computerSelection;

let rockPaperScissors = [
  "rock",
  "paper",
  "scissors"
];

let oldUserText = userText.innerHTML;
let oldComputerText = computerText.innerHTML;
let oldWinResult = winResult.innerHTML;

function reset(){
  userText.innerHTML = oldUserText;
  computerText.innerHTML = oldComputerText;
  winResult.innerHTML = oldWinResult;
};

rock.onclick = function(){
  reset();
  userSelection = "rock";
  userText.innerHTML += "rock";
  computerSelectionFunc();
};

paper.onclick = function(){
  reset();
  userSelection = "paper";
  userText.innerHTML += "paper";
  computerSelectionFunc();
};

scissors.onclick = function(){
  reset();
  userSelection = "scissors";
  userText.innerHTML += "scissors";
  computerSelectionFunc();
};

function computerSelectionFunc(){
  computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
  computerText.innerHTML += computerSelection;

  game();
};

function game(){
  if(computerSelection == userSelection){
    winResult.textContent += "Tie!";
    tie++;
    results();
  }
  
  else if(computerSelection == "rock" && userSelection == "paper"){
    winResult.textContent += "You win!";
    win++;
    results();
  }

  else if(computerSelection == "scissors" && userSelection == "rock"){
    winResult.textContent += "You win!";
    win++;
    results();
  }

  else if(computerSelection == "paper" && userSelection == "scissors"){
    winResult.textContent += "You win!";
    win++;
    results();
  }

  else if(computerSelection == "rock" && userSelection == "scissors"){
    winResult.textContent += "You lose!";
    lose++;
    results();
  }

  else if(computerSelection == "scissors" && userSelection == "paper"){
    winResult.textContent += "You lose!";
    lose++;
    results();
  }

  else if(computerSelection == "paper" && userSelection == "rock"){
    winResult.textContent += "You lose!";
    lose++;
    results();
  };
};

function results(){
  document.getElementById("win").innerHTML = win;
  document.getElementById("lose").innerHTML = lose;
  document.getElementById("tie").innerHTML = tie;
};

body.addEventListener("keypress", function(event) {
  if (event.key === "r"){
    rock.click();
  }
});

body.addEventListener("keypress", function(event) {
  if (event.key === "p"){
    paper.click();
  }
}); 

body.addEventListener("keypress", function(event) {
  if (event.key === "s"){
    scissors.click();
  }
}); 