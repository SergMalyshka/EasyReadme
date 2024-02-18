
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeText = generateMarkdown.generateMarkdown(data);
    fs.writeFile('README.md', readMeText, (err) =>
        err ? console.error(err) : console.log('Generating Readme....')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your GitHub username?",
                name: 'username',
            },
            {
                type: 'input',
                message: "What is your Email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your project's name?",
                name: 'projectName',
            },
            {
                type: 'input',
                message: "Please write a short description of your project",
                name: 'description',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                message: "What command should be run to install dependencies?",
                name: 'dependencyCommands',
            },
            {
                type: 'input',
                message: "What command should be run to run tests?",
                name: 'testCommands',
            },
            {
                type: 'input',
                message: "What does the user need to know about using the repo?",
                name: 'info',
            },
            {
                type: 'input',
                message: "What does the user need to know about contributing to the repo?",
                name: 'contribution',
            },

        ])
        .then((response) =>
            writeToFile("README.md", response)
        );
}



// Function call to initialize app
init();
