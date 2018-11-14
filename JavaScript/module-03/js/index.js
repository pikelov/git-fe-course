'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  const min = 4;
  const max = 16;
  return login.length >= min && login.length <= max;
};

const isLoginUnique = (logins, login) => {
  return !logins.includes(login);
};

const addLogin = (logins, login) => {
  const isInRange = isLoginValid(login);
  if (!isInRange) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }
  const includeLogin = isLoginUnique(logins, login);
  if (!includeLogin) {
    console.log(`Логин ${login} уже используется!`);
    return;
  }
  logins.push(login);
  console.log(`Логин ${login} успешно добавлен!`);
};

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'