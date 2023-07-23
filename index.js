// //Написати цикл, який просить людину ввести число від 1 до 50 кратне 7.
// Запитувати до тих пір, доки людина не введе правильно.

// * обмежити кількість спроб до 5
// ** зробити задачу двома способами через while та for
// *** зробити це за допомогою функції, щоб цикл був всередині функції

let count = 0;
const MAX_TRY = 5;
const MIN_NUM = 1;
const MAX_NUM = 50;
const attemptsOver = "attempts are over";
const correctValue = "correct";
const notCorrectValue = "wrong";
while (true) {
  if (userInputNum >= MIN_NUM &&
    userInputNum <= MUX_NUM &&
    userInputNum % 7 === 0) {
      alert (Correct);
      break;
    }
    if (count === MAX_TRY) {
      alert (attemptsOver);
      break;
    }
    alert (notCorrect);
}


for (let = 0; let < MAX_TRY, let++) {
  const userInputNum = prompt ("enter number");
  if (
    userInputNum >= MIN_NUM &&
    userInputNum <= MUX_NUM &&
    userInputNum % 7 === 0
  ) {
    alert (Correct);
    break;
  }
  if (let === MAX_TRY) {
    alert (attemptsOver);
  }
}


const checkMuliplicity = function (
  maxTry = MAX_TRY,
  minNumber = MIN_NUM,
  maxNumber = MAX_NUM,
  multiplicity = MULTIPLICITY,
  ) {
  for (let i = 0; i < maxTry; i++) {
    const userInputNum = prompt ("enter Number");

    if (userInputNum >= minNumber &&
      userInputNum <= maxNumber &&
      userInputNum % multiplicity === 0) {
        return "Correct";
      }
  }
  return "notCorrect";
}
console.log(checkMuliplicity(2, 2, 20, 4));