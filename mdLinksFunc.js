const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const marked = require('marked');
const fetch = require('node-fetch');

let arrayMd = [];

const stats = (array) => {
    let brokenLinks = [];
    let activeLinks = [];
    let uniqueLinks;
    let allResults = [];
    let countAllResults = {};
        if((Object.keys(array[0])).includes('access')) {
            array.forEach((element) => {
                allResults.push(element);
                if(element.access === 'ok') {
                    activeLinks.push(element);
                } else if (element.access === 'fail') {
                    brokenLinks.push(element);
                }
            });
            uniqueLinks = [...new Set(allResults)]; 
            countAllResults = [{
                total: allResults.length,
                unique: uniqueLinks.length,
                active: activeLinks.length,
                broken: brokenLinks.length,
            }]
            return countAllResults;
        } else {
            array.forEach((element) => {
                allResults.push(element);
            });
            uniqueLinks = [...new Set(allResults)];
            countAllResults = [{
                total: allResults.length,
                unique: uniqueLinks.length,
            }]
            return countAllResults;
        }
};

const linkValidation = (linksArray) => {
    return new Promise ((resolve, reject) => {
        let allLinksInfo = linksArray.map((link) => {
            return fetch(link.href)
                .then(result => {
                    link.status = result.status;
                    link.access = result.status == 200 ? 'ok' : 'fail'; 
                    // if (result.status === 200) {
                    //     link.status = result.status;
                    //     link.access = 'ok';
                    // //console.log(result.status);
                    // } else {
                    //     link.status = result.status,
                    //     link.access = 'fail'
                    // }
                })
                .catch((error) => console.log(error));
        });
     Promise.all(allLinksInfo)
        .then(() => resolve (linksArray))
        .catch(() => {
            reject('No se obtuvo la información de los links solicitados');
        });
    });
};

const readFile = (file_path) => {
    // console.log(file_path);
    return new Promise ((resolve, reject) => {
    fs.readFile(file_path, "utf-8", (err, data) => {
        if (err) { 
            reject('El archivo no se puede leer');
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
    if(fs.existsSync(file_path)) {
        const stats = fs.lstatSync(file_path);
        if (stats.isDirectory()) {
            let files = fs.readdirSync(file_path);
            files.forEach(file => {
            let fileRoute = path.join(file_path, file);
            const statsContent = fs.lstatSync(fileRoute);
                if(path.extname(file) === '.md') {
                    arrayMd.push(fileRoute);
                } else if (statsContent.isDirectory()) {
                    isFileOrDirectory(fileRoute);
                }
            });
            return arrayMd;
            } else if (stats.isFile()) {
                if(path.extname(file_path) === '.md') {
                    arrayMd.push(file_path);
                    return arrayMd;
                } else {
                    return ('No se encontró ningún archivo con extensión ".md"');
                }
            };
    } else {
        return('No existe el directorio/archivo');
      }
    
};

//  Transformar a ruta absoluta
const getLinksAllFiles = (file_path) => { 
    // Evalúa si la ruta es absoluta, si no lo es, la convierte en absoluta
    arrayMd = [];
    return new Promise ((resolve, reject) => {
        let givenPath = '';
        if(path.isAbsolute(file_path)) {
            givenPath = file_path;
        } else  {
            givenPath = path.resolve(file_path);
        }
        let arrayPaths = isFileOrDirectory(givenPath);
        if (Array.isArray(arrayPaths)) {
            let allFilesPaths = arrayPaths.map(readFile);
            Promise.all(allFilesPaths)
            .then(result => {
                let arrayLinks = result;
                // let mergedArray = arrayLinks.flat(); //.flat() no disponible para versiones anteriores de node
                let mergedArray = arrayLinks.reduce((acc, link) => acc.concat(link), []);
                if(mergedArray.length !== 0) {
                    resolve(mergedArray);
                } else {
                    reject('No se encontraron links en los archivos o directorios indicados')
                }
                resolve(mergedArray);
            }).catch(() => {
                reject('No se obtuvieron los links');
            });
         } else {
            reject(arrayPaths);
        }
    });
};

module.exports = {
    getLinksAllFiles,
    isFileOrDirectory,
    readFile,
    linkValidation,
    stats,
}

//Input para probar rutas combinaciones
//Manda un msj al usuario y recibe un input
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'path', 
//         message: 'Indica la ruta del directorio o archivo',
//     }, 
//     {
//         type: 'list',
//         name: 'validate',
//         message: 'Do you want to validate the links?',
//         choices: [
//             'true',
//             'false'
//         ]

//     }
// ]).then(answer => getLinksAllFiles(answer.path, answer.validate))
//   .catch(error => console.log(error));
