const func = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What should your component be called?',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which files should be created?',
      choices: ['component', 'spec', 'stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'Please choose at least one line';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    answers.fileTypes.forEach(type => {
      func.writeFile(answers.functionName, type);
    });
  });
