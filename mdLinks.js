const md_Links = require('./mdLinksFunc.js');

const mdLinks = (path, args) => {
    return new Promise ((resolve, reject) => {
        if(args.validate === false && args.statistics === false) {
            md_Links.getLinksAllFiles(path)
            .then(result => {
                resolve(result);
            })
            .catch(error => reject(error));
        } else if (args.validate === true && args.statistics === false) {
            md_Links.getLinksAllFiles(path)
            .then(result => {
                return md_Links.linkValidation(result)
            })
            .then(result => resolve(result))
            .catch(error => reject(error));
        } else if (args.validate === true && args.statistics === true) {
            md_Links.getLinksAllFiles(path)
            md_Links.getLinksAllFiles(path)
            .then(result => {
                return md_Links.linkValidation(result)
            })
            .then(result => {
                resolve(md_Links.stats(result))
            })
            .catch(error => reject(error));
        } else if (args.validate === false && args.statistics === true) {
            md_Links.getLinksAllFiles(path)
            .then(result => {
                resolve(md_Links.stats(result))
                // if(Array.isArray(result)) {
                //     if(Object.prototype.toString.call(result[0]) !== '[object String]') {
                //         resolve(md_Links.stats(result))
                //     } else {
                //         resolve(result[0]);
                //     }
                // } else {
                //     resolve (result);
                // }
            })
            .catch(error => reject(error));
        }
    });
};

module.exports = mdLinks;