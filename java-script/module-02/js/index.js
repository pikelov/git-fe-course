`use strict`
let userInput;
let inputNumber;
const numbers = [];
let total = 0;

do {
    userInput = prompt("Please enter value", "");
    if (userInput === null) {
        break;       
    } 
    inputNumber = Number(userInput);
    if (!Number.isNaN(inputNumber)) {
        numbers.push(inputNumber);
    } else {
        alert("Input error - please try again ! This time with the numbers!");   
    }
} while (userInput >= 0 || Number.isNaN(inputNumber));

if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
    }
alert(`Total sum is ${total}`);
}