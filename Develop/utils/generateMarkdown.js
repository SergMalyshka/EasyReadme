
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case `Apache 2.0`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case `GPL 3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case `BSD 3`:
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case `None`:
      return ``
      break;
  } 
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.projectName}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  
  You can install the application and all needed dependencies by running the follwoing command:


  \`${data.dependencyCommands}\`


  ## Usage
  
  ${data.info}

  ## License
  
  ${renderLicenseSection(data.license)}

  This project is licensed under the ${data.license} license

  ## Tests
  
  To run the test associated with the application run the following command: 


  \`${data.testCommands}\`


  ## Contributing
  
  If you wish to contribute: ${data.contribution}
  
  ## Questions
  
  If you have any more questions you can contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}`
}

module.exports = {
  generateMarkdown
}
