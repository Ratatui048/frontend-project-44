import readlineSync from 'readline-sync';

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 5) + 1;

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return {
    progression: progression.join(' '),
    hiddenValue,
  };
}
function playGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const { progression, hiddenValue } = generateProgression();
    console.log(`Question: ${progression}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (userAnswer === hiddenValue) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default playGame;
