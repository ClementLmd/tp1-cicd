// src/calculator.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division par zéro impossible");
  return a / b;
}
//test challenge 1
module.exports = { add, subtract, multiply, divide };
