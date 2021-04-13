const mdLinksFun = require('../mdLinksFunc.js');
const mdLinks = require('../mdLinks.js');
const mocks = require('./mock.js');
let arrayVal = mocks.arrayLinksVal;
let arrayInfo = mocks.arrayLinksInfo;
let arguments0 = mocks.arguments0;
let arrayLinksOfFile = mocks.arrayLinksFile;


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
      expect(result).toEqual([  
        {
          href: 'https://jestjs.io/docs/es-ES/getting-started',
          text: 'Testeo unitario.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://jestjs.io/docs/es-ES/asynchronous',
          text: 'Testeo asíncrono.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://jestjs.io/docs/es-ES/manual-mocks',
          text: 'Uso de librerias de Mock.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
          text: 'http.get',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        },
        {
          href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
          text: 'Recursión.',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        },
        {
          href: 'https://nodejs.org/api/http.htmloptions_callback',
          text: 'Roto',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        }
      ]);
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
      expect(result).toStrictEqual([  
        {
          href: 'https://jestjs.io/docs/es-ES/getting-started',
          text: 'Testeo unitario.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://jestjs.io/docs/es-ES/asynchronous',
          text: 'Testeo asíncrono.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://jestjs.io/docs/es-ES/manual-mocks',
          text: 'Uso de librerias de Mock.',
          file: 'testFile3.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md'
        },
        {
          href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
          text: 'http.get',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        },
        {
          href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
          text: 'Recursión.',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        },
        {
          href: 'https://nodejs.org/api/http.htmloptions_callback',
          text: 'Roto',
          file: 'testFile1.md',
          path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md'
        }
      ])
    });
  });
      it('should return info of each link with relative path of file', () => {
        return (mdLinks('C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md', arguments0))
        .then((result) => {
          expect(result).toStrictEqual(arrayLinksOfFile)});
      });
      it('should return info of each link with relative path of directory and validate true', () => {
        return (mdLinks('./filesMdTest', mocks.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(arrayVal)});
      });
      it('should return info of each link with relative path of file and validate true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', mocks.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(mocks.arrayValFile);
        });
      });
      it('should return info of each link with relative path of file', () => {
        return (mdLinks('C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md', mocks.arguments1))
        .then((result) => {
          expect(result).toStrictEqual(mocks.arrayValFile)});
      });
      it('should return info of each link with relative path of directory and stats true', () => {
        return (mdLinks('./filesMdTest', mocks.arguments2))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 6, unique: 6 }])});
      });
      it('should return info of each link with relative path of file and stats true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', mocks.arguments2))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 3, unique: 3 }])});
      });
      it('should return info of each link with relative path of directory, validate and stats true', () => {
        return (mdLinks('./filesMdTest', mocks.arguments3))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 6, unique: 6, active: 5, broken: 1 }])});
      });
      it('should return info of each link with relative path of file, validate and stasts true', () => {
        return (mdLinks('./filesMdTest/testFile1.md', mocks.arguments3))
        .then((result) => {
          expect(result).toStrictEqual([{ total: 3, unique: 3, active: 2, broken: 1 }])});
      });
      it('should return a message indicates no found md files', () => {
        return (mdLinks('./filesMdTest/testFile3.txt', mocks.arguments0))
        .catch((result) => {
          expect(result).toStrictEqual('No se encontró ningún archivo con extensión ".md"')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', mocks.arguments0))
        .catch((result) => {
          expect(result).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', mocks.arguments1))
        .catch((result) => {
          expect(result).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates invalid path', () => {
        return (mdLinks('./filesMdTet', mocks.arguments2))
        .catch((result) => {
          expect(result).toStrictEqual('No existe el directorio/archivo')});
      });
      it('should return a message indicates do not find links', () => {
        return (mdLinks('./filesMdTest/testFile4.md', mocks.arguments2))
        .catch((result) => {
          expect(result).toStrictEqual('No se encontraron links en los archivos o directorios indicados')});
      });
});



