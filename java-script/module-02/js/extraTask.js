'use strict';
/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Напишите скрипт авторизации пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, 
  аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let passReqst;
let userPassword;

do {
  userPassword = prompt("Enter password.");
  if (userPassword === null) {
    //одразу перевіряємо чи не натиснув cancel
    break;
  }
  passReqst = passwords.includes(userPassword); //перевіряємо масив та отримуємо буль true/false
  if (passReqst) {
    alert("Wellcome!");
    break;
  }
  attempts = attempts - 1; //тут у мене є сумніви чи це так можна робити?
  if (!passReqst) {
    if (attempts > 0) {
      alert(`Wrong password! You have another ${attempts} attempts.`);
    }
    if (attempts < 1) {
      alert("You reached the limit of attempts. Account blocked");
      break;
    }
  }
} while (userPassword !== null && attempts > 0);