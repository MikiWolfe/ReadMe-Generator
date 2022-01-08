// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter a title for your readMe: ",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your application:",
        name: "description",
    },
    {
        type: "input",
        message: "Instructions for installation:",
        name: "install",
    },
    {
        type: "input",
        message: "Usages of application:",
        name: "use",
    },
    {
        type: "input",
        message: "What testing instructions would you like to include?",
        name: "test",
    },
    {
        type: "input",
        message:"Any contribution guidelines",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Any other contrubitors listed on this project:",
        name: "otherCon",
    },
    {
        type: "input",
        message: "Please enter the URL for your deployed site:",
        name: "deployed"
    },
    {
        type: "input",
        message: "Please enter your business email:",
        name: "email"
    }

];

const license = [
    {
        type: "list",
        message: "Which license would you like to use?",
        choice: [
            
        ]
    }
];
const licenseBadge = ""

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
const generateReadMe = ({title, description, install, use, test, github, deployed, email, otherCon}) =>
`# ${title}
## Discription:
${description}
## Table of Contents:

## Installation:
${install}

## Table of Contents:
-Description
-Install
-Usage 
-Licensing
-Contributing
-Tests
-Questions

## Usage:
${use}

## License:

## Contributing: 
${contrubution}

## Tests:
${test}

## Link to Deployed Site:
${deployed}

## Questions:
Link to GitHub profile: ${github}.
Please contact: ${email} with any questions. 

## Other Contributors (if applicable):
${otherCon}
`

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


