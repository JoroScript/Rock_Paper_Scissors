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

let container=document.querySelector('#container');
let endText=document.querySelector("#endText");
let paperImage=document.createElement('img');
let rockImage=document.createElement('img');
let scissorsImage=document.createElement('img');
let score=document.querySelector('#score');
scissorsImage.src='/image-from-rawpixel-id-6488381-png.png'
rockImage.src='/image-from-rawpixel-id-6792129-jpeg__1_-removebg-preview.png';
let pcChoice=document.querySelector("#pcChoice");
paperImage.src='/image-from-rawpixel-id-6482382-png.png';
let winner=document.querySelector('#winner');
let loser=document.querySelector("#loser");
let hiddenText=document.querySelector(".hidden");
let info=document.querySelector('#info');
let scoreUser=0;
let scorePC=0;
let pcImage=document.querySelector('#pcImage');
if(scorePC<5 && scoreUser<5){
container.addEventListener('click', (event)=>{
    let target=event.target;

    switch(target.id){
        case "rock":
            console.log("rock");
            playRound("rock");
            break;
         case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
})
}

let playRound = (tool) =>{
    hiddenText.classList.remove('hidden');
    let computerTool=getComputerChoice();
    pcChoice.textContent="Robot chose: ";
   
    
    console.log(computerTool);
    switch(tool){
        case "rock":

            if(computerTool==="rock"){
                pcImage.src=rockImage.src;
                winner.src=rockImage.src;
                loser.src=rockImage.src;
                info.textContent="TIE!";
                
            }
            else if(computerTool==="paper"){
                pcImage.src=paperImage.src;
                winner.src=rockImage.src;
                loser.src=paper.src;
                info.textContent="YOU LOSE!";
                scorePC++;

            }
            else if(computerTool==="scissors"){
                pcImage.src=scissorsImage.src;
                winner.src=rockImage.src;
                loser.src=scissorsImage.src;
                info.textContent="YOU WIN!";
                scoreUser++;
            }
            break;
            case "paper":
                if(computerTool==="rock"){
                    pcImage.src=rockImage.src;
                    winner.src=paperImage.src;
                    loser.src=rockImage.src;
                    info.textContent="YOU WIN!";
                    scoreUser++;
                  
                }
                else if(computerTool==="paper"){
                    pcImage.src=paperImage.src;
                    winner.src=paperImage.src;
                    loser.src=paperImage.src;
                    info.textContent="IT'S A TIE!";
                    
                }
                else if(computerTool==="scissors"){
                    pcImage.src=scissorsImage.src;
                    winner.src=paperImage.src;
                    loser.src=scissorsImage.src;
                    info.textContent="YOU LOSE!";
                    scorePC++;
                }
                break;
                case "scissors":
                    console.clear();
                    if(computerTool==="rock"){
                        pcImage.src=rockImage.src;
                        winner.src=scissorsImage.src;
                        loser.src=rockImage.src;
                        info.textContent="YOU LOSE!";
                        scorePC++;
                    }
                    else if(computerTool==="paper"){
                        pcImage.src=paperImage.src;
                        winner.src=scissorsImage.src;
                    loser.src=paperImage.src;
                    info.textContent="YOU WIN!";
                    scoreUser++;
                    }
                    else if(computerTool==="scissors"){
                        pcImage.src=scissorsImage.src;
                        winner.src=scissorsImage.src;
                        loser.src=scissorsImage.src;
                        info.textContent="IT'S A TIE!";
                        
                    }
                    break;
            
}
score.textContent=` User: ${scoreUser} | Robot: ${scorePC}`;
if(info.textContent==="YOU LOSE!"){
    info.className="lost"
}
else if(info.textContent==="YOU WIN!"){
    info.className="won";
}
else info.className="tied"

}

});
































































































// let getUserChoice = () =>{
//     let userTool=prompt("Choose rock paper or scissors");
//     userTool=userTool.toLowerCase();
//         while(userTool!=='rock' && userTool!=='paper' && userTool!=='scissors'){
//             console.log("choose between rock paper or scissors!");
//             userTool=prompt("Rock, Paper or Scissors?");
//         }
//         return userTool;
// }

// let computerScore=0;
// let userScore=0;
// // make conditions for the winner

//  let playRound = (user,computer) =>{
//     console.clear();
//     roundsPlayed++;
//     console.log(`Round ${roundsPlayed}`);
//     console.log(`YOu chose ${user}`);
//     console.log(`The computer chose ${computer}`);
//     switch(user){

//         case ("rock"):
//             if(computer==="rock"){
//                 console.log("IT'S A TIE!");
//                 computerScore++;
//                 userScore++;
//             }
//            else if(computer==="paper"){
//             console.log("YOU LOSE!");
//             computerScore++;
//            }
//            else if(computer==="scissors"){
//             console.log("YOU WIN!!!");
//             userScore++;
//            }
//            break;

//            case("paper"):
//            if(computer==="rock"){
//             console.log("YOU WIN!");
//             userScore++;
//         }
//        else if(computer==="paper"){
//         console.log("IT'S A TIE!");
//         computerScore++;
//         userScore++;
//        }
//        else if(computer==="scissors"){
//         console.log("YOU LOSE!");
//         computerScore++;
//        }
//        break;

//        case("scissors"):

//        if(computer==="rock"){
//         console.log("YOU LOSE!");
//         computerScore++;
//     }
//         else if(computer==="paper"){
//         console.log("YOU WIN!!!");
//         userScore++;
//     }
//         else if(computer==="scissors"){
//         console.log("IT'S A TIE!!!");
//         computerScore++;
//         userScore++;
//     }
//     break;
//     }
//     console.log(`Score is now Human: ${userScore}/ Computer: ${computerScore}`);
//  }
// let roundsPlayed=0;
// let playGame= () => {
//     while(true){
//         if(roundsPlayed===5){
//             let answer = prompt("Play Again? -Yes/No: ").toLowerCase();
//             while(answer!=="yes" && answer!=="no"){
//                 answer = prompt("Play Again? -Yes/No: ").toLowerCase();
//             }
//             if(answer==="no"){
//                 console.clear();
//                 console.log("See You Next Time!");
//                 break;
//             }
//             else{
//                 console.clear();
//                 console.log("You Have Started A New Game!")
//                 userScore=0;
//                 computerScore=0;
//                 roundsPlayed=0;
//             } 
//         }
//         let computer=getComputerChoice();
//         let user=getUserChoice();
//             playRound(user,computer);
//     }

// }
// playGame();

// })
