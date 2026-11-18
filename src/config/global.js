export default {
  global: {
    Name: 'Fundamentos estratégicos de mercadeo',
    Description:
      'BREVE DESCRIPCIÓN	Este componente desarrolla los fundamentos de la competitividad y la planeación estratégica como base para la formulación de estrategias de mercadeo. El aprendiz comprenderá la relación entre el diagnóstico del mercado, el análisis del entorno, el direccionamiento estratégico, la segmentación, los sistemas de distribución y el <em>e-marketing</em>, fortaleciendo su capacidad para interpretar información y orientar decisiones estratégicas en contextos organizacionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Competitividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores que influyen en la competitividad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación con el mercado y los objetivos de mercadeo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnósticos del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Propósito del diagnóstico del mercado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fuentes de información',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de factores externos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ventaja competitiva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mercados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Competencia nacional e internacional',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Demanda y oferta',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis interno de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Productividad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Valor a los procesos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Valor a los clientes',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Direccionamiento estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Propósito del direccionamiento estratégico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Objetivos organizacionales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Relación con los objetivos de mercadeo',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Propósito de la planeación estratégica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de planeación estratégica',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Propósito de la segmentación del mercado',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Segmentos objetivo y segmentos potenciales',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Necesidades, expectativas y comportamiento de los segmentos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Sistemas de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Clima político',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Clima económico',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Clima social de los mercados',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: '<em>E-marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Propósito del <em>e-marketing</em>',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Aplicación como estrategia de mercadeo',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo:
              'Relación con el cumplimiento de los objetivos organizacionales',
            hash: 't_9_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis interno',
      significado:
        'Evaluación de las capacidades y condiciones propias de la organización para apoyar la toma de decisiones estratégicas.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una organización para fortalecer su posición en el mercado mediante decisiones estratégicas y aprovechamiento de sus recursos.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes o servicios que los consumidores requieren en un mercado bajo determinadas condiciones.',
    },
    {
      termino: 'Diagnóstico del mercado',
      significado:
        'Proceso de análisis que permite comprender las condiciones del entorno para orientar decisiones de mercadeo.',
    },
    {
      termino: 'Direccionamiento estratégico',
      significado:
        'Proceso mediante el cual la organización define el rumbo que orientará sus decisiones y objetivos.',
    },
    {
      termino: '<em>E-marketing</em>',
      significado:
        'Aplicación de medios digitales para apoyar la implementación de estrategias de mercadeo alineadas con los objetivos organizacionales.',
    },
    {
      termino: 'Oferta',
      significado:
        'Conjunto de bienes o servicios que las organizaciones ponen a disposición del mercado para satisfacer necesidades.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Proceso de organización de acciones orientadas al logro de los objetivos establecidos por la organización.',
    },
    {
      termino: 'Productividad',
      significado:
        'Capacidad de la organización para desarrollar sus actividades mediante el aprovechamiento eficiente de sus recursos.',
    },
    {
      termino: 'Segmentación del mercado',
      significado:
        'Proceso de clasificación del mercado en grupos con características comunes para orientar estrategias de mercadeo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arnoletto, E. J. (2007). Administración de la producción como ventaja competitiva. Eumed.net. Recuperado de:',
      link: 'https://www.eumed.net/libros-gratis/2007b/299/299.pdf',
    },
    {
      referencia:
        'Gudziol Vidal, J. A. (1999). Mercadeo, competitividad y sostenibilidad. Estudios Gerenciales, 15(73), 61–74. Redalyc. Recuperado de:',
      link: 'https://www.redalyc.org/pdf/212/21207306.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (1996). Estrategia de <em>marketing</em>. Repositorio Institucional SENA. Recuperado de:',
      link: 'https://repositorio.sena.edu.co/handle/11404/1043',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2007). Plan de mercadeo / estrategias de comercialización. Repositorio Institucional SENA. Recuperado de:',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/1576/sere5.pdf?sequence=12&isAllowed=y',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (s. f.). Planeación estratégica. Repositorio Institucional SENA. Recuperado de:',
      link: 'https://repositorio.sena.edu.co/handle/11404/5993',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolás Cruz Ríos',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
