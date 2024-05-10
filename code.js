//Rock Paper Scissors game in console!
document.addEventListener("DOMContentLoaded", function() 
{
    //Make a variable that will store a number between 1 and 3 (rock, paper or scissor)
    let getComputerChoice = () =>{
        let computerTool = Math.floor(Math.random()*3)+1;

//assign the number to a tool - if num is 1 its rock if 2 its paper if 3 its scissor
switch(computerTool){
    case (1):
    computerTool="rock";
    break;
    case (2):
    computerTool="paper";
    break;
    case(3):
    computerTool="scissors"
    break;
}
return computerTool;
    }

// prompt the user to choose a tool with the restriction of the word inputted being "rock, paper or scissor"

let getUserChoice = () =>{
    let userTool=prompt("Choose rock paper or scissors");
    userTool=userTool.toLowerCase();
        while(userTool!=='rock' && userTool!=='paper' && userTool!=='scissors'){
            console.log("choose between rock paper or scissors!");
            userTool=prompt("Rock, Paper or Scissors?");
        }
        return userTool;
}

let computerScore=0;
let userScore=0;
// make conditions for the winner
 let playRound = () =>{
    let computer=getComputerChoice();
    let user=getUserChoice();
    console.log(`YOu chose ${user}`);
    console.log(`The computer chose ${computer}`);
    switch(user){

        case ("rock"):
            if(computer==="rock"){
                console.log("IT'S A TIE!");
                computerScore++;
                userScore++;
            }
           else if(computer==="paper"){
            console.log("YOU LOSE!");
            computerScore++;
           }
           else if(computer==="scissors"){
            console.log("YOU WIN!!!");
            userScore++;
           }
           break;

           case("paper"):
           if(computer==="rock"){
            console.log("YOU WIN!");
            userScore++;
        }
       else if(computer==="paper"){
        console.log("IT'S A TIE!");
        computerScore++;
        userScore++;
       }
       else if(computer==="scissors"){
        console.log("YOU LOSE!");
        computerScore++;
       }
       break;

       case("scissors"):

       if(computer==="rock"){
        console.log("YOU LOSE!");
        computerScore++;
    }
        else if(computer==="paper"){
        console.log("YOU WIN!!!");
        userScore++;
    }
        else if(computer==="scissors"){
        console.log("IT'S A TIE!!!");
        computerScore++;
        userScore++;
    }
    break;
    }
    console.log(`Score is now Human: ${userScore}/ Computer: ${computerScore}`);
 }
let keepGoing=true;
while(keepGoing){
    console.clear();
    playRound();
    let answer=prompt("Play Again -  Yes/No?").toLowerCase();
    while(answer!=="yes" && answer!=="no"){
        answer=prompt("Play Again -  Yes/No?").toLowerCase();
    }
    if(answer==="no"){
        keepGoing=false;
    }
    
}

})
