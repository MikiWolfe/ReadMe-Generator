const inquirer =require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const fs =  require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { Cipher } = require('crypto');

const questions = 
inquirer
.prompt([
    {
        type: "input",
        message: "Please enter a title for your readMe: ",
        name: "title",
    },
    {
        type: "input",
        message: "Enter the name of your repo",
        name: "repo"
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
        message:"usernames of contributors:",
        name: "contributors",
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter the URL for your deployed site:",
        name: "deployed"
    },
    {
        type: "input",
        message: "Please link an image url if aplicable:",
        name: "image"
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
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3","none"]
    },
   
])

    .then((data) => fs.writeFileSync(`${data.title}.md`, generateMarkdown(data)))
    .then(() => console.log(`${data.title}.md has been generated.`))
    .catch((err) => console.error(err))



