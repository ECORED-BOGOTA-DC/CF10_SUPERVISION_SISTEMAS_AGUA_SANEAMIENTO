<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Manejo de actores sociales
    
    .container-100.d-flex.flex-wrap(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-1.svg" data-aos="fade-right" alt="Imagen decorativa")
      p.col-lg-7.ps-lg-4(data-aos="fade-left") De acuerdo con la Corporación Autónoma Regional de Cundinamarca CAR (2014), en su documento <em>Guía metodológica y pedagógica</em> como soporte del proceso de educación ambiental, se encuentran los diferentes actores sociales, que son aquellos que se consideran responsables del empoderamiento en sus comunidades y entornos locales, encargados de dirigir y organizar campañas o estrategias ambientales.
        br
        br
        |Generalmente, son grupos compuestos principalmente por los tomadores de decisiones municipales como los Comités Interinstitucionales de Educación Ambiental (CIDEAS), las empresas de servicios públicos, los acueductos municipales o veredales, y los dinamizadores ambientales seleccionados y capacitados previamente por los líderes del proceso, que pueden pertenecer, por ejemplo, al SENA, a la comunidad educativa, a los jóvenes pregoneros responsables de formar y acompañar el proceso implementado por los niños y los hogares, y quienes posteriormente gestionan el conocimiento para que otros usuarios lo repliquen, además del grupo conformado por los niños defensores del recurso natural a trabajar, que implementará el proceso en cada uno de sus hogares (CAR, 2014, p.17).
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_1 1.1 Actores sociales
    
    p.mb-5(data-aos="fade-right") De acuerdo con la CAR (2014), en su documento <em>Guía metodológica y pedagógica</em>, los actores sociales serán la base y el eje dinamizador para el desarrollo eficiente e integral en cada una de las etapas de planeación, ejecución, seguimiento, monitoreo y evaluación, mejoramiento y continuidad, de acuerdo con los roles definidos. 
      br
      br
      |Dentro de los actores sociales que participan en el proceso educativo se encuentran: 

    .row.mb-5
      .col-sm-6.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #0074A7")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-md-5
              h3.text-white.text-center El líder del proceso
              p.text-white Es quien orienta cada una de las etapas. Tiene como función principal organizar y orientar el proceso educativo. En este rol se encuentran ubicados los representantes de acueductos y todos aquellos tomadores de decisiones en la gestión integral del recurso hídrico.
                br
                br
                |El líder debe ser el orientador y organizador del proceso, debe propender por el logro de los resultados e impacto esperado, y determinar las estrategias para su difusión y réplica en la totalidad de los usuarios del servicio de acueducto. De este modo, una de las tareas iniciales es invitar y vincular a todos los actores institucionales y sociales a abordar y planificar acciones, lo cual permitirá contar con una visión compartida que los motive a alcanzar niveles cada vez mayores de eficiencia.

            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.png')})`}" style="background-position: bottom")

      .col-sm-6.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #EE7900")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-3.png')})`}" style="background-position: bottom")
            .tarjeta-slide__contenido.p-4.p-md-5
              h3.text-white.text-center El dinamizador
              p.text-white Tiene como función principal formar, acompañar y multiplicar el proceso en los hogares de los usuarios del servicio de acueducto, participando en las etapas de ejecución y evaluación de resultados. Para la selección de los dinamizadores se debe tener en cuenta:
                br
                br
                |El grupo de dinamizadores puede estar conformado por representantes del acueducto, docentes y/o estudiantes de las instituciones educativas o universidades, al igual que por usuarios del acueducto que quieran participar y que sean previamente seleccionados por la empresa de servicios públicos. Deben tener conocimiento previo en temas ambientales. De este grupo pueden formar parte estudiantes de universidades o practicantes del SENA, grupos organizados de jóvenes ambientales o grupos formados por la CAR, entre otros.

    p.mb-5(data-aos="fade-right") Dentro de los actores sociales se encuentran:

    .titulo-edit.mb-5
      h3 Actores clave

    p.mb-5(data-aos="fade-right") De acuerdo con Zamalloa (2005) en su <em>Manual 5, guías metodológicas para la gestión ambiental</em> dentro de los actores se pueden encontrar actores clave como:

    .row.mb-5
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-1.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #E0F3FF; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Dirigentes de organizaciones comunitarias:</b> (juntas vecinales, clubes deportivos, agrupaciones de mujeres, adultos mayores, jóvenes, etc.).
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-2.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #BBE5FF; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Organizaciones funcionales:</b> usuarios y clubes de madres.

      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-3.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #E0F3FF; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Representantes de instituciones de servicio a la comunidad:</b> docentes de escuelas rurales, policías, bomberos, personal de postas médicas, etc.
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-4.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #BBE5FF; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 Líderes locales.

    .titulo-edit.mb-5
      h3.mb-0 Actores territoriales
    p.mb-5 Es importante aclarar que a nivel territorial existe también una clasificación de actores que deben ser conocidos, analizados e identificados, dentro de los cuales se puede destacar de acuerdo con Núñez (s.f.) en su documento <em>Sostenibilidad y actores sociales en la protección del medio ambiente</em>:
    .row.mb-5
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-5.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #AFF2F2; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Actor de gobierno local:</b> bien sea alcaldías locales, corporaciones autónomas, gobernaciones, entre otros.
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-6.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #D8FDFD; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Actor empresarial:</b> directivos de las empresas productivas o empleados de empresas.

      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-7.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #AFF2F2; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Actor comunidad:</b> pobladores convocados o interesados.
      .col-lg-10.mx-auto
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img(style="max-width: 131px; min-width: 131px;")
            img(src='@/assets/curso/temas/tema1/tj-8.svg' style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul.d-flex.align-items-center.my-auto(style="background-color: #D8FDFD; min-height: 100px")
            .p-4(data-aos="fade-left")
              p.mb-0 <b>Actor promotor de desarrollo:</b> médicos, maestros, promotores culturales, talleristas, gestores ambientales y sociales.
    p.mb-5(data-aos="fade-right") No existe una sola clasificación de actores sociales, esta puede crearse en el momento de la interpretación del territorio.


    .d-flex.flex-wrap.p-3.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema1/img-4.svg' style="max-width: 88px")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") <b>Elementos pedagógicos</b>
        br
        |Son todas las condiciones y programas; planeaciones, estrategias didácticas activas, experiencias pedagógicas y administrativas, evidencias de conocimiento, entre otras, que se integran para desarrollar una temática.
    .titulo-edit.mb-5
      h3 Estrategias didácticas activas

    p.mb-5(data-aos="fade-right") De acuerdo con Martínez y Ciudad-Real (2013), en su <em>Manual de estrategias didácticas activas</em>, el concepto de estrategias didácticas fue expuesto por Velasco y Mosquera (s.f.) en su documento <em>Estrategias didácticas para el aprendizaje colaborativo Paiep</em>, allí se define la estrategia didáctica activa como la selección de actividades y prácticas pedagógicas en diferentes momentos formativos, métodos y recursos en los procesos de enseñanza y aprendizaje.

    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      .bloque-texto-g.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-5.png')})`}"
          style="overflow: hidden; border-radius: 10px;"
        )
        .bloque-texto-g__texto.p-4.tarjeta(style="background-color: #DEE4F0" data-aos="fade-left")
          p.mb-0 Asimismo, el <em>Manual de estrategias didácticas activas</em> manifiesta que las estrategias didácticas contemplan las estrategias de aprendizaje y de enseñanza. Por esto, las estrategias de aprendizaje consisten en un procedimiento o conjunto de pasos o habilidades que un estudiante adquiere y emplea de forma intencional como instrumento flexible para aprender significativamente y solucionar problemas y demandas académicas. Por su parte, las estrategias de enseñanza son todas aquellas ayudas planteadas por el docente, que se proporcionan al estudiante para facilitar un procesamiento más profundo de la información.

    p.mb-5(data-aos="fade-right") Se invita a conocer este <em>Manual de estrategias didácticas</em>:

    .tarjeta.color-acento-contenido.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.text-white.mb-1(style="color: #FCC02D") <em>Manual de estrategias didácticas</em>
              p.text-white Se invita a conocer este <em>Manual de estrategias didácticas</em>, por lo que le invitamos a descargar el documento.
            .col-sm-auto
              a.boton.color-primario(href="https://www.orientacionandujar.es/wp-content/uploads/2015/03/Manual-estrategias-didacticas.pdf" target="_blank" style="min-width: ")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/img-3.svg" style="max-width: 15px")
    Separador

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Estrategias de comprensión oral
    
    p.mb-5(data-aos="fade-right") Es importante entender que los mecanismos que ponemos en marcha durante la actividad de comprensión oral son los mismos que aplicamos cuando escuchamos nuestra lengua materna, a continuación, se da la definición de acuerdo con Geifuls (2009) en el documento 80 herramientas para el desarrollo participativo donde dice:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5(style="background-color: #FFF0DF")
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 Herramientas participativas
            p Las herramientas participativas están previstas para el uso de técnicos y promotores que tienen que trabajar directamente con la población, en la cual generalmente hay muchas personas analfabetas. Permiten también trabajar con base en la experiencia propia de la gente; los métodos participativos usan la visualización y la comunicación oral.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-6.svg' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Fundamentación
            p Estas herramientas se basan en el diálogo que debe respetar un principio fundamental: todos los participantes deben ser considerados como fuente de información y decisión para analizar los problemas y contribuir a soluciones a través de acciones de desarrollo. Todo el mundo, rico o pobre, con o sin educación formal, con o sin poder, debe merecer el mismo respeto y tener la misma posibilidad de expresar sus opiniones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-7.svg' alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Papel del facilitador
            p El papel del facilitador de los eventos es permitir la expresión de las diferentes formas de pensar para que sean compartidas por todos y ayudar a lograr consensos a la hora de tomar decisiones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-8.svg' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") El uso de los textos para llevar a cabo actividades de aprendizaje no consiste en una acción individual y aislada, desligada de su entorno actual, sino en una interacción social, A continuación, destacamos las estrategias asociadas a la comprensión oral para el desarrollo de la habilidad analizando sus principales características:

    .titulo-edit.mb-5
      h3 Método de entrevista y comunicación oral

    .bloque-texto-d.p-4.bloque-texto-d-edit.mb-5.col-xl-10.mx-auto
      .bloque-texto-d__texto.mb-2.d-md-flex
        i.fas.fa-quote-left(style="color: #3BC192")
        p.text-regular(data-aos="fade-right") En este caso se busca triangular o recolectar información desde los diferentes puntos de vista representativos de los diferentes actores involucrados, específicamente sobre una problemática, usualmente son entrevistas semiestructuradas, que pueden ser usadas en cualquier fase del proyecto de educación ambiental; sin embargo, esta estrategia puede estar inmersa dentro de otras metodologías, no es exclusiva, ni limitante.
      .bloque-texto-d__autor.d-flex.justify-content-end
        .h5.mb-0 - (Geifuls, 2009, p.13).
        i.fas.fa-quote-right(style="color: #3BC192")

    .titulo-edit.mb-5
      h3 Diálogo semiestructurado


    .d-flex.flex-wrap.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-9.png' style="max-width: 505px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #98D8D7")
          p.mb-0(data-aos="fade-left") En esta estrategia, de acuerdo con Geifuls (2009) se busca recolectar información general o específica mediante diálogos con individuos (informantes clave), grupos familiares (familias representativas) o grupos enfocados. La técnica de diálogo semiestructurado busca evitar algunos de los efectos negativos de los cuestionarios formales como son: temas cerrados (no hay posibilidad de explorar otros temas), falta de diálogo, falta de adecuación a las percepciones de las personas. “Su aplicación es muy amplia, estudios sociales generales, estudios específicos, estudios de caso, comprobación de información de otras fuentes, etc.” (p. 25). 
        p La diferencia entre un diálogo y una entrevista es que en el primero se busca un intercambio y la fluidez de este, lo que puede generar mayor indagación, aunque no esté planeado.
    p.mb-5(data-aos="fade-right") Para llevarlo a cabo se debe tener en cuenta:

    img.mx-auto.mb-5(src='@/assets/curso/temas/tema1/img-10.svg' style="max-width: 821px" data-aos="fade-left" alt="Gráfico que explica el proceso que se debe tener en cuenta para tener un diálogo semiestructurado. Establecer los puntos fundamentales que quieren aclarar. Estos temas no son preguntas, que van a servir de guía para recordar los temas, pueden anotarlos si es posible. Determinar cómo va a hacer la selección de personasy/o grupos a entrevistar. La selección es muy importante para evitar al máximo sesgos. Realización de charlas. Analizar los resultados. La información obtrenida debe ser comparada con otras fuentes: otras entrevistas, resultados, de otros jercicios sobre el mismo tema. Esto es la triangulación.")

    .titulo-edit.mb-5
      h3 Diálogo con informantes clave

    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-5(data-aos="fade-right") No es un método participativo propiamente dicho; pero puede ser imprescindible para preparar ejercicios de grupo con la comunidad antes de la intervención y también para completar otros ejercicios o chequear ciertas informaciones dialogando con personas bien informadas sobre la comunidad, se puede obtener en forma rápida, información pertinente para orientar el trabajo. La buena selección de los informantes es fundamental para la validez de la información.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-11.png' style="max-width: 505px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4(data-aos="fade-left")
        p.mb-4 Algunos ejemplos de aplicación:
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita comprender las razones fundamentales de tal comportamiento de la gente.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita comprobar hipótesis o propuestas para averiguar rápidamente si son conformes a la realidad y a los deseos de la gente.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Para obtener una visión general de las condiciones socioeconómicas y de producción en la comunidad.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Para evaluar la factibilidad de sugerencias prácticas (Geifuls, 2009).

    .titulo-edit.mb-5
      h3 Diálogo con miembros del hogar

    .container-100.d-flex.flex-wrap(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-5(data-aos="fade-right") De acuerdo con Geifuls (2009) se usa para obtener información pertinente, en forma rápida, trabajando con todos los miembros activos de un grupo familiar. Es una aplicación grupal de la técnica de diálogo semiestructurado.
    
      .col-lg-7.pe-lg-4(data-aos="fade-right")
        p.mb-4 Algunos ejemplos de aplicación son:
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita tratar temas sobre las estrategias de vida y los problemas desde el punto de vista de todos los miembros de la familia.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita comprobar la pertinencia de la información sobre un tema específico, con la interacción entre los diferentes miembros de la familia.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-12.png' style="max-width: 505px" data-aos="fade-left" alt="Imagen decorativa")

    .titulo-edit.mb-5
      h3 Diálogo con grupos de trabajo

    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-5(data-aos="fade-right") Es una aplicación grupal de la técnica de diálogo semiestructurado, que de acuerdo con Geifuls (2009), permite obtener información pertinente, en forma rápida, trabajando con un grupo reducido de gente directamente involucrada en la problemática estudiada.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-13.png' style="max-width: 505px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4(data-aos="fade-left")
        p.mb-4 Algunos ejemplos de aplicación son:
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita consultar una categoría o un grupo determinado (por ejemplo, mujeres, artesanos, líderes, personas expertas sobre el tema, etc.).
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Cuando se necesita comprobar la pertinencia de la información sobre un tema específico, con la dinámica del grupo que permite una participación más abierta (p. 30).

    .titulo-edit.mb-5
      h3 Grupos focales

    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema1/img-14.jpg" alt="Imagen decorativa")
      .container-offset.col-lg-10.mx-auto
        p(data-aos="fade-right") Teniendo en cuenta a Zabaleta (2005) los grupos focales son un método efectivo de recolección de información cualitativa, en el cual uno o dos investigadores y varios participantes se reúnen en una sesión grupal para discutir un tema, las sesiones generalmente son grabadas en video para facilitar el análisis posterior de la información. Además, están dirigidas por un moderador y un relator, que conducen la discusión con los participantes a través de preguntas abiertas, es decir, preguntas que detonan reflexiones que van más allá de un “sí” o un “no”.

    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.text-white.mb-1(style="color: #FCC02D") 80 herramientas para el desarrollo participativo
              p.text-white Para ampliar la información sobre las estrategias se puede consultar el documento.
            .col-sm-auto
              a.boton.color-primario(href="https://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59" target="_blank" style="min-width: ")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/img-3.svg" style="max-width: 15px")

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-15.svg' style="max-width: 505px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        p.mb-4(data-aos="fade-left") Comprender lo que abarca la comunicación ambiental puede ser algo complejo debido a que hay que tener en cuenta diferentes campos, los consultores educativos ambientales en su documento <em>Plan de comunicación ambiental para la conservación de los arrecifes de coral de Puerto Rico</em> manifiestan que establecer una definición del concepto comunicación ambiental es difícil precisamente por la amplitud de su alcance y las múltiples facetas que incluye; pero en esos elementos está el objetivo principal de fomentar en los ciudadanos el entendimiento de los procesos que ocurren en la naturaleza.

    Separador

    .titulo-segundo.color-acento-botones
      h2#t_1_3 1.3 Metodologías de comunicación ambiental
    
    p.mb-5(data-aos="fade-right") Basados en los estudios de Pillmann (s.f.) se define la comunicación ambiental como cualquier flujo de información ambientalmente relevante, que involucra tanto comunicadores como audiencias y se logra mediante la entrega de mensajes efectivos y de recepción interactiva (p.6). 
      br
      br
      |Se deben establecer diferentes canales de comunicación, que son los medios a través de los cuales el ciudadano se enterará de las diferentes temáticas ambientales que se quieran divulgar, entre otros se encuentran:
    
    .d-flex.flex-wrap.align-items-start.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg' style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Carteles" data-aos="fade-left")
            p Estos son instrumentos excelentes para resumir reglamentos, recomendaciones para la conservación y códigos de conducta. Es importante seleccionar lugares y condiciones estratégicas para la exposición y colocación de carteles, ya que hay diferentes lugares que prohíben este tipo de canal de comunicación, adicional a esto se debe tener en cuenta en la planificación el diseño de colores, materiales, formas, etc.
          .row(titulo="<em>Billboards</em>")
            p Los carteles para anuncios son mensajes pertinentes e importantes sobre los temas ambientales, pueden ser muy efectivos para llegar al público en general.
              br
              br
              |El lugar de exposición efectiva puede ser los aeropuertos, edificios importantes de la ciudad, vías principales o espacios costeros. Este es un producto costoso y se debe tener esto en cuenta para su empleo. 
          .row(titulo="Medios tradicionales")
            p Los medios tradicionales de comunicación masiva, en los que se incluyen la radio, la televisión, los periódicos y el cine, son estrategias efectivas para comunicarse con el público en general. Tienen un gran reconocimiento, debido a que es la estrategia que se ha utilizado ampliamente durante muchos años. 
          .row(titulo="Internet")
            p Representa, en este momento, una estrategia muy efectiva para establecer comunicación con el público y promover la conservación de arrecifes de coral. Además de la página oficial de la idea que se quiera comunicar, existe la posibilidad de abrir redes sociales como Facebook, Twitter, Instagram, blogs, YouTube, TikTok, entre otras, mediante las cuales la información pertinente se disemina más rápido y con mayor amplitud. 

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema1/img-17.svg' style="max-width: 88px")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") En el proceso de trabajo con comunidades el momento de sensibilización a las personas es elemental para garantizar, no solo que las bases del proyecto se encuentran cimentadas, sino que a su vez el proceso de transformación requerido alcance la meta propuesta.

    p.mb-5(data-aos="fade-right") De acuerdo con Castro y otros (2007), en su documento <em>Estrategia de educación ambiental para el conocimiento, el uso  y la conservación de la biodiversidad en Colombia</em> del Instituto de Investigaciones de Recursos Biológicos Alexander Von Humboldt, la sensibilización es un proceso que debe darse desde el primer momento con la comunidad y debe mantenerse en todo el proceso de educación ambiental, en otras palabras, desde esa etapa se hace referencia al descubrimiento de la realidad que se quiere transformar (diagnóstico); al descubrimiento de los actores, con sus fortalezas, debilidades, competencias y responsabilidades; y al establecimiento del proceso que se va a emprender.

    .cajon.color-acento-botones.p-4.mb-5.col-lg-10.col-xl-8.mx-auto(style="background-color: #98D8D7")
      p.mb-0(data-aos="fade-right") De acuerdo con el <em>Sumario sensibilización ambiental</em> de la red de autoridades ambientales, el objetivo de la sensibilización es implicar a los ciudadanos en las actividades ambientales y modificar sus comportamientos mediante la capacitación para la sostenibilidad ambiental.   
    p.mb-5 Para este eje se prevén dos medidas específicas: 
    
    img.mb-5.mb-md-auto.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-18.svg' style="max-width: 820px" data-aos="fade-right" alt="Imagen decorativa")
    img.mb-5.mb-md-auto.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-18-movil.svg' data-aos="fade-right" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Si bien es muy importante la responsabilidad que deben asumir las instituciones en la protección y mejora del medio ambiente, es también muy necesaria la labor que la sociedad puede realizar. En este sentido, el primer paso para conseguir desarrollar en el ciudadano conductas respetuosas con el medio ambiente es dar a conocer la situación actual del problema, facilitando información sobre las contribuciones para la preservación del medio ambiente desde la responsabilidad compartida, es decir, sensibilizar la ciudadanía. 

    .container-100.d-flex.flex-wrap.align-items-center.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-19.png' style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        p.mb-4(data-aos="fade-left") El consumo racional de los recursos naturales pasa por una concienciación previa, que ayuda a cambiar las pautas de comportamiento entre la ciudadanía, por la asimilación de un medio ambiente que concierne a todos y que afecta a todos los sectores profesionales. 
          br
          br
          |Además de un conocimiento general de los problemas ambientales a los que se enfrenta nuestra sociedad, la sensibilización apuesta por la creciente necesidad para que el trabajador conozca los riesgos y los impactos que el desempeño de su profesión tiene sobre el medio, así como la forma de minimizar dichos impactos a través de buenas prácticas ambientales en las diferentes familias profesionales.

    .titulo-edit.mb-5
      h3 Estrategias de sensibilización

    .container-100.d-flex.flex-wrap.align-items-center.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      .col-lg-8.pe-lg-4(data-aos="fade-right")
        p.mb-4 Deben abordar diferentes temáticas tales como el concepto de medio ambiente, los problemas ambientales a escala global, el cambio climático, la acidificación y la contaminación del suelo y del agua, la pérdida de biodiversidad, la deforestación y la desertificación, entre otros. 
          br
          br
          |Seguido a esto se relacionan los problemas ambientales de la sociedad actual con el desarrollo de las ciudades, se describe la actuación que tienen las administraciones públicas, las funciones de autoridades ambientales, los ministerios y otras instituciones relacionadas con el medioambiente, así como el papel de la sociedad en dichos problemas ambientales. 
          br
          br
          |La red de autoridades ambientales en el <em>Sumario de sensibilización ambiental</em> propone, de igual manera, diferentes estrategias de sensibilización de acuerdo con los niveles que se quieran llegar, desde un nivel amplio a un nivel específico.
          br
          br
          |Se tienen las siguientes estrategias:

      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img-20.png' style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")

    .d-flex.flex-wrap.mb-5
      img.col-xl-4.mb-4.mb-xl-auto.mx-auto(src='@/assets/curso/temas/tema1/img-21.svg' style="max-width: 387px" data-aos="fade-right" alt="Imagen decorativa")
      TabsA.col-xl-8.ps-xl-4.color-acento-contenido.mb-5.tabs-edit(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Desarrollo de un módulo")
          h3 Desarrollo de un módulo de sensibilización ambiental general
          p Debe contener información básica, de fácil comprensión y contar con integración en todos los programas de formación ocupacional, es decir, agricultura, industria, energía, transporte y turismo, así como para el sector de la pesca y la acuicultura. En este desarrollo se deben tener en cuenta también todos los niveles educativos.
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Elaboración de módulos")
          h3 Elaboración de módulos de sensibilización específicos
          p Para las áreas específicas del medioambiente tales como residuos, aguas, contaminación atmosférica, biodiversidad, medio marino, etc. En este nivel se puede utilizar un lenguaje técnico, manteniendo la comprensión del lector común.
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Desarrollo de acciones")
          h3 Desarrollo de acciones de apoyo al empleo en el ámbito del medioambiente
          p Trabajo directo con profesionales ambientales, promotores ambientales y personal relacionado.
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
  data: () => ({
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.linea-tiempo-d__item
  .linea-tiempo-d__item__number
    background-color: #E8E8E8
  .linea-tiempo-d__item__content
    background-color: #E8E8E8
.container-text-img-2
  display: flex
  flex-wrap: wrap
  img
    margin-right: -10rem
    position: relative
  p
    padding: 2rem
    background-color: #F6F6F6
    border-bottom-right-radius: 50px
    border-top-left-radius: 50px
    display: flex
    align-items: center
    padding-left: 11rem
    margin-top: 2rem
  @media (max-width: 991px)
    img
      margin-left: auto
      margin-right: auto
    p
      margin-top: 0
      padding-left: 2rem
.pasos-edit
  .pasos-a__item
    .pasos-a__numero
      &::after
        border-color: black !important
      .pasos-a__circle
        background-color: white
        border: 6px solid #FFA031
        .h2
          color: black
    .pasos-a__linea
      .pasos-a__linea__esquina
        .pasos-a__linea__esquina__linea
          border-radius: 0 !important
          border-color: black
      .hor-line
        border-color: black
.bloque-texto-d-edit
  border-top: 1px solid #3BC192
  &::before
    background-color: #CFE8FE
</style>
