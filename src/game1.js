import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
