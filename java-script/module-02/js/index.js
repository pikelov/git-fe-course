`use strict`
/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте 
      цикл while или do...while.
      
    - Делать проверку того, что пользователь ввел именно число, а не произвольный 
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего 
      снова пользователю предлагается ввести число в prompt.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/

let userInput;
let inputNumber;
const numbers = [];
let total = 0;

do {
    let userInput = prompt("Please enter value");

    if (userInput === null) {
        alert("Perfect!! Let\'s see the results!!");
        break;
    }
    inputNumber = Number(userInput);
    if (!Number.isNaN(inputNumber)) {
        numbers.push(inputNumber);
    } else {
        alert("Input error - please try again ! This time with the numbers!")
    }
}
while (userInput !== null);
console.log("User array: ", numbers)

function newFunction(userInput) {
    while (counter <= 10 && userInput !== null) {
        console.log(counter);
        counter += 1;
    }
}
for (let i = 0, arrNum = numbers.length; i < arrNum; i += 1) {
    total += numbers[i];
}

alert(`Total sum is ${total}`);


