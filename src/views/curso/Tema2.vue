<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diseño de materiales didácticos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    p.mb-4 En el proceso de enseñanza-aprendizaje, los materiales didácticos son esenciales para facilitar la comprensión de los temas y ofrecer nuevas experiencias, según Suing et al. (2017), citado por Peralta, et al. (2023). Estos recursos, elaborados, pueden potenciar el aprendizaje mediante representaciones gráficas interactivas de objetos o figuras cuando se utilizan de manera adecuada.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El diseño de materiales didácticos, entonces, es un proceso clave en la educación, dado que permite crear recursos que faciliten el aprendizaje y promuevan la adquisición de conocimientos de manera efectiva. Este diseño implica una planificación cuidadosa que considere las necesidades de los estudiantes, los objetivos de aprendizaje y las características del contexto educativo
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Según Marqués Graells (2011), citado por el Ministerio de Educación de Argentina ME (2023), los materiales didácticos son herramientas diseñadas con la intención de facilitar el proceso de enseñanza-aprendizaje. Estos materiales pueden adoptar diversas formas, como textos, recursos digitales, audiovisuales o manipulativos, y su propósito es hacer más accesibles y comprensibles los contenidos educativos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Por su parte, Pérez Alarcón (2010), citado por ME (2023), señala que los materiales didácticos no solo deben transmitir información, sino también estimular el interés y la participación activa de los estudiantes, promoviendo un aprendizaje significativo.
    
        .bg-color-12.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Así mismo, Carbonero Celis (2016), sostiene que, los recursos didácticos son elementos que ayudan a lograr los objetivos de aprendizaje, en la enseñanza. Este concepto es amplio y se adapta a nuevas propuestas, especialmente las multimedia, debido al aumento de estímulos y avances técnicos. Según Gil (2007), citado por Carbonero Celis (2016), esto incluye el "material didáctico".
        p Por su parte, Sicilia y Delgado (2002), definen un recurso como un "artificio" usado en la enseñanza para alcanzar objetivos, adaptándose a circunstancias y edades. Estos recursos facilitan el currículo y motivan, aunque estos autores se enfocan en lo material. Los materiales didácticos son medios que los docentes usan para enseñar, apoyar o evaluar el proceso educativo. Se deben considerar aspectos de espacios y materiales: seguridad, funcionalidad, adaptabilidad, integración y aprovechamiento del entorno.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Carbonero Celis (2016), opina que, al inicio del curso, los docentes deben revisar los materiales, hacer un inventario e informar a las familias sobre los materiales y libros de texto adoptados y sobre el material didáctico, con el cual se está trabajando.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Principios del diseño de materiales didácticos 
    
    p.mb-4 El diseño de materiales didácticos en educación inicial, exige seguir ciertos principios fundamentales para garantizar que los recursos sean efectivos, inclusivos y atractivos para los niños pequeños. A continuación, se amplía cada principio junto con ejemplos aplicados a este nivel educativo, basándonos en el documento del ME (2023), y sus autores Pérez Alarcón (2010), y Marqués Graells (2011).

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="14%" y="11.5%" numero="+")
                h5 1. Claridad y simplicidad
                p.mb-0 Los materiales deben ser fáciles de entender y manejar. Es importante evitar el uso de lenguaje complejo, exceso de información o elementos visuales que puedan distraer. 
                p.mb-0 <b>Ejemplo.</b> Crear fichas de trabajo con imágenes grandes y bien definidas, como figuras geométricas simples (círculos, triángulos, cuadrados) para que los niños las coloreen o identifiquen o diseñar cuentos ilustrados con pocas palabras y frases cortas, acompañados de imágenes claras para facilitar la comprensión ME (2023).
    
              .bg-color-white.box-shadow.p-3(x="10%" y="30%" numero="+")
                h5 2. Relevancia
                p.mb-0 Los materiales deben estar alineados con los objetivos de aprendizaje y conectados con las experiencias y necesidades de los niños. 
                p.mb-0 <b>Ejemplo.</b> Diseñar un juego de tarjetas con imágenes de objetos cotidianos (platos, juguetes, ropa) para enseñar vocabulario relacionado con su entorno inmediato, o usar muñecos o figuras animales para enseñar valores como el respeto y el trabajo en equipo, permitiendo que los niños se identifiquen con los personajes (ME, 2023).
    
              .bg-color-white.box-shadow.p-3(x="6%" y="49%" numero="+")
                h5 3. Interactividad
                p.mb-0 Los materiales deben involucrar a los niños de manera activa, promoviendo su participación y motivación para aprender. 
                p.mb-0 <b>Ejemplo.</b> Crear un tapete de juego interactivo donde los niños tengan que realizar diferentes acciones, como saltar sobre figuras de colores o números, o diseñar juegos manipulativos como rompecabezas con letras para formar palabras o números para contar, permitiendo que los niños aprendan mientras juegan (ME, 2023).
    
              .bg-color-white.box-shadow.p-3(x="11%" y="68%" numero="+")
                h5 4. Adaptabilidad
                p.mb-0 Los materiales deben poder ajustarse a las características, estilos de aprendizaje y necesidades individuales de los niños, incluyendo aquellos con necesidades educativas especiales. 
                p.mb-0 <b>Ejemplo.</b> Elaborar fichas de actividades en distintos niveles de dificultad para que cada niño pueda trabajar a su propio ritmo o crear materiales multisensoriales, como tarjetas táctiles que combinen imágenes y texturas (papel lija, tela, algodón) para niños con discapacidades visuales o táctiles (ME, 2023).
    
              .bg-color-white.box-shadow.p-3(x="16.5%" y="87%" numero="+")
                h5 5. Estética y atractivo visual
                p.mb-0 Los materiales deben ser visualmente atractivos para captar la atención de los niños, utilizando colores vivos y diseños lúdicos. 
                p.mb-0 <b>Ejemplo.</b> Diseñar carteles con colores brillantes y personajes animados que representan letras o números, fomentando un aprendizaje visual llamativo, o elaborar libros pop-up donde los personajes e historias cobren vida al abrir cada página, incentivando la curiosidad y el entusiasmo (ME, 2023).
              .bg-color-white.box-shadow.p-3(x="83.5%" y="11%" numero="+")
                h5 6. Durabilidad
                p.mb-0 Los materiales deben estar diseñados para resistir el uso frecuente y ser adecuados para manos pequeñas y exploradoras. 
                p.mb-0 <b>Ejemplo.</b> Laminar tarjetas didácticas o imprimirlas en cartón grueso para que soporten el manejo constante, o crear cubos de espuma o bloques de madera para actividades de construcción y reconocimiento de colores, formas y números (ME, 2023). La calidad de los recursos no depende de su cantidad o variedad, sino de cómo los docentes los entienden. Los recursos influyen en las actividades, impulsando a buscar nuevas formas de enseñar (Zagalaz, Cachón y Lara, 2014), citados por Carbonero Celis (2016).
              .bg-color-white.box-shadow.p-3(x="88.5%" y="30%" numero="+")
                h5 7. Inclusión cultural
                p.mb-0 Los materiales deben reflejar y respetar la diversidad cultural y lingüística de los niños. 
                p.mb-0 <b>Ejemplo.</b> Elaborar cuentos que incluyan personajes de diferentes culturas y situaciones familiares para fomentar la empatía y la identidad cultural, o diseñar canciones o actividades que incluyan palabras y expresiones en los idiomas nativos de los niños, como juegos en español e idiomas indígenas, según la región (ME, 2023).
              .bg-color-white.box-shadow.p-3(x="93.5%" y="49%" numero="+")
                h5 8. Flexibilidad para diferentes usos
                p.mb-0 Los materiales deben poder ser reutilizados o adaptados para diferentes contextos, objetivos y grupos de estudiantes. 
                p.mb-0 <b>Ejemplo.</b> Diseñar dados con imágenes que representan emociones, que puedan usarse tanto para enseñar vocabulario emocional como para actividades de socialización, o crear plantillas de actividades que puedan ser utilizadas para identificar colores, números o formas, dependiendo del tema abordado (ME, 2023).
              .bg-color-white.box-shadow.p-3(x="88.5%" y="68%" numero="+")
                h5 9. Multisensorialidad
                p.mb-0 Los materiales deben estimular los diferentes sentidos (vista, tacto, audición, etc.), enriqueciendo la experiencia de aprendizaje. 
                p.mb-0 <b>Ejemplo.</b> Diseñar tarjetas musicales que reproduzcan sonidos al presionar botones, como el sonido de animales o instrumentos, o crear libros táctiles donde los niños puedan tocar diferentes texturas y relacionarlas con conceptos como áspero, suave, rugoso (ME, 2023).
              .bg-color-white.box-shadow.p-3(x="84%" y="88%" numero="+")
                h5 10. Evaluación Integrada
                p.mb-0 Los materiales deben incluir elementos que permitan a los docentes evaluar el aprendizaje de los niños de manera formativa y sumativa.  
                p.mb-0 <b>Ejemplo.</b> Incorporar hojas de trabajo con actividades como unir parejas, colorear por número o escribir trazos, que puedan ser revisadas para medir el progreso, o Diseñar juegos con objetivos claros, como completar una secuencia lógica, donde el desempeño del niño pueda ser observado y evaluado (ME, 2023).
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El diseño de materiales didácticos efectivos en educación inicial requiere atención a principios claves que promuevan un aprendizaje activo, significativo e inclusivo. Estos principios no solo enriquecen el entorno educativo, sino que también hacen que el aprendizaje sea accesible, dinámico y adaptado a las características individuales de los niños (ME, 2023).
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Usos alternativos de los materiales didácticos

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Los materiales didácticos al ser tan versátiles, pueden ser usados de diferentes maneras en el proceso de enseñanza y aprendizaje; estos pueden aprovecharse desde la introducción a una clase, pasando por ser el elemento principal en su desarrollo, hasta su uso como recurso de evaluación.  

        p(data-aos="fade-left") A continuación, mencionaremos otras opciones de uso y nos centraremos un poco en las rúbricas, como material didáctico en la educación inicial:
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        h2(data-aos="fade-left") Diagnóstico de presaberes
        p.mb-5 Los materiales didácticos son esenciales para identificar los conocimientos previos de los estudiantes. Por ejemplo: 

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cuestionarios iniciales
                p.mb-0 Diseñados para explorar conceptos básicos o habilidades relacionadas con el tema.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Mapas conceptuales
                p.mb-0 Útiles para que los estudiantes representen gráficamente lo que ya saben sobre un tema.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Juegos interactivos
                p.mb-0 Actividades lúdicas como rompecabezas temáticos o dinámicas grupales, que evalúan lo que los estudiantes saben de manera no invasiva y atractiva.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p Como se estudió en el tema anterior, estos elementos son útiles para la evaluación y cierre, puesto que, al finalizar una unidad temática, los materiales didácticos pueden servir como herramientas para evaluar el logro de los objetivos de aprendizaje y sintetizar lo aprendido. 
        h5.mb-5 Ejemplos incluyen: 
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Materiales manipulativos
              p.mb-0.text-center Como figuras geométricas, modelos anatómicos o kits de construcción, para conceptos prácticos (ME, 2023).
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center Infografías y guías visuales
              p.mb-0.text-center Que sintetizan información clave de una forma accesible y atractiva.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/15.svg" alt="" style="width: 90px")
              h5.text-center Recursos digitales
              p.mb-0.text-center Videos explicativos, aplicaciones educativas y simulaciones para profundizar en contenidos específicos.
    
    p Como se estudió en el tema anterior, estos elementos son útiles para la evaluación y cierre, puesto que, al finalizar una unidad temática, los materiales didácticos pueden servir como herramientas para evaluar el logro de los objetivos de aprendizaje y sintetizar lo aprendido. 
    h5.mb-5 Ejemplos incluyen: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Portafolios")
            p Que reúnen trabajos realizados por los estudiantes, permitiendo una evaluación procesual y contextualizada (ME, 2023).
    
          .div(titulo="Proyectos integradores")
            p Donde los estudiantes aplican lo aprendido en un producto final como una maqueta, presentación o informe.
    
          .div(titulo="Rúbricas")
            p Diseñadas para evaluar de forma objetiva el desempeño en actividades o proyectos, asegurando transparencia en los criterios.
    
    h2.mb-5(data-aos="fade-left") Elaboración de rúbricas

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Pazos Anido (2023), las rúbricas son herramientas de evaluación que nos ayudan a observar y valorar el desempeño de los niños en diferentes actividades (Del Pozo, 2013). Imagine que son como guías que nos dicen qué buscar y cómo valorar el trabajo de los niños (Blanco, 2008), citado por Pazos Anido (2023). Por ejemplo, si los niños hacen un dibujo, la rúbrica nos ayuda a ver si usaron muchos colores, si dibujaron figuras claras y si expresaron sus ideas.
        
            .bg-color-1.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Las rúbricas son muy útiles para evaluar tareas que muestran cómo los niños aplican lo que aprenden en situaciones reales (Alsina, 2013), citado por Pazos Anido, (2023). Por ejemplo, podemos usar una rúbrica para ver cómo los niños trabajan en equipo, para construir una torre con bloques, cómo resuelven un conflicto durante el juego o cómo se expresan al cantar una canción.
        
        h2(data-aos="fade-left") Elementos claves de una rúbrica
        p.mb-5 Toda rúbrica tiene varios elementos importantes, según (ME, 2023):

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              h5.text-center Niveles de desempeño
              p.mb-0.text-center Describen la calidad del trabajo del niño, desde "excelente" hasta "necesita mejorar" (Blanco, 2008), citado por (ME, 2023).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/19.svg" alt="" style="width: 90px")
              h5.text-center Descriptores
              p.mb-0.text-center Explican qué características tiene el trabajo del niño en cada nivel de desempeño (Blanco, 2008; Fernándes, 2020), citado por (ME, 2023).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/20.svg" alt="" style="width: 90px")
              h5.text-center Criterios
              p.mb-0.text-center Son los aspectos que vamos a evaluar del trabajo del niño (Blanco, 2008; Fernándes, 2020), citado por (ME, 2023).
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/21.svg" alt="" style="width: 90px")
              h5.text-center Validar la rúbrica
              p.mb-0.text-center Probarla con un grupo pequeño antes de su aplicación general para asegurar su claridad y utilidad.
    
    h2.mb-5(data-aos="fade-left") Tipos de rúbricas: holísticas y analíticas

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Desde la perspectiva de Pazos Anido (2023), y citando otros autores, existen dos tipos principales de rúbricas: holísticas y analíticas (Goodrich, 1996; Blanco, 2008; Martínez-Rojas, 2008; Alsina, 2013; Del Pozo, 2013; Fernández, 2021). 
        p(data-aos="fade-left") Las rúbricas holísticas dan una visión general del desempeño del niño, mientras que las analíticas evalúan diferentes aspectos por separado.
    
    h2.mb-5(data-aos="fade-left") Rúbricas holísticas

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Qué son")
            p Las rúbricas holísticas ofrecen una evaluación general del desempeño del niño, considerando el trabajo completo o la ejecución como un todo. Este tipo de rúbricas es ideal para actividades donde el objetivo principal es observar un resultado integral o una habilidad compleja (Pazos Anido, 2023).
    
          .div(titulo="Características")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evalúan el desempeño de manera global.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Son más rápidas y fáciles de usar porque no dividen la tarea en criterios específicos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Proveen una visión general del nivel alcanzado, aunque no detallan qué aspectos específicos necesitan mejorar.
    
          .div(titulo="Ejemplo")
            p Si la tarea es que los niños creen un dibujo sobre su familia, una rúbrica holística podría tener los siguientes niveles:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Sobresaliente.</b> El dibujo está bien presentado, incluye todos los miembros de la familia con detalles claros y utiliza colores variados.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Satisfactorio.</b> El dibujo está completo, incluye a la mayoría de los miembros de la familia, pero algunos detalles pueden ser confusos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Básico.</b> El dibujo está incompleto, con pocos detalles o falta de claridad sobre los miembros representados.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Insuficiente.</b> El dibujo no está relacionado con el tema o está muy incompleto.
            p En este caso, el docente evalúa el producto final en su conjunto, sin analizar aspectos individuales como el uso del color, la representación de proporciones o la creatividad.
    
    h2.mb-5(data-aos="fade-left") Rúbricas analíticas

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/24.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Qué son")
            p Las rúbricas analíticas, por otro lado, desglosan el desempeño en diferentes criterios específicos, permitiendo evaluar cada aspecto de forma independiente. Esto las hace ideales para identificar fortalezas y debilidades concretas (Pazos Anido, 2023).
    
          .div(titulo="Características")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evalúan múltiples criterios de forma separada.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ofrecen retroalimentación detallada y específica para cada aspecto de la tarea.
            p Son más útiles para dar seguimiento al progreso en áreas específicas.
    
          .div(titulo="Ejemplo en educación inicial")
            p Para evaluar la misma actividad de dibujo sobre la familia, una rúbrica analítica podría desglosarse en varios criterios, como se muestra en la siguiente tabla:
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-7.text-center Criterio
                    th.bg-color-7.text-center Sobresaliente (3)
                    th.bg-color-7.text-center Satisfactorio (2)
                    th.bg-color-7.text-center Básico (1)
                    th.bg-color-7.text-center Insuficiente (0)
                tbody
                  tr.bg-color-white
                    td Representación
                    td Todos los miembros de la familia están claramente identificados.
                    td La mayoría de los miembros están representados con claridad.
                    td Algunos miembros están representados, pero no son claros.
                    td No se identifican los miembros de la familia.
                  tr.bg-color-white
                    td Uso del color
                    td Uso variado y adecuado de colores.
                    td Uso moderado de colores, pero limitado en variedad.
                    td Uso limitado de colores, sin cuidado en la aplicación.
                    td No se usaron colores o están aplicados de forma descuidada.
                  tr.bg-color-white
                    td Creatividad
                    td El dibujo incluye detalles adicionales creativos.
                    td detalles 
                    td Hay pocos o ningún detalle creativo en el dibujo.
                    td No hay evidencia de creatividad en el dibujo.
            p En este caso, el docente puede analizar cada criterio (representación, uso del color, creatividad) por separado y proporcionar retroalimentación específica para cada área (Pazos Anido, 2023).
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Durante el desarrollo de la unidad, se abordarán aspectos como la evaluación de impacto, la gestión de riesgos, y la implementación de sistemas de monitoreo y seguimiento. Para lograrlo, los estudiantes explorarán el uso de indicadores y métricas que les permitirán medir los resultados y el éxito del proyecto en relación con los objetivos propuestos.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los sistemas de monitoreo y seguimiento aseguran la supervisión continua del avance del proyecto y facilitan el ajuste oportuno de los planes cuando sea necesario. Los estudiantes aprenderán a implementar herramientas que les permitan realizar un seguimiento eficiente del progreso y del cumplimiento de los objetivos, garantizando la transparencia y la responsabilidad en cada fase del proyecto.
    
        





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.escuelatarapoto.edu.pe/bitstream/handle/20.500.14268/81/MONO_LADDY%20MORI_2022_2.docx.pdf?sequence=2" target="_blank" rel="noopener noreferrer") Mori Fumachi, L. A. (2024). Importancia del Material Didácticos en el Nivel Inicial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=9152359" target="_blank" rel="noopener noreferrer") Peralta, A. L. A., Granja, A. A. Q., Carrasco, A. G. V., Vivanco, C. O. M., & Zapata, K. S. S. (2023). Diseño de material didáctico inclusivo para niños con autismo. Polo del Conocimiento: Revista científico-profesional, 8(8), 2386-2398. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.lifeder.com/material-didactico/ " target="_blank" rel="noopener noreferrer") Material didáctico: características, funciones, tipos, importancia. (2019, diciembre 20). Lifeder. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=A8p08iGVDDw " target="_blank" rel="noopener noreferrer") Creativa, D. [@DocenciaCreativa]. (2021, 19 de enero). La rúbrica. Principios teóricos y diseño de la evaluación por rúbricas. [video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
