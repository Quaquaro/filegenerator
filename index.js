const func = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What should your function be called?',
      default: 'generator',
    },
  ])
  .then(answers => {
    func.writeFile(answers.functionName);
    console.info('Answers:', answers.functionName);
  });
