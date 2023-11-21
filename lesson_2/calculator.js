// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readLine = require("readline-sync");

function invalidNumber(num){
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function prompt(msg){
  console.log(`=> ${msg}`)
};

prompt("Welcome to the calculator!");

prompt("What's the first number?");
let number1 = readLine.question();

while (invalidNumber(number1)) {
prompt("Hmmm.. that doesn't look like a valid number.")
number1 = readLine.question();
}

prompt("What's the second number?");
let number2 = readLine.question();

while (invalidNumber(number2)) {
  prompt("Hmmm.. that doesn't look like a valid number.")
  number2 = readLine.question();
  }

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readLine.question();
while (!operation.includes([1,2,3,4])) {
  prompt("Must choose 1,2,3 or 4.")
  operation = readLine.question();
  }

let output;
switch (operation){
  case '1': 
   output = Number(number1) + Number(number2);
   break;
   case '2':
    output = Number(number1) - Number(number2);
    break;
     case '3':
      output = Number(number1) * Number(number2);
    break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
}


prompt(`The result is ${output}.`);