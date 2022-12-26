const collectAnswers = require("./library/collect-answers")

const questions = [
    "What pieces are you looking for?\n",
    "What is your budget for today?\n",
    "Are there any stores in particular you would like to shop?\n",
];

collectAnswers(questions, answers => {
    console.log("\nTo review our mission:");
    console.log(`We are looking for ${answers[0]} with a spend under ${answers[1]}.`);
    console.log(`First stop ${answers[2]}. Lets go shopping!`);
    process.exit();
});