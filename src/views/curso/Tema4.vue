<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Uso de recursos tecnológicos en la creación de materiales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El uso de recursos tecnológicos en la educación ha revolucionado la manera en que se diseñan y aplican los materiales didácticos, permitiendo a los docentes desarrollar estrategias más interactivas, accesibles y adaptadas a las necesidades de los estudiantes.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Uso de recursos tecnológicos en la creación de materiales
            p.mb-4(data-aos="fade-right") En el PDF <b>Uso de recursos tecnológicos en la creación de materiales</b>, se analizan diferentes perspectivas sobre la integración de herramientas digitales en el aula, destacando sus beneficios en la personalización del aprendizaje y la mejora de la experiencia educativa. Además, se presentan criterios clave para la selección y aplicación de estos recursos, asegurando que su incorporación favorezca un proceso de enseñanza dinámico, innovador y significativo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Uso de recursos tecnológicos en la creación de materiales.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/1.png', alt='')

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Aplicaciones de los recursos tecnológicos en la creación de materiales
    
    p.mb-4 Según lo anterior, a continuación se verán algunas aplicaciones gratuitas que se pueden encontrar online, para diseñar recursos tecnológicos con ejemplos.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Diseño de contenidos multimedia")
            p Los recursos tecnológicos permiten integrar texto, imágenes, audio y video en un solo material, haciendo que los contenidos sean más atractivos y fáciles de comprender. 
            p <b>Ejemplo.</b> Crear presentaciones interactivas con herramientas como PowerPoint o Canva, que incluyan animaciones y enlaces a recursos externos (Salinas, 2012).

    
          .div(titulo="Creación de recursos interactivos")
            p Las Plataformas como Genially o Kahoot, permiten diseñar materiales interactivos, como juegos, cuestionarios y actividades prácticas, que fomentan la participación activa de los estudiantes. 
            p <b>Ejemplo.</b> Diseñar un juego de preguntas y respuestas para repasar conceptos claves de una asignatura (Fernández, et al., 2021).

    
          .div(titulo="Elaboración de materiales personalizados")
            p Herramientas como Google Classroom o Moodle, facilitan la creación de materiales adaptados a las necesidades de cada estudiante, como guías de estudio, videos explicativos y actividades prácticas. 
            p <b>Ejemplo.</b> Crear un video tutorial para explicar un tema complejo, que los estudiantes puedan ver a su propio ritmo (Fernández, et al., 2021).

    
          .div(titulo="Producción de recursos multisensoriales")
            p Las tecnologías permiten diseñar materiales que estimulen diferentes sentidos, como libros digitales con audio y animaciones. 
            p <b>Ejemplo.</b> Crear un libro interactivo para niños, que incluye narraciones en audio y actividades de arrastrar y soltar (Salinas, 2012).
    
    p.mb-4 Sitios y algunas inteligencias artificiales gratuitas que pueden ser útiles para crear recursos didácticos para educación inicial:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/3.png")
            .col-lg-7
              h5 Genially
              p Permite crear recursos educativos interactivos como presentaciones, juegos y actividades dinámicas. <a href="https://genially.com/es/">Visitar página</a>
 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7
              h5 Portal de educación
              p POfrece una lista extensa de herramientas gratuitas para diseñar materiales educativos, desde juegos hasta recursos multimedia. <a href="https://portaldeeducacion.com/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7
              h5 Educaplay
              p Ideal para crear juegos educativos personalizados, como crucigramas, sopas de letras y cuestionarios interactivos. <a href="https://es.educaplay.com/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7
              h5 Teachy
              p Una plataforma que utiliza inteligencia artificial para ayudar a los docentes a crear planes de clase, evaluaciones y materiales educativos personalizados. Es ideal para ahorrar tiempo y generar actividades dinámicas. <a href="https://www.teachy.app/es">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7
              h5 EdutekaLab
              p Ofrece herramientas enriquecidas con inteligencia artificial, como la creación de planes de clase personalizados, rúbricas efectivas y actividades gamificadas. Es una excelente opción para estructurar cursos y evaluar aprendizajes. <a href="https://edtk.co/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7
              h5 PlaneaIA
              p Especializada en la creación de planeaciones didácticas y estrategias educativas impulsadas por inteligencia artificial. Permite diseñar actividades, evaluaciones y recursos adaptados a las necesidades de los estudiantes. <a href="https://planeaia.com">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7
              h5 Canva para educación
              p Aunque no es exclusivamente para educación inicial, Canva ofrece plantillas gratuitas para crear materiales visuales atractivos como carteles, fichas y presentaciones. <a href="https://www.canva.com/education/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7
              h5 Kahoot!
              p Una herramienta interactiva para crear cuestionarios y juegos educativos que fomentan la participación activa de los niños. /<a href="https://kahoot.com">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7
              h5 Wordwall
              p Permite crear actividades interactivas como sopas de letras, crucigramas y juegos de emparejamiento, ideales para educación inicial. <a href="https://wordwall.net/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/12.png")
            .col-lg-7
              h5 ClassDojo
              p Aunque está más orientada a la gestión del aula, también permite a los docentes compartir actividades y recursos con los estudiantes y sus familias. <a href="https://www.classdojo.com/">Visitar página</a>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7
              h5 ScratchJr
              p Una herramienta de programación básica diseñada para niños pequeños, que permite a los docentes introducir conceptos de lógica y creatividad a través de historias interactivas. <a href="https://www.scratchjr.org/">Visitar página</a>

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        #t_4_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 4.2] Ventajas y retos en el uso de recursos tecnológicos
        
        p.mb-5 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Ventajas y retos en el uso de recursos tecnológicos"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
         


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/260265?page=1" target="_blank" rel="noopener noreferrer") Roma, C. (2021). TInCluimos: propuestas didácticas con TIC para una educación inclusiva: (1 ed.). Editorial Universidad de Flores.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lucaedu.com/recursos-educativos-digitales/" target="_blank" rel="noopener noreferrer") Díaz, A. G. R. (2021, diciembre 1). Recursos educativos digitales y su importancia en la educación del siglo XXI. Plataforma Educativa Luca; Luca: Plataforma Educativa de Escuelas Privadas de Primaria.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UFBN6gTtGYU" target="_blank" rel="noopener noreferrer") Laboratorio de Innovación Social: "Disrupciones Educativas Abiertas" [@institutodeinvestigacionyd1014]. (2021, 23 de noviembre). Conferencia: “Diseño de materiales educativos utilizando TIC”. [video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'En el diseño de materiales didácticos, ¿qué principio prioriza que los recursos puedan adaptarse a las características y niveles de los estudiantes? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Interactividad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estética visual',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Adaptabilidad',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Retroalimentación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según el MEN, ¿qué dimensión se relaciona con el desarrollo de habilidades para la expresión artística en educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dimensión socioemocional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dimensión estética',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Dimensión corporal',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Dimensión ética',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes plataformas permite diseñar materiales interactivos para evaluar el aprendizaje de forma lúdica? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Moodle',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Canva',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Genially',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Google Drive',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En la aplicación de materiales didácticos, ¿qué proceso permite al docente identificar los conocimientos previos de los estudiantes?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación sumativa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Evaluación diagnóstica',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evaluación analítica',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluación holística',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un beneficio clave del uso de recursos tecnológicos en la creación de materiales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la necesidad de evaluación en el aula  ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar un aprendizaje superficial  ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Facilitar la personalización del aprendizaje  ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eliminar las tareas manuales del docente  ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
