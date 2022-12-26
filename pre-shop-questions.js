//practice readline
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What pieces are you looking for?\n",
    "What is your budget for today?\n",
    "Are there any stores in particular you would like to shop?\n",
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const questionAnswered = (answer) => {
        answers.push(answer);
        answers.length < questions.length ?
        rl.question(questions[answers.length], questionAnswered) : done(answers);
    };
    rl.question(questions[0], questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("\nTo review our mission:");
    console.log(`We are looking for ${answers[0]} with a spend under ${answers[1]}.`);
    console.log(`First stop ${answers[2]}. Lets go shopping!`);
    process.exit();
});
//adds a semicolon and minor mistype