const prompt = require('prompt');
const figlet = require('figlet');
const chalk = require('chalk');

let rangeMin = 0;
let rangeMax = 1000;
let guessValue;
let numberOfGuesses = 0;

startGame();

function startGame() {
    console.log(
        chalk.green(
            figlet.textSync('Guessing Game!', {
                horizontalLayout: 'full'
            })
        ));
    console.log(`Think of a number between ${rangeMin} and ${rangeMax}`);
    console.log("..........");

    guess();
}

function guess() {
    chooseGuessValue();

    console.log(`Computer: "My guess is ${guessValue}!"`);
    numberOfGuesses++; 

    console.log(' is your number h(igher), l(ower) or my guess was c(orrect)?');
    askForUserInput();
}

function chooseGuessValue() {
    guessValue = Math.floor((rangeMax + rangeMin) / 2);
}

function askForUserInput() {
    prompt.start();
    prompt.get(['yourAnswer'], function (err, result) {
        switch (result.yourAnswer) {
            case "h":
                chooseHigher();
                break;
            case "l":
                chooseLower();
                break;
            case "c":
                printAnswer();
                break;
            default:
                askForCorrectUserInput();
        }
    });
}

function chooseHigher() {
    console.log("I need to choose higher");
    rangeMin = guessValue;
    guess();
}

function chooseLower() {
    console.log("I need to choose lower");
    rangeMax = guessValue;
    guess();
}

function printAnswer() {
    console.log(`Yay, your number is: ${guessValue}`);
    console.log(`And I found it in ${numberOfGuesses} guesses`);
}

function askForCorrectUserInput() {
    console.log("you can only answer with letter h, l or c");
    askForUserInput();
}


