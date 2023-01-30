
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
    choices: ['MIT'],
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


const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, email, username}) =>
   `# ${title}

   ![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)
   (https://opensource.org/licenses/${license})

    ## Description 
    ${description}

    ## Table of Contents
    - [Installation Instructions] (#installation)
    - [Usage Information] (#usage)
    - [Contribution Guidelines] (#contributing)
    - [Testing Instructions] (#tests)
    - [License] (#license)
    - [Questions] (#email)

  
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
