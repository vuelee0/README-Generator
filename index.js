// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkDown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps for the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on how to use your project.?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide a guideline on how to contribute to your project.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter testing instructions for testing your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license from the choices below:',
        choices: ['Apache', 'Berkeley', 'GPL', 'MIT', 'Mozilla', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
