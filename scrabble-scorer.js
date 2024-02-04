// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

// Point Structures

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let simplePointStructue = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

let vowelPointStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

// Scoring functions

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 function simpleScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructue) {
 
		 if (simplePointStructue[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

function vowelBonusScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   userInput = input.question("Enter a word to score:");
   
};

// Scoring Objects

let simpleScorer = {
   name:'Simple Score', 
   descripton: 'Each letter is worth 1 point.', 
   scoringFunction: simpleScrabbleScorer()
};

let vowelBonusScorer = {
   name: 'Bonus Vowels', 
   descripton: 'Vowels are 3 pts, consonants are 1 pt.', 
   scoringFunction: vowelBonusScrabbleScorer()
};

let scrabbleScorer = {
   name: 'Scrabble', 
   descripton: 'The traditional scoring algorithm.', 
   scoringFunction: oldScrabbleScorer()
};

// Pushing scoring objects into the scoring Algorithm array

const scoringAlgorithms = [];
scoringAlgorithms.push(simpleScorer, vowelBonusScorer, scrabbleScorer);

// Scorer promt function

function scorerPrompt() {
scorerSelction = input.question(`Which scoring method would you like to use? 
Enter 0 for Simple Scorer
Enter 1 for Bonus Vowel Scorer
Enter 2 for Traditional Scrabble Scorer
: `);
let userSelection;

   if (scorerSelction === '0'){
      userSelection = simpleScrabbleScorer(userInput);
   } else if (scorerSelction === '1') {
      userSelection = vowelBonusScrabbleScorer(userInput);
   } else if (scorerSelction === '2') {
      userSelection = oldScrabbleScorer(userInput);
   } else {
      console.log('Sorry try again.');
   } return userSelection;

}




function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
