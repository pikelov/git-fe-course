`use strict`;

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  let min = 4;
  let max = 16;
  const isInRange = login.length >= min && login.length <= max;
  return isInRange;
};

const isLoginUnique = (logins, login) => {
  const isUnique = !logins.includes(login);
  return isUnique;
};

const addLogin = (logins, login) => {
  let isInRange = isLoginValid(login);
  if (!isInRange) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }
  let includeLogin = isLoginUnique(logins, login);
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
