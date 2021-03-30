#!/usr/bin/env node

console.log('Hello world');
const mdLinks = require('./mdLinks.js');
const chalk = require('chalk');
const process = require('process');

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

// argOptions('--validate', null);
// argOptions('--validate', '--stats');
// argOptions(null, '--stats');
// argOptions(null, null);

mdLinks.getLinksAllFiles('./filesMdTest', argOptions)
    .then((result) => {
        let arguments = argOptions(null, null);
        let arrayLinks = result;
        let mergedArray = arrayLinks.flat();
        if(arguments.validate === false && arguments.statistics === false) {
            console.log(`
            -------------------------------------------   RESULTS   -------------------------------------------------\n
                                                          Links\n
            |                LINK                 |             FILE                 |              TEXT            |\n
                    `)
            const showResult = (array) => {
                array.forEach((link) => {
                    console.log(`|    ${link.href}     |   ${link.text}   |   ${link.file}  |`);
                    })
            } 
            showResult(mergedArray); 
        }
    mdLinks.linkValidation(mergedArray)
        .then((result) => {
            if(arguments.validate === true) {
                console.log(result);
            }   
            if (arguments.statistics === true) {
                let statsLinks = mdLinks.stats(result);
                let spaces = ' ';
                console.log(`
                    ----- STATS RESULTS -----\n
                              Links\n
                    | TOTAL | UNIQUE | BROKEN
                    ${spaces.repeat(4)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(7)}${chalk.green.bold(statsLinks.unique)}${spaces.repeat(7)}${chalk.red.bold(statsLinks.broken)}
                    ------------------------\n
                `);
            }
        });
    });

