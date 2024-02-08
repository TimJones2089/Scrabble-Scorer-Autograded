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

function scrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (let key in newPointStructure) {
 
		 if (key.includes(word[i])) {
			
         letterPoints += newPointStructure[key]
    
		 }
 
	  }
	}
	return letterPoints;
}
 

 function simpleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = 0;
   
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructue) {
 
		 if (simplePointStructue[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue)
		 }
 
	  }
	}
	return letterPoints; 
   
}

function vowelBonusScorer(word) {
   word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue)
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


const scoringAlgorithms = [
{
   "name":'Simple Score', 
   "descripton": 'Each letter is worth 1 point.', 
   "scorerFunction": simpleScorer
},
{
   "name": 'Bonus Vowels', 
  " descripton": 'Vowels are 3 pts, consonants are 1 pt.', 
   "scorerFunction": vowelBonusScorer
},
{
   "name": 'Scrabble', 
   "descripton": 'The traditional scoring algorithm.', 
   "scorerFunction": scrabbleScorer
}
];


// Scorer promt function

function scorerPrompt() {
   let userSelection;
let scorerSelction = input.question(`Which scoring method would you like to use? 
Enter 0 for Simple: One point per character
Enter 1 for Vowel Bonus: Vowels are worth 3 points
Enter 2 for Scrabble: Uses scrabble point system
: `);
    if (scorerSelction === '0'){
      userSelection = simpleScorer(userInput);
      console.log(`The score for '${userInput}' is ${userSelection}`);
   } else if (scorerSelction === '1') {
      userSelection = vowelBonusScorer(userInput);
      console.log(`The score for '${userInput}' is ${userSelection}`);
   } else if (scorerSelction === '2') {
      userSelection = scrabbleScorer(userInput);
      console.log(`The score for '${userInput}' is ${userSelection}`);
   } else {
      console.log('Sorry try again.');
   } 
   return userSelection;
   
}




function transform(oldPointStructure) {
   let lowerCaseKeys = {};
   for (const key in oldPointStructure){
     lowerCaseKeys['a'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['b'] = Number(Object.keys(oldPointStructure)[2]);
     lowerCaseKeys['c'] = Number(Object.keys(oldPointStructure)[2]);
     lowerCaseKeys['d'] = Number(Object.keys(oldPointStructure)[1]);
     lowerCaseKeys['e'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['f'] = Number(Object.keys(oldPointStructure)[3]);
     lowerCaseKeys['g'] = Number(Object.keys(oldPointStructure)[1]);
     lowerCaseKeys['h'] = Number(Object.keys(oldPointStructure)[3]);
     lowerCaseKeys['i'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['j'] = Number(Object.keys(oldPointStructure)[5]);
     lowerCaseKeys['k'] = Number(Object.keys(oldPointStructure)[4]);
     lowerCaseKeys['l'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['m'] = Number(Object.keys(oldPointStructure)[2]);
     lowerCaseKeys['n'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['o'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['p'] = Number(Object.keys(oldPointStructure)[2]);
     lowerCaseKeys['q'] = Number(Object.keys(oldPointStructure)[6]);
     lowerCaseKeys['r'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['s'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['t'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['u'] = Number(Object.keys(oldPointStructure)[0]);
     lowerCaseKeys['v'] = Number(Object.keys(oldPointStructure)[3]);
     lowerCaseKeys['w'] = Number(Object.keys(oldPointStructure)[3]);
     lowerCaseKeys['x'] = Number(Object.keys(oldPointStructure)[5]);
     lowerCaseKeys['y'] = Number(Object.keys(oldPointStructure)[3]);
     lowerCaseKeys['z'] = Number(Object.keys(oldPointStructure)[6]);
     
   } return lowerCaseKeys;
};

let newPointStructure = transform(oldPointStructure);
   


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
