import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
  const operations = ['+', '-', '*'];
  return operations[getRandomInt(0, operations.length - 1)];
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const totalQuestions = 3;

  for (let i = 0; i < totalQuestions; i += 1) {
    const num1 = getRandomInt(1, 30);
    const num2 = getRandomInt(1, 30);
    const operation = getRandomOperation();

    console.log(`Question: ${num1} ${operation} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer, 10) === calculate(num1, num2, operation)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculate(num1, num2, operation)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
export default playGame;
