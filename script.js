function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * (options.length)) * 1];

    return choice;
}

let computerpoints = 0;
let playerpoints = 0;

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();

//let playerSelection = prompt("Choose").toLocaleLowerCase();

function playRound(playerSelection, computerSelection){
    
    if(playerSelection == "rock" && computerSelection == "paper"){
        computerpoints = computerpoints + 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerpoints = playerpoints+ 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerpoints = computerpoints + 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerpoints = playerpoints + 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerpoints = computerpoints + 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerpoints = playerpoints + 1; 
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }
    else if(playerSelection == computerSelection){
        alert("Computer Points: ${computerpoints} vs Player Points: ${playerpoints}");
    }

    
}

function game2() {

        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);

        return result;

        alert(result)
    }

game2();