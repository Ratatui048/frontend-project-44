import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NOD() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const totalQuestions = 3;

  for (let i = 0; i < totalQuestions; i += 1) {
    let num1 = getRandomInt(1, 100);
    let num2 = getRandomInt(1, 100);
    const n1 = num1;
    const n2 = num2;
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    console.log(`Question: ${n1} ${n2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer, 10) === num1) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${num1}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default NOD;
