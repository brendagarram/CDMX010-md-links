const mdLinks = require('./mdLinks.js');

const argOptions = (arg1, arg2) => {
  let arguments = {
      validate: false,
      statistics: false,
  }
  if(arg1 === '--validate' || arg1 === '-v') {
      arguments.validate = true
  } 
  if (arg2 === '--stats' || arg2 === '-s') {
      arguments.statistics = true
  }
  console.log(arguments);
  return arguments
}

argOptions('--validate', null);
argOptions('--validate', '--stats');
argOptions(null, '--stats');
argOptions(null, null);



