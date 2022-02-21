const fs = require('fs');

function writeFile(name) {
  fs.writeFileSync(
    `./${name}`,
    `function ${name} () {

    }`
  );
}

module.exports = { writeFile };
