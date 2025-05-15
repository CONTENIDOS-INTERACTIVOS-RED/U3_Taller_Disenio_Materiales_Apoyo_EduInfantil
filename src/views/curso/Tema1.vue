<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Procedimientos y evaluación en el diseño de secuencias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El diseño y evaluación de secuencias didácticas son elementos clave en la planificación educativa, ya que permiten estructurar el proceso de enseñanza y aprendizaje de manera efectiva.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Procedimientos y evaluación en el diseño de secuencias
            p.mb-4(data-aos="fade-right") En el PDF <b>Procedimientos y evaluación en el diseño de secuencias</b>, se exploran los principios fundamentales para la creación, implementación y validación de secuencias didácticas, considerando aspectos como los objetivos de aprendizaje, los materiales educativos, la adaptación a distintos contextos y la evaluación de su impacto en el aula. A través de este análisis, se busca garantizar que las secuencias diseñadas sean funcionales, pertinentes y contribuyan significativamente al desarrollo de los estudiantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Procedimientos y evaluación en el diseño de secuencias.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Criterios de evaluación
    
    p.mb-4 En este sentido, Tenas y Couso (2023), proponen cuatro criterios de evaluación que se deben tener en cuenta al momento de corroborar la validez y viabilidad de una secuencia didáctica; a continuación, enunciamos los aspectos más relevantes con ejemplos para mayor comprensión.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Relevancia o validez del contenido. ¿Tiene sentido lo que estamos enseñando?")
            p Este criterio se centra en la solidez teórica y la actualidad de los contenidos que se presentan en la secuencia didáctica. Implica una revisión exhaustiva de la literatura especializada y la consulta a expertos en el área (Tenas y Couso, 2023).
            p <b>Aspectos a considerar:</b>
            p <b>Fundamentación teórica.</b> ¿Están los contenidos basados en teorías y modelos pedagógicos reconocidos?
            p <b>Actualidad.</b> ¿Se incluyen los últimos avances y descubrimientos en el campo?
            p <b>Pertinencia.</b> ¿Son los contenidos relevantes para los objetivos de aprendizaje y las necesidades de los estudiantes?
            p <b>Precisión.</b> ¿Se presentan los contenidos de manera clara, precisa y sin errores conceptuales?
            p <b>Ejemplo.</b> Una secuencia didáctica sobre la fotosíntesis, debe basarse en los principios científicos actuales y no en concepciones erróneas o desactualizadas (Tenas y Couso, 2023).

    
          .div(titulo="Consistencia o validez del constructo. ¿Encajan todas las piezas?")
            p Este criterio evalúa la coherencia interna de la secuencia didáctica, asegurando que todos sus componentes estén alineados y se refuercen mutuamente (Tenas y Couso, 2023).
            p <b>Aspectos a considerar:</b>
            p <b>Alineación de objetivos, actividades y evaluación.</b> ¿Están los objetivos de aprendizaje claramente definidos y se corresponden con las actividades y la evaluación?
            p <b>Secuenciación lógica.</b> ¿Están las actividades organizadas de manera lógica y progresiva, facilitando la comprensión y el aprendizaje?
            p <b>Coherencia entre teoría y práctica.</b> ¿Se aplican los principios teóricos de manera coherente en las actividades prácticas?
            p <b>Claridad y precisión.</b> ¿Están las instrucciones y los materiales presentados de manera clara y precisa, evitando confusiones?
            p <b>Ejemplo.</b> Si el objetivo es que los estudiantes aprendan a escribir un ensayo argumentativo, las actividades deben incluir la práctica de la escritura de argumentos y la evaluación debe centrarse en la calidad de los argumentos presentados (Tenas y Couso, 2023).

    
          .div(titulo="Utilidad o practicidad. ¿Podemos usar esto en el mundo real?")
            p Este criterio analiza la viabilidad de la secuencia didáctica en contextos educativos reales, considerando los recursos disponibles y las limitaciones prácticas.
            p <b>Aspectos a considerar:</b>
            p <b>Disponibilidad de recursos.</b> ¿Se requieren materiales o equipos que sean fácilmente accesibles para los estudiantes y los docentes?
            p <b>Tiempo y espacio.</b> ¿Se puede implementar la secuencia didáctica dentro del tiempo y el espacio, disponibles en el aula?
            p <b>Flexibilidad.</b> ¿Es la secuencia didáctica adaptable a diferentes contextos y necesidades de los estudiantes?
            p <b>Facilidad de uso.</b> ¿Es la secuencia didáctica fácil de entender y aplicar, tanto para los docentes como para los estudiantes?
            p <b>Ejemplo.</b> Una secuencia didáctica que requiere el uso de laboratorios especializados o software costoso puede no ser práctica para escuelas con recursos limitados (Tenas y Couso, 2023).

    
          .div(titulo="Eficacia. ¿Funciona realmente?")
            p Este criterio evalúa el impacto de la secuencia didáctica en el aprendizaje de los estudiantes, determinando si se han alcanzado los objetivos de aprendizaje previstos (Tenas y Couso, 2023).
            p <b>Aspectos a considerar:</b>
            p <b>Resultados de aprendizaje.</b> ¿Han mejorado los estudiantes su comprensión y habilidades en relación con los objetivos de aprendizaje?
            p <b>Evidencia de aprendizaje.</b> ¿Se pueden recopilar evidencias claras y objetivas del aprendizaje de los estudiantes (por ejemplo, trabajos, exámenes, proyectos)?
            p <b>Retroalimentación de estudiantes y docentes.</b> ¿Qué opinan los estudiantes y los docentes sobre la efectividad de la secuencia didáctica?
            p <b>Impacto a largo plazo.</b> ¿Se mantienen los resultados de aprendizaje a largo plazo?
            p <b>Ejemplo.</b> Para evaluar la eficacia de una secuencia didáctica sobre la resolución de problemas matemáticos, se pueden comparar los resultados de los estudiantes en pruebas antes y después de la implementación de la secuencia (Tenas y Couso, 2023).

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Procedimientos de evaluación de una Secuencia Didáctica
    
    p.mb-4 La evaluación en una Secuencia Didáctica es un proceso fundamental que permite medir su efectividad, identificar áreas de mejora y garantizar que los objetivos de aprendizaje sean alcanzados de manera significativa.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Procedimientos de evaluación de una Secuencia Didáctica
            p.mb-4(data-aos="fade-right") En el PDF <b>Procedimientos de evaluación de una Secuencia Didáctica</b>, se analizan los diferentes tipos de evaluación—diagnóstica, formativa y sumativa—y su impacto en el proceso educativo. Asimismo, se aborda el papel de la retroalimentación como una herramienta clave para mejorar la enseñanza y fortalecer el aprendizaje de los estudiantes, promoviendo un enfoque reflexivo y basado en la mejora continua.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Procedimientos de evaluación de una Secuencia Didáctica.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
