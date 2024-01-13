

let playerpoint = 0;
let computerpoint=0;
 game ();
 game ();
 game ();
 game ();
 game ();
 if(playerpoint<computerpoint)
 {
  
   console.log(" Computer won by" + computerpoint +" points " );
   console.log(computerpoint  +" - " + playerpoint );
}
else if(playerpoint>computerpoint){
   console.log(" You won by" + playerpoint +" points " );
   console.log(playerpoint   +" - " + computerpoint);
}
else {
   console.log("DRAW" );
   console.log(playerpoint   +" - " + computerpoint);
}


function game(){
let playerselection = prompt("Enter your choice");
console.log(playerselection);

let computerselection = getComputerChoice();


playRound(playerselection, computerselection);

}


function getComputerChoice() {
    let computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice == 0) {
        console.log("ROCK");
        return "ROCK";
    } else if (computerchoice == 1) {
        console.log("PAPER");
        return "PAPER";
    } else if (computerchoice == 2) {
        console.log("SCISSOR");
        return "SCISSOR";
    }
}

function playRound(playerselection, computerselection) {
    if (playerselection !== undefined && playerselection !== null) {
        playerselection = playerselection.toUpperCase();
    } else {
        console.error("playerselection is undefined or null.");
        return;
    }

      if(playerselection !== "ROCK" && playerselection !== "PAPER" && playerselection !== "SCISSOR")
      {
         console.error("enter valid choice");
      }
   else if (playerselection === computerselection) {
        console.log("DRAW");
    } else if (playerselection === "PAPER") {
        if (computerselection === "ROCK") {
            console.log("Player wins");
            playerpoint++;
        } else {
            console.log("Computer wins");
            computerpoint++;
        }
    } else if (playerselection === "ROCK") {
        if (computerselection === "SCISSOR") {
            console.log("Player wins");
          playerpoint++;
        } else {
            console.log("Computer wins");
            computerpoint++;
        }
    } else if (playerselection === "SCISSOR") {
        if (computerselection === "PAPER") {
            console.log("Player wins");
            playerpoint++;
        } else {
            console.log("Computer wins");
            computerpoint++;
        }
    }
}



 