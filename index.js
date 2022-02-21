const func = require('./writeFile');

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is the function called?', answer => {
  func.writeFile(answer);
  console.log(answer);

  rl.close();
});
