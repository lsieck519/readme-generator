// Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the steps required to install your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license, if applicable',
    choices: ['MIT','Apache 2.0','Mozilla Public 2.0'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines here:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter instructions for testing this application here:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your Github username:',
    },
]);
};


// function renderLicenseBadge(license) {}
// function renderLicenseLink(license) {}
// function renderLicenseSection(license) {}

  //License badge 
//   const createBadge = (license) => {
//     switch (license) {
//     case 'Apache 2.0':
//       badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//       break;
//     case 'MIT':
//       badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//       break;
//     case 'Mozilla Public 2.0':
//       badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//       break;
//     default:
//       break;
//   }
// }

const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, email, username}) =>
   `# ${title}
   ![License Badge](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)

    ## Description 
    ${description}

    ## Table of Contents
    - [Installation Instructions](#installation)
    - [Usage Information](#usage)
    - [Contribution Guidelines](#contributing)
    - [Testing Instructions](#tests)
    - [License](#license)
    - [Questions](#email)

    ## Installation 
    ${installation}
  
    ## Usage 
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## License 
    ${license}

    ## Questions
    - Email: ${email}
    - GitHub: https://github.com/${username}

  `;
  

const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created readme'))
      .catch((err) => console.error(err));
  };

init();
