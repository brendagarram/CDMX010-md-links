const mdLinksFun = require('../mdLinksFunc.js');
const mdLinks = require('../mdLinks.js');
const helpers = require('./helpers.js');
let arrayVal = helpers.arrayLinksVal;
let arrayInfo = helpers.arrayLinksInfo;
let arguments0 = helpers.arguments0;
let arrayLinksOfFile = helpers.arrayLinksFile;


describe('stats return a array with information about all links', () => {
  it('should be a const defined', () => {
    expect(mdLinksFun.stats).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinksFun.stats).toBe('function');
  });
  it('should return stats of all links', () => {
    expect(mdLinksFun.stats(arrayVal)).toEqual([{ total: 6, unique: 6, active: 5, broken: 1 }]);
  });
  it('should return stats of all links', () => {
    expect(mdLinksFun.stats(arrayInfo)).toEqual([{ total: 6, unique: 6 }]);
  });
});

describe('linksValidation returns a promise with information about all links', () => {
  it('should be a const defined', () => {
    expect(mdLinksFun.linkValidation).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinksFun.linkValidation).toBe('function');
  });
  it('should return info of each link', () => {
    return (mdLinksFun.linkValidation(arrayInfo)).then(result => 
      expect(result).toStrictEqual(arrayVal));
  });
});

describe('readFile returns a promise with files .md', () => {
  it('should be a const defined', () => {
    expect(mdLinksFun.readFile).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinksFun.readFile).toBe('function');
  });
});

describe('mdlinks returns a promise with information about all links', () => {
  it('should be a const defined', () => {
    expect(mdLinks).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return info of each link', () => {
    return (mdLinks('C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest', arguments0))
    .then((result) => {
      expect(result).toEqual(helpers.arrayLinksInfo1);
    });
  });
  it('should return info of each link with relative path of file', () => {
    return (mdLinks('./filesMdTest/testFile1.md', arguments0))
    .then((result) => {
      expect(result).toStrictEqual(arrayLinksOfFile)});
  });
  it('should return info of each link with relative path of directory', () => {
    return (mdLinks('./filesMdTest', arguments0))
    .then((result) => {
      expect(result).toStrictEqual(helpers.arrayLinksVal1)
    });
  });
      it('should return info of each link with relative path of file', () => {
        return (mdLinks('C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md', arguments0))
        .then((result) => {
          expect(result).toStrictEqual(arrayLinksOfFile)});
      });
      it('should return info of each link with relative path of directory and validate true', () => {
        return (mdLinks('./filesMdTest', helpers.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(arrayVal)});
      });
      it('should return info of each link with relative path of file and validate true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', helpers.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(helpers.arrayValFile);
        });
      });
      it('should return info of each link with relative path of file', () => {
        return (mdLinks('C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md', helpers.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(helpers.arrayValFile)});
      });
      it('should return info of each link with relative path of directory and stats true', () => {
        return (mdLinks('./filesMdTest', helpers.arguments2))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 6, unique: 6 }])});
      });
      it('should return info of each link with relative path of file and stats true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', helpers.arguments2))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 3, unique: 3 }])});
      });
      it('should return info of each link with relative path of directory, validate and stats true', () => {
        return (mdLinks('./filesMdTest', helpers.arguments3))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 6, unique: 6, active: 5, broken: 1 }])});
      });
      it('should return info of each link with relative path of file, validate and stasts true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', helpers.arguments3))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 3, unique: 3, active: 2, broken: 1 }])});
      });
      it('should return a message indicates no found md files', () => {
        return (mdLinks('./filesMdTest/testFile3.txt', helpers.arguments0))
        .catch((error) => {
          expect(error.message).toStrictEqual('No se encontró ningún archivo con extensión ".md"')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', helpers.arguments0))
        .catch((error) => {
          expect(error.message).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', helpers.arguments1))
        .catch((error) => {
          expect(error.message).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', helpers.arguments2))
        .catch((error) => {
          expect(error.message).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates do not find links', () => {
        return (mdLinks('./filesMdTest/testFile4.md', helpers.arguments2))
        .catch((error) => {
          expect(error.message).toStrictEqual('No se encontraron links en los archivos o directorios indicados')});
      });
});



