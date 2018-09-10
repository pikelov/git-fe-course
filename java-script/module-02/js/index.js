`use strict`;
let inputNumber;
const arr = [];
let total = 0;

do {
  inputNumber = prompt('Please enter value', '');
  if (+inputNumber) {
    arr.push(+inputNumber);
  } else if (inputNumber !== null) {
    alert('Input error - please try again ! This time with the numbers!');
  }
} while (inputNumber !== null);

if (arr.length) {
  for (let i of arr) {
    total += i;
  }
  alert(`Total sum is ${total}`);
}
