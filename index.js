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
        message: "Title for your readMe: ",
        name: "title",
    },
    {
        type: "input",
        message: "Title of your GitHub repo",
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
        message: "Any testing instructions?",
        name: "test",
    },
    {
        type: "input",
        message:"usernames of contributors:",
        name: "contributors",
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "URL for deployed site:",
        name: "deployed"
    },
    {
        type: "input",
        message: "Image url if aplicable:",
        name: "image"
    },
    {
        type: "input",
        message: "Business email:",
        name: "email"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3","none"]
    },
   
])
    .then((data) => fs.writeFileSync(`./utils/${data.title}.md`, generateMarkdown(data)))
    .then(() => console.log("ReadME has been generated."))
    .catch((err) => console.error(err))



