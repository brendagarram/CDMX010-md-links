#!/usr/bin/env node
//Shebang que indica el tipo de archivo a leer
const mdLinks = require('./mdLinks.js');
const chalk = require('chalk');
const process = require('process');
const asciitable = require('asciitable');
const colors = require('colors');

let argPath = process.argv[2];
let arg1 = process.argv[3];
let arg2 = process.argv[4];


const args = {
    validate: false,
    statistics: false,
};

if(arg1 === '--validate' || arg1 === '-v' || arg2 === '--validate' || arg2 === '-v') {
    args.validate = true;
}
if (arg2 === '--stats' || arg2 === '-s' || arg1 === '--stats' || arg1 === '-s') {
    args.statistics = true;
}
  
mdLinks(argPath, args)
    .then(result => {
        let linksObject = result;
        if(Array.isArray(linksObject) && linksObject.length !== 0) {
            if(args.validate === false && args.statistics === false) { 
                const optionsGralTable = {
                    leftPad: 3,
                    columns: [
                        { field: "href",  name: chalk.magenta("href") },
                        { field: "text", name: chalk.green("text") },
                        { field: "file",  name: chalk.yellow("file") },
                    ]
                };
                let showGralInfo = [];
                linksObject.forEach((element) => {
                    showGralInfo.push({
                        href: chalk.magenta(element.href),
                        //text: chalk.green(element.text),
                        text: element.text.substr(0, 50).green,
                        file: chalk.yellow(element.file),
                    });
                })
                const table = asciitable(optionsGralTable, showGralInfo);
                console.log(table);
            } else if (args.validate === true && args.statistics === false) {
                let validateArray = result;
                const optionsValTable = {
                    leftPad: 2,
                    columns: [
                        { field: "access",  name: chalk.cyan("access") },
                        { field: "href",  name: chalk.magenta("href") },
                        { field: "status",  name: chalk.blue("status") },
                        { field: "text", name: chalk.green("text") },
                        { field: "file",  name: chalk.yellow("file") },
                    ]
                };
                let showValInfo = [];
                validateArray.forEach((element) => {
                    if(element.access == 'ok') {
                        showValInfo.push({
                            access: element.access.bgGreen,
                            href: chalk.magenta(element.href),
                            status: chalk.blue.bold(element.status),
                            text: element.text.substr(0, 50).green,
                            file: chalk.yellow(element.file),
                        })
                    } else {
                        showValInfo.push({
                            access: element.access.bgRed,
                            href: chalk.magenta(element.href),
                            status: chalk.blue.bold(element.status),
                            text: element.text.substr(0, 50).green,
                            file: chalk.yellow(element.file),
                        });
                    }
                });
                const table = asciitable(optionsValTable, showValInfo);
                console.log(table);
            } else if (args.validate === true && args.statistics === true) {
                let statsLinks = result[0];
                let spaces = ' ';
                    console.log(`
                            ----------  STATS RESULTS  ---------\n
                                      Links\n
                            | TOTAL | UNIQUE | ACTIVE | BROKEN |
                            ${spaces.repeat(4)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(7)}${chalk.yellow.bold(statsLinks.unique)}${spaces.repeat(9)}${chalk.green.bold(statsLinks.active)}${spaces.repeat(7)}${chalk.red.bold(statsLinks.broken)}
                            -------------------------------------\n
                    `);
            } else if (args.validate === false && args.statistics === true) {
                let statsLinks = result[0];
                    let spaces = ' ';
                    console.log(`
                            ----- STATS RESULTS -----\n
                                      Links\n
                            |   TOTAL   |   UNIQUE   |
                            ${spaces.repeat(6)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(11)}${chalk.green.bold(statsLinks.unique)}
                            ------------------------\n
                    `);
            } 
        } else {
            console.log(chalk.blue(linksObject));
        }
    }).catch(error => console.log(chalk.magenta(error)));
