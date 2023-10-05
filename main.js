'use strict';

const guessANumber = function(attempt) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomInt = getRandomInt(1, 101);
  console.log(randomInt + " рандомное число");

  const game = function() {
    let answer = prompt( "Угадай число от 1 до 100");
    console.log(attempt);

    if (attempt > 0) {

      if (answer === null) {
        alert("Игра окончена");
      } else if (isNaN(answer) || !isFinite(answer) || answer === "") {
        alert("Введи число!");
        game();
      } else if (+answer > randomInt) {
        alert( "Загаданное число меньше, " + "осталось попыток: " + attempt);
        attempt--;
        game();
      } else if (+answer < randomInt) {
        alert("Загаданное число больше, " + "осталось попыток: " + attempt);
        attempt--;
        game();
      } else if (+answer === randomInt) {
        let final = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

        if (final === true) {
          guessANumber(9);
        } else {
          return;
        }
      } 

    } else {
      let final = confirm("Попытки закончились, хотите сыграть еще?");
      if (final === true) {
        guessANumber(9);
      } else {
        return;
      }
    }
  }
  game();
}

guessANumber(9);