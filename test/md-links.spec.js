const mdLinks = require('./../mdLinks.js');



describe('stats return a array with information about all links', () => {
  it('should be a const defined', () => {
    expect(mdLinks.stats).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinks.stats).toBe('function');
  });
  it('should return stats of all links', () => {
    expect(mdLinks.stats([
      {
        href: 'https://jestjs.io/docs/es-ES/getting-started',
        text: 'Testeo unitario.',
        file: 'testFile3.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
        status: 200,
        access: 'ok'
      },
      {
        href: 'https://jestjs.io/docs/es-ES/asynchronous',
        text: 'Testeo asíncrono.',
        file: 'testFile3.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
        status: 200,
        access: 'ok'
      },
      {
        href: 'https://jestjs.io/docs/es-ES/manual-mocks',
        text: 'Uso de librerias de Mock.',
        file: 'testFile3.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
        status: 200,
        access: 'ok'
      },
      {
        href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
        text: 'http.get',
        file: 'testFile1.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
        status: 200,
        access: 'ok'
      },
      {
        href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
        text: 'Recursión.',
        file: 'testFile1.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
        status: 200,
        access: 'ok'
      },
      {
        href: 'https://nodejs.org/api/http.htmloptions_callback',
        text: 'Roto',
        file: 'testFile1.md',
        path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
        status: 404,
        access: 'fail'
      }
    ])).toEqual({ total: 6, unique: 5, broken: 1 });
  })
});

describe('linksValidation returns a promise with information about all links', () => {
  it('should be a const defined', () => {
    expect(mdLinks.linkValidation).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof mdLinks.linkValidation).toBe('function');
  });
  it('should return info of each link', () => {
    return (mdLinks.linkValidation([  
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
    ], 'true')).then(result => 
      expect(result).toStrictEqual(
        [
          {
            href: 'https://jestjs.io/docs/es-ES/getting-started',
            text: 'Testeo unitario.',
            file: 'testFile3.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
            status: 200,
            access: 'ok'
          },
          {
            href: 'https://jestjs.io/docs/es-ES/asynchronous',
            text: 'Testeo asíncrono.',
            file: 'testFile3.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
            status: 200,
            access: 'ok'
          },
          {
            href: 'https://jestjs.io/docs/es-ES/manual-mocks',
            text: 'Uso de librerias de Mock.',
            file: 'testFile3.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\moreMds\\testFile3.md',
            status: 200,
            access: 'ok'
          },
          {
            href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
            text: 'http.get',
            file: 'testFile1.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
            status: 200,
            access: 'ok'
          },
          {
            href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
            text: 'Recursión.',
            file: 'testFile1.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
            status: 200,
            access: 'ok'
          },
          {
            href: 'https://nodejs.org/api/http.htmloptions_callback',
            text: 'Roto',
            file: 'testFile1.md',
            path: 'C:\\Users\\negra\\Documents\\brenda-laboratoria\\proyectoCuatro-mdlinks\\CDMX010-md-links\\filesMdTest\\testFile1.md',
            status: 404,
            access: 'fail'
          }
        ]
    ));
  });
});

