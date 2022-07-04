function renderLicenseYear(data) {
  if(data.license ==="None") 
    return "";
  else if(data.year){
    let year = data.year;
     return year
    }
     else (data.year ==="")
     return ""
  }
  
  function renderLicenseAuthor(data) {
    if(data.owner ==="None") 
      return "";
    else if(data.owner){
      let owner = data.owner;
       return owner
      }
       else (data.owner ==="")
       return ""
    }

function renderLicenseBadge(data) {
  console.log("data", data)
  if (data.license === "MIT") return mitBadge;
  else if (data.license === "Apache 2.0") return apacheBadge;
  else if (data.choices === "GPL 3.0") return gplBadge;
  else if (data.choices === "BSD 3") return bsdBadge;
  else if (data.license === "None") return "";
}

function renderLicenseLink(data) {
  if (data.license === "MIT") return mitURL;
  else if (data.license === "Apache 2.0") return apacheURL;
  else if (data.choices === "GPL 3.0") return gplURL;
  else if (data.choices === "BSD 3") return bsdURL;
  else if (data.license === "None") return "";
}

function renderLicenseSection(data) {
  if (data.license === "MIT") return mitBlurb;
  else if (data.license === "Apache 2.0") return apacheBlurb;
  else if (data.choices === "GPL 3.0") return gplBlurb;
  else if (data.choices === "BSD 3") return bsdBlurb;
  else if (data.license === "None") return "";
}


const mitBadge =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const apacheBadge =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gplBadge =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const bsdBadge =
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

const mitURL = "https://opensource.org/licenses/MIT";
const apacheURL = "https://opensource.org/licenses/Apache-2.0";
const gplURL = "https://www.gnu.org/licenses/gpl-3.0";
const bsdURL = "https://opensource.org/licenses/BSD-2-Clause";

const mitBlurb = `Copyright Permission is hereby granted, free of charge, 
to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, 
distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.`
const apacheBlurb = `Copyright Licensed under the Apache License, Version 2.0 
(the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
const gplBlurb = `This program is free software: you can redistribute it 
and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope 
that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of 
the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

const bsdBlurb = ` Redistribution and use in source and binary forms, 
with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE 
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;



const generateMarkdown = (data) =>
  `# ${data.title}
${renderLicenseBadge(data)}
## Description: 
${data.description}
Repository name: ${data.repo}

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Licensing](#licensing)
* [Contributors](#contributors)
* [Tests](#tests)
* [Technology](#Technology)
* [Questions](#questions)

## Installation 
${data.install}
## Usage
${data.use}
## Licensing
${renderLicenseYear(data)} ${renderLicenseAuthor(data)}
${renderLicenseSection(data)}
${renderLicenseLink(data)}
## Contributors
${data.contributors}
## Tests
${data.test}
## Technology 
List of technologies used: 
${data.technology}
## Questions
Please reach out if you have any questions about this application:
GitHub profile: https://github.com/${data.github}
Please contact: ${data.email} with any questions. 

### Link to Deployed Site
Link to the deployed site: ${data.deployed}
Link to the repo: https://github.com/${data.github}/${data.repo}

### Image of application
Link to a screenshot of the application: ${data.image}
`;

module.exports = generateMarkdown;
