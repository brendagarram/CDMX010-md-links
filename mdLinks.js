const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const marked = require('marked');
const fetch = require('node-fetch');
const chalk = require('chalk');

let arrayMd = [];

const stats = (array) => {
    let brokenLinks = [];
    let uniqueLinks = [];
    let allResults = [];
    let countAllResults = {};
    array.forEach((element) => {
        allResults.push(element);
        if(element.access === 'ok') {
            uniqueLinks.push(element);
        } else if (element.access === 'fail') {
            brokenLinks.push(element);
        }
    });
    countAllResults = {
        total: allResults.length,
        unique: uniqueLinks.length,
        broken: brokenLinks.length,
    }
    return countAllResults;
};

const linkValidation = (linksArray, answer) => {
    return new Promise ((resolve, reject) => {
        if (answer == 'true') {
            let allLinksInfo = linksArray.map((link) => {
                return fetch(link.href).then(result => {
                    if (result.status === 200) {
                        link.status = result.status;
                        link.access = 'ok';
                        //console.log(result.status);
                    } else {
                        link.status = result.status,
                        link.access = 'fail'
                    }
                }).catch((error) => console.log(error));
            });
        Promise.all(allLinksInfo)
            .then(() => resolve (linksArray))
            .catch(err => {
            reject(console.error('No se obtuvo la información de los links solicitados'))
            console.log(err)});
        } else {
            resolve (linksArray);
        }
    });
};

const readFile = (file_path) => {
    console.log(file_path);
    return new Promise ((resolve, reject) => {
    fs.readFile(file_path, "utf-8", (err, data) => {
        if (err) {
            reject(new Error('El archivo no se puede leer'));
            //reject('El archivo no se puede leer');
            //reject(err.message)
        } else {
            let fileName = path.basename(file_path);
            let links = [];
                const renderer = new marked.Renderer();
                renderer.link = (href, title, text) => {
                    if(href.charAt(0) !== '#') {
                        links.push({
                            href,
                            text,
                            file: fileName,
                            path: file_path
                        });
                    }
                };
                marked(data, {renderer: renderer});
                resolve(links);
            };
        });
    });
};

//  Saber si es un directorio o un archivo
const isFileOrDirectory = (file_path) => {
    const stats = fs.lstatSync(file_path);
        if (stats.isDirectory()) {
            console.log('soy un directorio');
            let files = fs.readdirSync(file_path);
            files.forEach(file => {
            let fileRoute = path.join(file_path, file);
            if(path.extname(file) === '.md') {
                arrayMd.push(fileRoute);
                } else if (path.extname(file) === '') {
                isFileOrDirectory(fileRoute);
                }
            })
            console.log(arrayMd);
            return arrayMd;
            } else if (stats.isFile()) {
                if(path.extname(file_path) === '.md') {
                    arrayMd.push(file_path);
                    return arrayMd;
                } else {
                    return(console.error('No se encontró ningun archivo .md'))
                }
            }
};

//  Transformar a ruta absoluta
const getLinksAllFiles = (file_path, validate) => { 
    // Evalúa si la ruta es absoluta, si no lo es, la convierte en absoluta
        let givenPath = '';
        if(path.isAbsolute(file_path)) {
            givenPath = file_path;
        } else  {
            givenPath = path.resolve(file_path);
        }
        // let arrayPaths = isFileOrDirectory(givenPath);
        // let allFilesPaths = arrayPaths.map(readFile);
        // Promise.all(allFilesPaths)
        //     .then(result => { 
        //         let arrayLinks = result;
        //         let mergedArray = arrayLinks.flat();
        //         console.log(mergedArray);
        //         linkValidation(mergedArray, validate).then((result) => {
        //         //console.log(result);
        //         let statsLinks = stats(result);
        //         console.log(statsLinks);
        //         let spaces = ' ';
        //         console.log(`
        //                 -------- RESULTS --------\n
        //                         Links
        //                 | TOTAL | UNIQUE | BROKEN
        //                 ${spaces.repeat(4)}${chalk.blue.bold(statsLinks.total)}${spaces.repeat(7)}${chalk.green.bold(statsLinks.unique)}${spaces.repeat(7)}${chalk.red.bold(statsLinks.broken)}
        //                 ------------------------\n
        //             `);
        //         }).catch(err => {console.log(err)});
        //     }).catch(err => {console.log(err)});
};

module.exports = {
    getLinksAllFiles,
    isFileOrDirectory,
    readFile,
    linkValidation,
    stats,
}

//Input para probar rutas combinaciones
inquirer.prompt([
    {
        type: 'input',
        name: 'path', 
        message: 'Indica la ruta del directorio o archivo',
    }, 
    {
        type: 'list',
        name: 'validate',
        message: 'Do you want to validate the links?',
        choices: [
            'true',
            'false'
        ]

    }
]).then(answer => getLinksAllFiles(answer.path, answer.validate))
  .catch(error => console.log(error));
//absolutePath('C:/Users/negra/Documents/brenda-laboratoria/proyectoCuatro-mdlinks/CDMX010-md-links/filesMdTest');
//readFile('./testFiles/testFile1.md');
//absolutePath('./filesMdTest');
//console.log(sirvo)