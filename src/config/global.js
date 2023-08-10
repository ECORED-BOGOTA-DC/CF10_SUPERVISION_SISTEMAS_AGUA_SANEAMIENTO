export default {
  global: {
    componenteFormativo: 'Orientar comunidades',
    descripcionCurso:
      'La última fase y la más importante de la educación y promotoría ambiental se relaciona directamente con el proceso de orientación de las comunidades, desde la etapa preliminar donde se recoge información hasta la etapa final que es hacer seguimiento y control de las acciones tomadas por la comunidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
    ],
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
        titulo: 'Manejo de actores sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actores sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estrategias de comprensión oral',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodologías de comunicación ambiental',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metodologías de sensibilización en comunidades',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de comunicación con actores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Procesos de participación ciudadana',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores, percepción y desempeño',
            hash: 't_2_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/921200_CF10_DU.pdf',
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
  complementario: [
    {
      tema: 'Estrategias de comunicación con actores',
      referencia:
        'Geilfus, F. (2009). <em>80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo, evaluación.</em>',
      tipo: 'Libro',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59',
    },
    {
      tema: 'Manejo de actores sociales',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Manual metodológico de participación ciudadana.</em> MinSalud.',
      tipo: 'Manual',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/manual-metodologico-de-participacion-ciudadana.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación ambiental',
      significado:
        'cualquier flujo de información ambientalmente relevante que involucra tanto comunicadores como audiencias y se logra mediante la entrega de mensajes efectivos y recepción interactiva Geilfus (2009).',
    },
    {
      termino: 'Consejos territoriales de participación ciudadana',
      significado:
        'en los niveles departamental, distrital y municipal (específicamente en los de categorías primera, segunda y especial) funcionan los Consejos Territoriales de Participación Ciudadana, los cuales se encargan, junto con las autoridades territoriales, de la política pública de participación ciudadana en sus territorios en articulación con el Consejo Nacional de Participación. Sus miembros son quienes ejerzan funciones equivalentes a las de los miembros señalados para el Consejo Nacional de Participación Ciudadana a nivel departamental, distrital o municipal (Ministerio del Interior, s.f.).',
    },
    {
      termino: 'Consultas populares de origen ciudadano',
      significado:
        'es un mecanismo de participación ciudadana donde se pone en consideración a los votantes un tema de trascendencia nacional, departamental, municipal, distrital o local. Con este es la ciudadanía la que contestando sí o no a una pregunta de carácter general termina definiendo si la decisión es conveniente o no para la comunidad (Ministerio del Interior, s.f.).',
    },
    {
      termino: 'Estrategia didáctica activa',
      significado:
        'selección de actividades y prácticas pedagógicas en diferentes momentos formativos, métodos y recursos en los procesos de enseñanza y aprendizaje (Manual de estrategias didácticas activas, 2013).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'examen continuo de los procesos y la generación de productos de un programa durante la ejecución del mismo (Ministerio de Salud y Protección Social, 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Castro, P., Mendoza, S. y Castor, L. (2007). <em>Estrategia educación ambiental para el conocimiento, el uso y la conservación de la biodiversidad en Colombia.</em> Instituto de Investigaciones de Recursos Biológicos Alexander Von Humboldt.',
      link:
        'http://siar.minam.gob.pe/puno/documentos/estrategia-educacion-ambiental-conocimiento-uso-sostenible',
    },
    {
      referencia:
        'CEPAL. (2010). <em>Lineamientos metodológicos para la construcción de indicadores de desempeño.</em> CEPAL.',
      link: '',
    },
    {
      referencia:
        'CLDA. (2009). <em>Carta Iberoamericana de Participación Ciudadana en la Gestión Pública.</em> CLDA.',
      link:
        'https://observatorioserviciospublicos.gob.do/baselegal/carta_iberoamericana_de_participaci%C3%B3n_ciudadana.pdf',
    },
    {
      referencia:
        'Consultores Educativos Ambientales. (2014). <em>Plan de comunicación ambiental para la conservación de los arrecifes de coral de Puerto Rico.</em> CEA',
      link:
        'https://www.ncei.noaa.gov/data/oceans/coris/library/NOAA/CRCP/other/grants/NA11NOS4820005/Coral_Reef_Communication_Plan.pdf',
    },
    {
      referencia:
        'Corporación Autónoma Regional de Cundinamarca. (2014). <em>Guía metodológica y pedagógica como soporte del proceso de educación ambiental.</em> CAR.',
      link:
        'https://sie.car.gov.co/bitstream/handle/20.500.11786/35887/28290.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Geilfus, F. (2009). <em>80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo, evaluación.</em>',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59',
    },
    {
      referencia:
        'Instituto Distrital de la Participación y Acción Comunal. <em>(2007). Mecanismos de participación ciudadana.</em> IDPAC.',
      link:
        'https://participacionbogota.gov.co/mecanismos-participacion-ciudadana',
    },
    {
      referencia:
        'Ley 850 de 2003. [Poder público - Rama Legislativa]. Por medio de la cual se reglamentan las veedurías ciudadanas. Noviembre 19 de 2003. DO No. 45.376.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0850_2003.html',
    },
    {
      referencia:
        'Martínez, M. y Ciudad-Real, G. (2013). <em>Manual de estrategias didácticas activas.</em>',
      link:
        'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjP292r16XrAhVsx1kKHfixCAQQFjAAegQIARAB&url=https%3A%2F%2Fwww.orientacionandujar.es%2Fwp-content%2Fuploads%2F2015%2F03%2FManual-estrategias-didacticas.pdf&usg=AOvVaw3STa_5TlRI4TsVCGsoKotF',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Manual metodológico de participación ciudadana.</em> MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/manual-metodologico-de-participacion-ciudadana.pdf',
    },
    {
      referencia:
        'Núñez, L. (s.f). <em>Sostenibilidad y actores sociales en la protección del medioambiente en Cuba.</em> CLACSO.',
      link:
        'http://biblioteca.clacso.edu.ar/ar/libros/cuba/cips/caudales05/Caudales/ARTICULOS/ArticulosPDF/0416N076.pdf',
    },
    {
      referencia:
        'Zamalloa, E y Díaz, J. (2005). <em>Manual 5, guías metodológicas para la gestión ambiental.</em>',
      link:
        'https://www.academia.edu/25938537/Gu%C3%ADas_Metodol%C3%B3gicas_para_la_Gesti%C3%B3n_Ambiental',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección general',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos y vinculación en plataforma LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
