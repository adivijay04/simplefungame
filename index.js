const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const humanChoice = document.getElementById("player");
const computerChoice = document.getElementById("computer");
const result = document.getElementById("result");


function  check(userTarget) {
  humanChoice.textContent = userTarget
  let comp = computer()
  winner(userTarget,comp)
}
function computer(){
  let randomNumber = Math.floor(Math.random() * 3);
  let arr = ['rock','paper','scissor']
  computerChoice.textContent = arr[randomNumber];
  return arr[randomNumber];
}

function winner(player,comp){
  if(player == comp){
    result.textContent = "Match Draw"
  }else if(player == "rock" && comp == "scissor"){
    result.textContent = "Player Won"
  }else if(player == "paper" && comp == "rock"){
    result.textContent = "Player Won"
  }else if (player == "scissor" && comp == "paper") {
    result.textContent = "Player Won"
  }else{
    result.textContent = "Player Loss"
  }
}
