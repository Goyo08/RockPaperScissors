const options = ["rock", "paper", "scissors"];

function computerPlay() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
};

console.log(computerPlay());