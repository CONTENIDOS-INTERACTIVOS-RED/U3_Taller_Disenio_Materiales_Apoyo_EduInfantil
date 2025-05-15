<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-12.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Como se ha venido trabajando, se parte de que la educación es un proceso fundamental que permite al educando crecer y adquirir competencias esenciales para su integración en la sociedad. Para ello, el docente debe proporcionar diversos materiales y recursos de forma planificada y sistemática. En educación infantil, los recursos materiales actúan como soportes que enriquecen el aprendizaje, siendo necesario que estos sean variados para potenciar la experiencia educativa del niño (Moreno Lucas, 2015).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Sin embargo, existen críticas sobre la formación de los docentes en el uso de materiales educativos. Ruiz y García (2001), citados por Moreno Lucas (2015), señalan que muchos maestros carecen de la capacitación necesaria para aprovechar al máximo los diferentes recursos disponibles, limitándose a seguir las instrucciones básicas proporcionadas por los fabricantes. Es importante seleccionar los materiales adecuados que complementen las experiencias de aprendizaje sin reemplazar la actividad activa del niño, Así como lo hemos visto a lo largo de la asignatura.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left")
          p Según Moreno Lucas (2015), Gassó, resalta que los materiales deben ser diversos para ofrecer experiencias ricas y variadas que fomenten el aprendizaje integral, la autonomía y la interacción entre los niños.
          p Este enfoque asegura que los recursos no solo sirvan como apoyo, sino que también motiven y estimulen el interés de los educandos, en su proceso de aprendizaje.
          p Además, Castillejo (1989), citado por Moreno Lucas (2015), enfatiza la importancia de definir claramente las funciones educativas de los recursos utilizados en el aula, alineándose con los objetivos pedagógicos del curso.
          p Los profesionales de la educación deben ser competentes en la selección y utilización de estos recursos, garantizando un aprendizaje armonioso que respete las características individuales y el desarrollo de cada alumno.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Funciones de los materiales didácticos en la educación 
    
    p.mb-4 Los materiales didácticos desempeñan un papel esencial en la educación infantil, ya que facilitan el aprendizaje a través de la manipulación, la experimentación y la interacción con el entorno.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Funciones de los materiales didácticos en la educación
            p.mb-4(data-aos="fade-right") En el PDF <b>Funciones de los materiales didácticos en la educación</b>, se exploran las diferentes funciones que cumplen estos recursos en el aula, desde el apoyo a la adquisición de conocimientos hasta la estructuración de la información y la motivación de los estudiantes. Asimismo, se analizan criterios clave para su selección y adaptación, asegurando que respondan a las necesidades y características de los niños, fomentando experiencias de aprendizaje significativas y enriquecedoras.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Funciones de los materiales didácticos en la educación.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Las rúbricas en educación inicial, según el MEN en Colombia

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Ministerio de Educación Nacional (MEN) en Colombia, establece que la educación inicial debe centrarse en el desarrollo integral de los niños, considerando dimensiones como la cognitiva, comunicativa, corporal, socioemocional, ética, estética y espiritual. Estas dimensiones son fundamentales para estructurar procesos pedagógicos que respondan a las necesidades y características de los niños en sus primeros años de vida (MEN, 2024).
        p(data-aos="fade-left") En este contexto, las rúbricas se convierten en herramientas claves para evaluar el desarrollo de estas dimensiones de manera objetiva y estructurada. Según el MEN, las rúbricas permiten a los docentes valorar el progreso de los niños en actividades pedagógicas, asegurando que los criterios de evaluación estén alineados con los objetivos de aprendizaje y las características propias de la educación inicial, teniendo en cuenta lo siguiente: 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Evaluación de dimensiones del desarrollo MEN, (2009)
              p Las rúbricas pueden diseñarse para evaluar cómo los niños avanzan en cada dimensión. 
              p <b>Por ejemplo</b>, en la <b>dimensión corporal</b>, se pueden incluir criterios como coordinación motriz y equilibrio. En la <b>dimensión estética</b>, las rúbricas pueden valorar la creatividad y la expresión artística en actividades como pintura o modelado.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Seguimiento del proceso de aprendizaje
              p Las rúbricas permiten a los docentes realizar un seguimiento continuo del desarrollo de habilidades y competencias, identificando fortalezas y áreas de mejora.
              p <b>Por ejemplo</b>, en actividades de juego, se pueden evaluar aspectos como la interacción social y la resolución de problemas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Retroalimentación para el mejoramiento
              p Las rúbricas facilitan la retroalimentación, tanto para los niños como para sus familias, proporcionando información clara sobre el desempeño y las áreas que requieren atención.
    
        

    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/primerainfancia/1739/articles-178053_archivo_PDF_libro_desarrolloinfantil.pdf " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2009). Desarrollo infantil y competencias en la primera infancia. Documento 10. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/170324?page=11 " target="_blank" rel="noopener noreferrer") Pons Corberá, M. (2020). Recursos educativos multidisciplinares: ( ed.). Narcea Ediciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://nmvillarecursosdidacticos.blogspot.com/" target="_blank" rel="noopener noreferrer") Lozada, N. M. V., & Perfil, V. T. mi. (s/f). Recursos didácticos en mi intervención educativa. Blogspot.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sN7CFDzV_t0 " target="_blank" rel="noopener noreferrer") Educagratis [@EducagratisOnline]. (2021, 18 de septiembre). Importancia del uso de material didáctico en educación inicial. [video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
