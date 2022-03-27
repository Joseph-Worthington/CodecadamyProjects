let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// create random target number

const generateTarget = n =>{
    n = Math.floor(Math.random()*10);
    return n;
};

//Do the calculation for number absoloute
const getAbsoluteDistance = (x, y) => Math.abs(x-y);

//alert if number does not fit between 0 - 9



//calculate who was closest to the random number 'human' or 'computer' in case of a tie the human wins.
const compareGuesses = (userGuess, computerGuess, targetNum) =>{
    if (userGuess > 10 || userGuess < 0){
        return alert('Invalid Number! Please select a number between  0 & 10')
    }
    else{
        if(getAbsoluteDistance(userGuess, targetNum) < getAbsoluteDistance(computerGuess, targetNum)){
            return true;
        }
        else if(getAbsoluteDistance(userGuess, targetNum) > getAbsoluteDistance(computerGuess, targetNum)){
            return false;
        }
        else if (getAbsoluteDistance(userGuess, targetNum) === getAbsoluteDistance(computerGuess, targetNum)){
            return true;
        }
    }
    
};

console.log(compareGuesses());

// add to the score of the round winner
const updateScore = winner => {
    switch(winner){
        case 'human':
            return humanScore = humanScore + 1;
        case 'computer':
            return computerScore = computerScore + 1;
    }
};


//add to the round count
const advanceRound = variable => currentRoundNumber = currentRoundNumber + 1;
