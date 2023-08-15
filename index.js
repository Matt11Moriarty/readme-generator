// TODO: Include packages needed for this application

const { generateMarkdown } = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        q1: "What is your title?"
    },
    {
        q2: "Who is the author?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('READ-ME.md', data, (err) => 
        err ? console.log(err) : console.log('Readme generated')
    )
}

// TODO: Create a function to initialize app
function init() {
    generateMarkdown();
}

// Function call to initialize app
init();
