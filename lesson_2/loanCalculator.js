/* m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months */

/* . let m = p * (j / (1 - Math.pow((1 + j), (-n))));

Ask user the loan amount
Ask the user Annual Percentage Rate (APR)
Ask the loan duration */

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number)) || Number(number) < 0 || number.trim() === '';
}

const readLine = require('readline-sync');

prompt("Welcome to the mortgage calculator!");

prompt("Please enter the loan amount($)");
let loanAmount = readLine.question();
while (invalidNumber(loanAmount)) {
  prompt("Please enter a valid amount.");
  loanAmount = readLine.question();
}

prompt("Please enter the Annual Interest Rate");
let annualInterestRate = readLine.question();
let monthlyInterestRate = Number(annualInterestRate / 100) / 12;
while (invalidNumber(annualInterestRate)) {
  prompt("Please enter a valid number.");
  annualInterestRate = readLine.question();
}

prompt("Please enter the loan duration in years.");
let durationInYears = readLine.question();
let durationInMonths = durationInYears * 12;

let monthlyPayment = loanAmount * (monthlyInterestRate / (
  1 - Math.pow((1 + monthlyInterestRate),(-durationInMonths))));

prompt(`This is your monthly payment amount: $${monthlyPayment}.`);

