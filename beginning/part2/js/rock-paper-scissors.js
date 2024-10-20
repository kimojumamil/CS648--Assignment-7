function getUserChoice() {
    var userInput = prompt("Do you choose rock, paper, or scissors?");
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getUserChoice();
    }
}
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You win! Rock destroys scissors.';
        } else {
            return 'You lose! Paper covers rock.';
        }
    }
    
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win! Paper covers rock.';
        } else {
            return 'You lose! Scissors cut paper.';
        }
    }
    
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You win! Scissors cut paper.';
        } else {
            return 'You lose! Rock destroys scissors.';
        }
    }
}
function playGame() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    
    document.write("You chose: " + userChoice + "<br>");
    document.write("The computer chose: " + computerChoice + "<br>");
    
    var result = determineWinner(userChoice, computerChoice);
    document.write(result + "<br>");
}

playGame();
