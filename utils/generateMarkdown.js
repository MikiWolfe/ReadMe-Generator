const mit= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const gpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
const bsd = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

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
${data.description}
Repository name: ${data.repo}

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Licensing](#licensing)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${data.install}
## Usage
${data.use}
## Licensing
${data.license}
## Contributors
${data.contributors}
## Tests
${data.test}

## Questions
Please reach out if you have any questions about this application:
GitHub profile: https://github.com/${data.github}
Please contact: ${data.email} with any questions. 

### Link to Deployed Site
Link to the deployed site: ${data.deployed}
Link to the repo: https://github.com/${data.github}/${data.repo}

### Image of application
Link to a screenshot of the application: ${data.image}
`

module.exports = generateMarkdown;