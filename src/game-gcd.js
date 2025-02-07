import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcdpoisck(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function NOD() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    let correctAnswers = 0;
    const totalQuestions = 3;

    for (let i = 0; i < totalQuestions; i++) {
        const num1 = getRandomInt(1, 100);
        const num2 = getRandomInt(1, 100);
        const correctAnswer = gcdpoisck(num1, num2);

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (parseInt(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}

export default NOD;
