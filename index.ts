#! /usr/bin/env node

import inquirer from "inquirer";


let message='\n\t"Welcome to number guessing game by Anam"\t\n'
console.log(message)

// permision required from the user to proceed

const answer=await inquirer.prompt([
    {name:"proceed to play,permission granted",
    message:'To play press enter'
},
]);
    console.log(answer)

const randomNumber= Math.floor(Math.random() * 6 + 1);

const  answers =await inquirer.prompt([
    { name:"userGuessedNumber",
      type:"number",
      message:"Please guess a number between 1-6:",
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congrtulations! You guessed the right number.")
} else{ console.log("Sorry! You guessed the wrong number.")

}