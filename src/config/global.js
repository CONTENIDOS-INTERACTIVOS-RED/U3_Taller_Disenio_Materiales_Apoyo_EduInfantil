export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Intervención educativa a través de materiales didácticos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Procedimientos y evaluación en el diseño de secuencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Criterios de evaluación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Procedimientos de evaluación de una Secuencia Didáctica',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de materiales didácticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios del diseño de materiales didácticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Usos alternativos de los materiales didácticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Aplicación de materiales didácticos en la intervención educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Funciones de los materiales didácticos en la educación ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Las rúbricas en educación inicial, según el MEN en Colombia',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Uso de recursos tecnológicos en la creación de materiales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Aplicaciones de los recursos tecnológicos en la creación de materiales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ventajas y retos en el uso de recursos tecnológicos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Barraza Macías, A. (2020). Modelos de secuencias didácticas. Universidad Pedagógica de Durango. ',
      link: 'http://upd.edu.mx/PDF/Libros/Secuencias.pdf',
    },
    {
      referencia:
        'Díaz-Barriga, A., & Hernández, G. (2010). Estrategias docentes para un aprendizaje significativo: Una interpretación constructivista. ',
      link:
        'https://www.bing.com/ck/a?!&&p=3eddfd9c2afeb075496773365c4724e4c1d8317af52c972864c59a865977903aJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=2b64aa3c-3cb0-63f4-1c4f-be8a3db16213&psq=D%c3%adaz-Barriga%2c+A.%2c+%26+Hern%c3%a1ndez%2c+G.+(2010).+Estrategias+docentes+para+un+aprendizaje+significativo%3a&u=a1aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vb3Blbj9pZD0wQjNrQ0theTZoSmdLVldsdWJrVTBRM056TkRn&ntb=1',
    },
    {
      referencia:
        'González Barajas, M. T., Kaplan Navarro, J. C., Reyes Osua, G., & Reyes Osua, M. A. (2010). La secuencia didáctica, herramienta pedagógica del modelo educativo ENFACE. Universidades, 46, 27-33.',
      link: 'https://www.redalyc.org/pdf/373/37318636004.pdf',
    },
    {
      referencia:
        'Tena, È., & Couso, D. (2023). ¿Cómo sé que mi secuencia didáctica es de calidad? Propuesta de un marco de evaluación desde la perspectiva de Investigación Basada en Diseño. ',
      link: 'https://revistas.uca.es/index.php/eureka/article/view/8977/10613',
    },
    {
      referencia:
        'Carbonero Celis, C. (2016). Recursos y materiales didácticos en la actividad física en edad escolar: ( ed.). Wanceulen Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63436?page=9',
    },
    {
      referencia:
        'Pazos Anido, M. (2023). Las rúbricas de evaluación: desafíos y oportunidades en torno a su construcción. El español como lengua extranjera en Portugal III: retos de la enseñanza de lenguas cercanas. ',
      link:
        'https://repositorio-aberto.up.pt/bitstream/10216/155300/2/650375.pdf',
    },
    {
      referencia:
        'Peralta, A. L. A., Granja, A. A. Q., Carrasco, A. G. V., Vivanco, C. O. M., & Zapata, K. S. S. (2023). Diseño de material didáctico inclusivo para niños con autismo. Polo del Conocimiento: Revista científico-profesional, 8(8), 2386-2398. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9152359',
    },
    {
      referencia:
        'Ministerio de Educación Argentina,ME (2023). Diseño de materiales didácticos digitales. Orientaciones de implementación. ',
      link:
        'https://www.academia.edu/117577874/Dise%C3%B1o_de_materiales_did%C3%A1cticos',
    },
    {
      referencia:
        'Moreno Lucas, F. M. (2015). Función pedagógica de los recursos materiales en educación infantil. ',
      link: 'https://www.redalyc.org/pdf/5257/525752885002.pdf',
    },
    {
      referencia:
        ' Ministerio de Educación Nacional (2024, febrero 9). Educación inicial: Fundamentos políticos, técnicos y de gestión de la estrategia de atención integral a la primera infancia. ',
      link: 'https://www.mineducacion.gov.co.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2009). Desarrollo infantil y competencias en la primera infancia. Documento 10. ',
      link:
        'https://www.mineducacion.gov.co/primerainfancia/1739/articles-178053_archivo_PDF_libro_desarrolloinfantil.pdf',
    },
    {
      referencia:
        'Ricardo Barreto, C. (Dir.), Cano Barrios, J. (Dir.) & Astorga Acevedo, C. (Dir.). (2021). Ambientes de aprendizaje enriquecidos con TIC en educación infantil: una mirada internacional: (1 ed.). Universidad del Norte. https://elibro.net/es/ereader/tecnologicadeloriente/214582?page=55',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/214582?page=55',
    },
    {
      referencia:
        'Cabero Almenara, J. (2003). Replanteando la tecnología educativa ',
      link: 'https://www.redalyc.org/pdf/158/15802104.pdf',
    },
    {
      referencia:
        'Fernández, I. M. G., Fernández, R. M., & Navarro, A. V. (2021). Creación de materiales didácticos digitales y uso de tecnologías por parte de los docentes de Primaria. Un estudio de casos. Revista Iberoamericana de educación, 85(1), 39-60. ',
      link: 'https://rieoei.org/RIE/article/view/4063/4115',
    },
    {
      referencia:
        'Salinas, J. (2012). Innovación docente y uso de las TIC en la enseñanza universitaria. Revista de Educación a Distancia, 32, 1-15. ',
      link: 'https://www.redalyc.org/articulo.oa?id=78011256001',
    },
    {
      referencia:
        'Téllez, M. F., & Jiménez, M. L. (2019). Los retos de las TIC para los docentes. Cuestiones Educativas. ',
      link: 'https://cuestioneseducativas.uexternado.edu.co.',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de los materiales o estrategias didácticas para ajustarse a las necesidades y características de diferentes estudiantes y contextos educativos.',
    },
    {
      termino: 'Brecha Digital',
      significado:
        'Desigualdad en el acceso a la tecnología, lo que dificulta la implementación equitativa de herramientas tecnológicas en el aula.',
    },
    {
      termino: 'Contextualización',
      significado:
        'Proceso de diseñar materiales y recursos educativos que se relacionen directamente con el entorno, experiencias y realidad de los estudiantes.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Característica de los materiales educativos que promueve la participación activa de los estudiantes, como juegos, cuestionarios o actividades prácticas.',
    },
    {
      termino: 'Multimedia',
      significado:
        'Integración de diferentes medios como texto, imágenes, audio y video para crear materiales didácticos más atractivos y completos.',
    },
    {
      termino: 'Personalización',
      significado:
        'Adaptación de recursos y estrategias a las necesidades, intereses y ritmo de aprendizaje individuales de los estudiantes.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso de ofrecer comentarios constructivos y orientativos a los estudiantes para mejorar su desempeño y aprendizaje',
    },
    {
      termino: 'Rúbrica',
      significado:
        'Herramienta de evaluación que detalla criterios específicos y niveles de desempeño para calificar tareas de manera objetiva y clara.',
    },
    {
      termino: 'Significatividad',
      significado:
        'Principio educativo que busca que el aprendizaje sea relevante y relacionado con las experiencias previas del estudiante, según el enfoque constructivista.',
    },
    {
      termino: 'Tecnología Educativa',
      significado:
        'Uso de herramientas digitales y recursos tecnológicos para mejorar los procesos de enseñanza y aprendizaje.',
    },
  ],
}
