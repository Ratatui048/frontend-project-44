import readlineSync from 'readline-sync';
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const prime = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const number = getRandomNumber();
        console.log(`Question: ${number}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default prime;
