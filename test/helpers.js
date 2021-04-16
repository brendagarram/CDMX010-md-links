
let arguments0 = {
    validate: false,
    statistics: false,
};

let arguments1 = {
  validate: true,
  statistics: false
};

let arguments2 = {
  validate: false,
  statistics: true
};

let arguments3 = {
  validate: true,
  statistics: true
};

const arrayLinksVal = [
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
  ];

const arrayLinksInfo = [  
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
  ];

const arrayLinksInfo1 = [  
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
];

const arrayLinksFile = [
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
];

const arrayValFile = [
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
];

const arrayLinksVal1 = [  
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
];

module.exports = {
  arrayLinksVal,
  arrayLinksVal1,
  arrayLinksInfo,
  arrayLinksInfo1,
  arguments0,
  arguments1,
  arguments2,
  arguments3,
  arrayLinksFile,
  arrayValFile
};
