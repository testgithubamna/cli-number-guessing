#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number = Done
// 2) user input for guessing number = Done 
//3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulation! you guessed the right number");
}
else {
    console.log("you guesses wrong number");
}
