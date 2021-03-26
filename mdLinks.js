const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const marked = require('marked');
const fetch = require('node-fetch');
const chalk = require('chalk');

let arrayMd = [];

const stats = (array) => {
    return new Promise ((resolve, reject) => {
        let brokenLinks = [];
        let uniqueLinks = [];
        let allResults = [];
        let countAllResults = [];
        array.forEach((element) => {
            allResults.push(element);
            if(element.access === 'ok') {
                uniqueLinks.push(element);
            } else if (element.access === 'fail') {
                brokenLinks.push(element);
            }
        });
        countAllResults.push(allResults.length);
        countAllResults.push(uniqueLinks.length);
        countAllResults.push(brokenLinks.length),
        console.log(allResults);
        //console.log(functionalLinks);
        resolve(countAllResults);
        reject('No se pudo obtener la información de cada link')
    });
}

// Asynchronous Javascript and XML
const ajaxValidation = (linksArray) => {
    return new Promise ((resolve, reject) => {
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
            });
        });
        Promise.all(allLinksInfo).then(() => {
            //console.log(linksArray);
            resolve(stats(linksArray));
        }).catch(err => reject(err.message));
    });
};

const linkValidation = (answer, linksArray) => {
    return new Promise ((resolve, reject) => {
        if (answer == 'true') {
            resolve(ajaxValidation(linksArray));
        } else {
            reject('No validaré');
        };
    });
};

const readFile = (file) => {
    return new Promise ((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            reject(new Error('El archivo no se puede leer'));
            //reject('El archivo no se puede leer');
            //reject(err.message)
        } else {
            let fileName = path.basename(file);
            let links = [];
                const renderer = new marked.Renderer();
                renderer.link = (href, title, text) => {
                    if(href.charAt(0) !== '#') {
                        links.push({
                            href: href,
                            text: text,
                            file: fileName,
                            path: file
                        });
                    }
                };
                //console.log(renderer);
                marked(data, {renderer: renderer});
                //console.log(marked(data, {renderer: renderer}));
                //console.log(marked(data));
                //console.log(links);
                resolve(links);
            };
        });
    });
};

//  Saber si es un directorio o un archivo
const isFileOrDirectory = (file_path) => {
    return new Promise ((resolve, reject) => {
        fs.lstat(file_path, (err, stats) => {
            if (err) {
                reject (new Error('No se identifica la información dada'));
            } else if (stats.isDirectory()) {
                let files = fs.readdirSync(file_path);
                files.forEach(file => {
                    let fileRoute = path.join(file_path, file);
                    if(path.extname(file) === '.md') {
                        arrayMd.push(fileRoute);
                    } else if (path.extname(file) === '') {
                        resolve(isFileOrDirectory(fileRoute));
                    }
                })
                    //console.log(arrayMd);
            resolve (arrayMd);
            } else if (stats.isFile()) {
            arrayMd.push(file_path);
            resolve(arrayMd);
            }
        });
    });
};

const getArrayFiles = (filesPath) => {
    return new Promise((resolve, reject) => {
        let files = filesPath;
        let allFilesPaths = files.map(readFile);
        Promise.all(allFilesPaths)
            .then(result => { resolve(result)})
            .catch(err => {reject(new Error ('No se pudieron obtener los links'))})
    });
};

//  Transformar a ruta absoluta
const getLinksAllFiles = (file_path) => { 
    // Evalúa si la ruta es absoluta, si no lo es, la convierte en absoluta
    return new Promise ((resolve, reject) => {
        if(path.isAbsolute(file_path)) {
            isFileOrDirectory(file_path).then((result) => {
                resolve (getArrayFiles(result));
            }).catch((err) => reject(console.log(err)));
        } else  {
            let givenPath = path.resolve(file_path);
            isFileOrDirectory(givenPath).then((result) => {
                resolve (getArrayFiles(result));
            }).catch(err => reject(console.log(err)));  
        }
    });
};

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
]).then((answer) => {
    getLinksAllFiles(answer.path).then((result) => {
    let arrayLinks = result;
    let mergedArray = arrayLinks.flat();
    //console.log(mergedArray);
    linkValidation(answer.validate, mergedArray).then((result) => {
        console.log(result);
        let spaces = ' ';
        console.log(`
                -------- RESULTS --------\n
                           Links
                | TOTAL | UNIQUE | BROKEN
                ${spaces.repeat(4)}${chalk.blue.bold(result[0])}${spaces.repeat(7)}${chalk.green.bold(result[1])}${spaces.repeat(7)}${chalk.red.bold(result[2])}
                ------------------------\n
            `);
    });
 });
}).catch(error => console.log(error));
//absolutePath('C:/Users/negra/Documents/brenda-laboratoria/proyectoCuatro-mdlinks/CDMX010-md-links/filesMdTest');
//readFile('./testFiles/testFile1.md');
//absolutePath('./filesMdTest');
//console.log(sirvo)