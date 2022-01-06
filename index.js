// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers =>{
        console.log(answers);
        const myMarkdown = markdown( answers);
        // call the write to file function with file name and myMarkdown
    })
}

// Function call to initialize app
init();
