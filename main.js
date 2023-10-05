'use strict';

const guessANumber = function() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomInt = getRandomInt(1, 101);
  console.log(randomInt + " рандомное число");

  const game = function() {
    let answer = prompt( "Угадай число от 1 до 100");

    if (answer === null) {
       alert("Игра окончена");
    } else if (isNaN(answer) || !isFinite(answer) || answer === "") {
      alert("Введи число!");
      game();
    } else if (+answer > randomInt) {
      alert( "Загаданное число меньше");
      game();
    } else if (+answer < randomInt) {
      alert("Загаданное число больше");
      game();
    } else if (+answer === randomInt) {
      return alert("Поздравляю, Вы угадали!!!");
    } 
  }
  game();
}

guessANumber();