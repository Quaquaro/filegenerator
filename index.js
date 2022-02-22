const func = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What should your function be called?',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which files should be created?',
      choices: ['Component', 'Spec', 'Stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'Please choose at least one line';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    func.writeFile(answers.functionName);
  });
