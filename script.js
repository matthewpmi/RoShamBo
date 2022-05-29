    //create random output from computer
    function computerPlay() {
        const randomItem = Math.floor(Math.random() * 3 + 1);
          if (randomItem === 1) {
            return 'rock';
          } 
          else if (randomItem === 2) {
            return 'paper';
          } 
          else if (randomItem === 3) {
            return 'scissors';
          }
        }
      //take player choice and computer (random) choice
      //output winner
          
      let computerSelection = computerPlay(); //computer choice
      let playerScore = 0; //player score count
      let compScore = 0; //computer score count
      
      const rock = document.querySelector('#rock')
      const paper = document.querySelector('#paper')
      const scissors = document.querySelector('#scissors')
      const pScore = document.querySelector('#playerScore')
      const cScore = document.querySelector('#compScore')
      const sBoard = document.querySelector('#scoreBoard')
      rock.addEventListener('click', () => (playRound(computerPlay(), "rock")));
      paper.addEventListener('click', () => (playRound(computerPlay(), "paper")));
      scissors.addEventListener('click', () => (playRound(computerPlay(), "scissors")));
          
      
      function playRound(cSelection, pSelection) { 
        if (pSelection == "rock" && cSelection == "scissors" || pSelection == "scissors" && cSelection == "paper" || pSelection == "paper" && cSelection == "rock") { //player win condition
          playerScore++;
          pScore.textContent = playerScore;
          sBoard.textContent = `You win the round, ${pSelection} beats ${cSelection}!`;
          if (playerScore === 5){  
            sBoard.textContent = "You win the match!";
          }
        }
        else if (pSelection == "rock" && cSelection == "paper" || pSelection == "scissors" && cSelection == "rock" || pSelection == "paper" && cSelection == "scissors") { //comp win condition
          compScore++;
          cScore.textContent = compScore;
          sBoard.textContent = `You lose the round, ${cSelection} beats ${pSelection}!`;
          if (compScore === 5){  
            sBoard.textContent = "You lose the match!";
          }
        }
        else if (pSelection == "rock" && cSelection == "rock" || pSelection == "scissors" && cSelection == "scissors" || pSelection == "paper" && cSelection == "paper") { //draw condition
          sBoard.textContent = `It's a draw! The computer also selected ${cSelection}!`;
        }
        else {
          return "Give a proper response next time!"; //return on typo
        }
        // console.log(playerScore);
        // console.log(compScore);
      }
      
    //   function game(){
    //     for (let i = 0; ; i++){
    //       const computerSelection = computerPlay(); //computer choice
    //       // const playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();  //player choice
    //       console.log(playRound(computerSelection, playerSelection));
    //       console.log(playerScore);
    //       console.log(compScore);
    //       if (playerScore === 5){  
    //         return "You win the match!";
    //     }
    //       else if (compScore === 5){
    //         return "You lose the match!";
    //       }
    //     }
    //   
    //   
    //       else if (compScore == playerScore){
    //         return "The match ends in a draw!"
    //       }
    //       else {
    //         return "You broke the game!"
    //       }
    //   }
    
    //   console.log(playRound(computerSelection, playerSelection));
    //   console.log(game())
    //   console.log(playerScore)
    //   console.log(compScore)