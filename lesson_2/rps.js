// ask the user for their move
// the computer will choose their move
// display who won the result

const readLine = require("readline-sync");
function prompt(msg) {
  console.log(`=> ${msg}`);
}

const VALID_CHOICES = ['rock', 'paper', 'scissors'];
while (true) {
prompt(`Choose one : ${VALID_CHOICES.join(', ')}.`);
let choice = readLine.question();

while (!VALID_CHOICES.includes(choice)) {
  console.log(`This is not a valid choice.`);
  choice = readLine.question();
}

let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
let computerChoices = VALID_CHOICES[randomIndex];

prompt(`The user chose ${choice}, the computer chose ${computerChoices}.`);

if ((computerChoices === 'rock' && choice === 'scissors') ||
(computerChoices === 'scissors' && choice === 'paper') ||
(computerChoices === 'paper' && choice === 'rock')
) {
  prompt(`Computer wins.`);
} else if ((choice === 'rock' && computerChoices === 'scissors') ||
(choice === 'scissors' && computerChoices === 'paper') ||
(choice === 'paper' && computerChoices === 'rock')
) {
  prompt(`You win!`);
} else {
  prompt(`It's a tie!`);
}
  prompt("Would you like to play again? (y/n)");
  let answer = readLine.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n'){
    prompt("Please enter 'y' or 'n'.")
    answer = readLine.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
} 


