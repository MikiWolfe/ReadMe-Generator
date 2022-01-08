// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const markdown = require('./utils/generateMarkdown')

// const questions = ""

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
const generateReadMe = ({title, description, license, install, use, test, github, deployed, email, otherCon}) =>
`# ${title}
## Discription: ${badge}
${description}
## Table of Contents:
#Installation
#Usage 
#Licensing
#Contributing
#Tests
#Questions

[Installation] #Installation:
How to install: ${install}

[Usage] #Usage:
${use}

[License]#License:
This application is licensed under:
${license}

[Contributing] #Contributing: 
How to contribute to the project:
${contrubution}

[Tests] #Tests:
In order to test, please do the following steps:
${test}

## Link to Deployed Site:
Here is a link to the deployed site: ${deployed}

[Questions] #Questions:
Link to GitHub profile: ${github}.
Please contact: ${email} with any questions. 

## Other Contributors (if applicable):
-${otherCon}
`
inquirer
.prompt([
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
        message:"Any contribution guidelines for the repo?",
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
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "none", "BSD"]
    },
    {
        // badge
    },

])

.then((answers) => fs.writeFile("index.html", generateHTML(answers)))
.then(() => console.log("Success!"))
// TODO: Create a function to initialize app
// function init() {
//     inquirer
//     .prompt(questions)
//     .then(answers =>{
//         console.log(answers);
//         const myMarkdown = markdown( answers);
//         call the write to file function with file name and myMarkdown
//     })
// }

// Function call to initialize app
// init();


