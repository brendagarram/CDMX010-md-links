#!/usr/bin/env node

const mdLinksFunc = require('./mdLinksFunc.js');
const mdLinks = require('./mdLinks.js');
const chalk = require('chalk');
const process = require('process');
const conTable = require('console.table');
const asciitable = require('asciitable');
const colors = require('colors');

let argPath = process.argv[2];
let arg1 = process.argv[3];
let arg2 = process.argv[4];


let arguments = {
    validate: false,
    statistics: false,
}
if(arg1 === '--validate' || arg1 === '-v' || arg2 === '--validate' || arg2 === '-v') {
    arguments.validate = true
}
if (arg2 === '--stats' || arg2 === '-s' || arg1 === '--stats' || arg1 === '-s') {
    arguments.statistics = true
}
  
mdLinks(argPath, arguments)
    .then(result => {
        let linksObject = result;
        console.log(result);
        if(Array.isArray(linksObject) && linksObject.length !== 0) {
                if(arguments.validate === false && arguments.statistics === false) { 
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
                            text: element.text.substr(0, 50).green,
                            file: chalk.yellow(element.file),
                        });
                    })
                    const table = asciitable(optionsGralTable, showGralInfo);
                    console.log(table);
                } else if (arguments.validate === true && arguments.statistics === false) {
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
                                text: element.text.green,
                                file: chalk.yellow(element.file),
                            })
                        } else {
                            showValInfo.push({
                                access: element.access.bgRed,
                                href: chalk.magenta(element.href),
                                status: chalk.blue.bold(element.status),
                                text: element.text.substr(0, 50).green,
                                file: chalk.yellow(element.file),
                                })
                            }
                        })
                    const table = asciitable(optionsValTable, showValInfo);
                    console.log(table);
                } else if (arguments.validate === true && arguments.statistics === true) {
                    let statsLinks = result[0];
                        let spaces = ' ';
                        console.log(`
                            ----------  STATS RESULTS  ---------\n
                                      Links\n
                            | TOTAL | UNIQUE | ACTIVE | BROKEN |
                            ${spaces.repeat(4)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(7)}${chalk.yellow.bold(statsLinks.unique)}${spaces.repeat(9)}${chalk.green.bold(statsLinks.active)}${spaces.repeat(7)}${chalk.red.bold(statsLinks.broken)}
                            -------------------------------------\n
                        `);
                } else if (arguments.validate === false && arguments.statistics === true) {
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

// mdLinks.getLinksAllFiles(argPath, arguments)
//     .then((result) => {
//         let arrayLinks = result;
//         // let mergedArray = arrayLinks.flat(); .flat() no disponible para versiones anteriores de node
//         let mergedArray = arrayLinks.reduce((acc, link) => acc.concat(link), []);
//         if(arguments.validate === false && arguments.statistics === false) { 
//             const optionsGralTable = {
//                 leftPad: 3,
//                 columns: [
//                   { field: "href",  name: chalk.magenta("href") },
//                   { field: "text", name: chalk.green("text") },
//                   { field: "file",  name: chalk.yellow("file") },
//                 ]
//             };
//             let showGralInfo = [];
//             mergedArray.forEach((element) => {
//                 showGralInfo.push({
//                     href: chalk.magenta(element.href),
//                     text: element.text.green,
//                     file: chalk.yellow(element.file),
//                 });
//             })
//             const table = asciitable(optionsGralTable, showGralInfo);
//             console.log(table);
//         }
//         mdLinks.linkValidation(mergedArray)
//             .then((result) => {
//                 let validateArray = result;
//                 if(arguments.validate === true) {
//                     const optionsValTable = {
//                         leftPad: 2,
//                         columns: [
//                           { field: "access",  name: chalk.cyan("access") },
//                           { field: "href",  name: chalk.magenta("href") },
//                           { field: "status",  name: chalk.blue("status") },
//                           { field: "text", name: chalk.green("text") },
//                           { field: "file",  name: chalk.yellow("file") },
//                         ]
//                     };
//                     let showValInfo = [];
//                     validateArray.forEach((element) => {
//                         if(element.access == 'ok') {
//                             showValInfo.push({
//                                 access: element.access.bgGreen,
//                                 href: chalk.magenta(element.href),
//                                 status: chalk.blue.bold(element.status),
//                                 text: element.text.green,
//                                 file: chalk.yellow(element.file),
//                             })
//                         } else {
//                             showValInfo.push({
//                                 access: element.access.bgRed,
//                                 href: chalk.magenta(element.href),
//                                 status: chalk.blue.bold(element.status),
//                                 text: element.text.substr(0, 50).green,
//                                 file: chalk.yellow(element.file),
//                             })
//                         }
//                     })
//                     const table = asciitable(optionsValTable, showValInfo);
//                     console.log(table);
//                 }   
//                 if (arguments.statistics === true) {
//                     let statsLinks = mdLinks.stats(result);
//                     let spaces = ' ';
//                     console.log(`
//                     ----- STATS RESULTS -----\n
//                               Links\n
//                     | TOTAL | UNIQUE | BROKEN
//                     ${spaces.repeat(4)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(7)}${chalk.green.bold(statsLinks.unique)}${spaces.repeat(7)}${chalk.red.bold(statsLinks.broken)}
//                     ------------------------\n
//                     `);
//                 }
//             });
// });
