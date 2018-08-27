/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const msgCancel = "Отменено пользователем!";
const msgDenied = "Доступ запрещен!";
const msgWelcome = "Добро пожаловать!";

const enterLogin = prompt(" Enter login please: ");

if (enterLogin === null) {
  alert(msgCancel);
  
} else if (enterLogin !== adminLogin) {
  alert(msgDenied);
  
} else if (enterLogin === adminLogin) {
  const enterPassword = prompt(" Enter password: ");
  
  if (enterPassword === null) {
    alert(msgCancel);
  } else if (enterPassword !== adminPassword) {
    alert(msgDenied);
  } else if (enterPassword === adminPassword) {
    alert(msgWelcome);
  }
}





  // Создайте скрипт турагенства, продающего поездки в 3 - х группах: sharm, hurgada и taba.

  //     Кол - во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.

  // Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  //     результат сохранить в переменную.

  // Необходимо проверить является ли введенные данные целым положительным числом.
  // Вывести alert с текстом "Ошибка ввода" в случае ошибочного ввода и прекратить выполнение скрипта.

  // В случае валидного ввода, последовательно проверить кол - во мест в группах,
  //     и кол - во необходимых мест введенных пользователем.
  //         Подсказка: начните с самой маленькой группы!

  // Если была найдена группа в которой количество мест больше либо равно необходимому,
  //     вывести пользователю сообщение через confirm, что есть место в группе такой - то,
  //         согласен ли пользоваетель быть в этой группе ?

  //             Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
  //                 'Приятного путешествия в группе <имя группы>'.

  // Если ответ нет, выводим alert с текстом "Нам очень жаль, приходите еще!".

  // Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'

  let tabaTour = 6;
  let sharmTour = 15;
  let hugardaTour = 25; 
  let isAgree;
  let tourName;
  let max = hugardaTour;
  let userChoice = Number(prompt("Введите количество мест.", ""));
  let stat = [];

  if (isNaN(userChoice) || userChoice < 1 || userChoice === "") {
    alert("Некорректный ввод - попробуйте еще раз!");
    console.log(userChoice);
  } else {
    if (userChoice > max) {
      alert("К сожалению мест недостаточно.");
    } else {
      tourName = prompt(
        "Куда хотите отправиться сегодня? Taba , Sharm , Hugarda ?",
        ""
      );
      console.log(tourName);
      stat.push(tourName);

      switch (tourName) {
        case ("Taba", "taba"):
          if (userChoice <= tabaTour) {
            isAgree = confirm(
              "Есть место в группе Taba, согласны быть в этой группе?"
            );
            console.log(isAgree);

            if (isAgree) {
              tabaTour = tabaTour - userChoice;
              console.log("Осталось мест в группе Taba: ", tabaTour);
              alert("Bon voyage! Taba is waiting for you!");
              break;
            } else {
              alert("Очень жаль. Приходите еще!");
              break;
            }
          }
          alert("Мест недостаточно - попробуйте другие направления");
          break;

        case ("Sharm", "sharm"):
          if (userChoice <= sharmTour) {
            isAgree = confirm(
              "Есть место в группе Sharm, согласны быть в этой группе?"
            );
            if (isAgree) {
              sharmTour = sharmTour - userChoice;
              console.log("Осталось мест в группе Sharm: ", sharmTour);
              alert("Bon vouage! Sharm is waiting for you!");
              break;
            } else {
              alert("Очень жаль. Приходите еще!");
              break;
            }
          }
          alert("Мест недостаточно - попробуйте другие направления");
          break;

        case ("Hugarda", "hugarda"):
          if (userChoice <= hugardaTour) {
            isAgree = confirm(
              "Есть место в группе Hugarda, согласны быть в этцой группе?"
            );
            if (isAgree) {
              sharmTour = hugardaTour - userChoice;
              console.log("Осталось мест в группе Sharm: ", sharmTour);
              alert("Bon vouage! Hugarda is waiting for you!");
            } else {
              alert("Очень жаль. Приходите еще!");
              break;
            }
          }
          alert("Мест недостаточно - попробуйте другие направления");
          break;

        case null:
          alert("Очень жаль . Приходите еще");
          break;
        default:
          alert("Мест нет. Приходите завтра!");
      }
    }
    console.log(stat);
  }

  //===========
  //ver 00
  //if (userChoice <= tabaTour )  {
  //   isAgree = confirm('Есть место в группе Taba, согласны быть в этой группе?');

  // if (isAgree) {
  //   tabaTour = tabaTour - userChoice;
  //   console.log('Осталось мест в группе Taba: ' , tabaTour);
  //   alert('Bon voyage! Taba is waiting for you!');
  //   } else {

  //         if(userChoice <= hugardaTour) {
  //                   isAgree = confirm('Есть место в группе Hugarda, согласны быть в этцой группе?');
  //           if (isAgree) {
  //                  sharmTour = hugardaTour - userChoice;
  //                  console.log('Осталось мест в группе Sharm: ', sharmTour);
  //                  alert('Bon vouage! Hugarda is waiting for you!');
  //               } else {
  //               alert('К сожалению других туров у нас нет :( Приходите завтра!' );
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
