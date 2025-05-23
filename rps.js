function getComputerchoice (){
    const randm = Math.random();
    if (randm < 1 / 3){
        return "rock";
    }else if(randm < 2 / 3){
        return "paper";

    }else{
        return "scissors";
    }

}

function getHumanChoice (){
    let choice = prompt("Enter Your choice:Rock, Paper or Scissors");
    while (!["rock","paper", "scissors"].includes(choice)){
        choice = prompt ("invalid Input.Please enter rock, paper or scissors:");
    }
    return choice;

}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice , computerChoice) {
    if (humanChoice === computerChoice){
        return `  You : ${humanChoice} computer: ${computerChoice} .It is a tie`;
    } else if  (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
         return `You : ${humanChoice} computer: ${computerChoice} .You win :)`;
         
        
    }else{
        computerScore++;
        return `You : ${humanChoice} computer: ${computerChoice} .You lose :(`;
        
    }
}
    
     
    for ( let i=0; i < 5; i++){

const humanSelection = getHumanChoice();
const computerSelection = getComputerchoice();

const result = playRound(humanSelection, computerSelection);
console.log(result);

    }
console.log(`Final score :  You = ${humanScore} computer = ${computerScore}`);
if (humanScore > computerScore){
    console.log("You won the Game");
} else if (computerScore > humanScore){
    console.log( "you lost the game");
}else{
    console.log("it is a tie");
}
    }

