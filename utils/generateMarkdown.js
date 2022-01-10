const mit= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
const mitURL = "(https://opensource.org/licenses/MIT)"
const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
const apacheURL= "(https://opensource.org/licenses/Apache-2.0)"
const gpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
const gplURL = "(https://www.gnu.org/licenses/gpl-3.0)"
const bsd = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
const bsdURL = "(https://opensource.org/licenses/BSD-3-Clause)"

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README${badge}

const generateMarkdown = (data) =>

`# ${data.title}

## Description: 
${data.repo}/n
${data.description}

## Table of Contents:

[Description](#description)
[Installation Instructions](#installation-instructions)
[Usage](#usage) 
[Licensing](#licensing)
[Contributors](#contributors)
[Tests](#tests)
[Questions](#questions)

## Installation Instructions
How to install: 
${data.install}

## Usage:
${data.use}

## License
This application is licensed under:
${data.license}

## Contributors
User names of contributors on the project:
${data.contributors}

## Tests
In order to test, please do the following steps:
${data.test}

## Link to Deployed Site
Link to the deployed site: ${data.deployed}
Link to the repo: https://github.com/${data.github}/${data.repo}

## Image of application
Link to a screenshot of the application: ${data.image}

## Questions
Please reach out if you have any questions about this application:
GitHub profile: https://github.com/${data.github}.
Please contact: ${data.email} with any questions. 
`

module.exports = generateMarkdown;
