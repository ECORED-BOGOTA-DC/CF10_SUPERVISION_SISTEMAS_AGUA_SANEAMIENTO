<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Estrategias de comunicación con actores
    
    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      .bloque-texto-g.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
          style="overflow: hidden; border-radius: 10px;"
        )
        .bloque-texto-g__texto.p-4.tarjeta(style="background-color: #DEE4F0" data-aos="fade-left")
          p.mb-0 Una vez se tienen claras las características de la comunidad en temas físicos (territorios), sociales (enfoque diferencial), naturales (características ecosistémicas), económicas (estratos, vulnerabilidades) y educativas (nivel de alfabetismo y de educación) se pueden iniciar los procesos de participación ciudadana.
    
    p(data-aos="fade-right") Según Peter Drucker, consultor de negocios y creador de la administración moderna, “el 60% de todos los problemas administrativos son el resultado de una comunicación ineficaz”. Por ello, no es de extrañar que una compañía llegue a perder millones por una mala estrategia de comunicación, y lo mismo sucede con las pequeñas y medianas empresas. De ahí la importancia de elaborar estrategias de comunicación que vayan encaminadas a expresar la esencia de la organización, así como incorporar nuevas tecnologías que permitan adaptarse a los nuevos mercados y formas de consumo.

    Separador

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Procesos de participación ciudadana

    .container-100.d-flex.flex-wrap.align-items-center.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-2.svg" data-aos="fade-right" alt="Imagen decorativa")
      p.col-lg-7.ps-lg-4(data-aos="fade-left") En todos los procesos de orientación a comunidades se utiliza mucho el término participación, pues es un eje estratégico dado que muchos proyectos fracasan o no cumplen el 100% de las metas por falta de participación real de las personas o actores involucrados.
        br
        br
        |En el documento 80 herramientas para el desarrollo participativo Geifuls (2009) describe que “la participación es un proceso mediante el cual la gente puede ganar más o menos grados de participación en el proceso de desarrollo” (p.1). 

    .titulo-edit.mb-5
      h3 Procesos de participación ciudadana comunitaria 
    
    p.mb-5(data-aos="fade-right") De acuerdo con Geifuls (2009) lo que determina la participación de las personas es el grado de decisión que tienen en el proceso. Esto es válido tanto en las relaciones entre los miembros de la comunidad y la institución de desarrollo, como dentro de las organizaciones comunitarias (p.1).
      br
      br
      |Por ello, se considera que se pueden encontrar siete niveles de participación ciudadana comunitaria de acuerdo con Geifuls (2009): 
    
    .d-flex.flex-wrap.align-items-start.mb-5
      img.col-xl-4.mb-4.mb-xl-auto.mx-auto(src='@/assets/curso/temas/tema2/img-3.svg' style="max-width: 387px" data-aos="fade-right" alt="Imagen decorativa")
      TabsA.col-xl-8.ps-xl-4.color-acento-contenido.mb-5.tabs-edit(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Pasividad")
          p Las personas realizan una participación solo cuando se les busca y se les informa; pero no tienen incidencia alguna en decisiones del proyecto requerido. 
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Suministro de información")
          p En este caso, es solo en aplicación de encuestas y su participación se limita como fuente de información sobre una temática. 
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Participación por consulta")
          p Las personas son consultadas por agentes externos que escuchan su punto de vista; esto sin tener incidencia sobre las decisiones que se tomarán a raíz de dichas consultas. 
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Participación por incentivos")
          p Se involucran personas con el fin de trabajar por algún intercambio, por ejemplo, aportan recursos como tierra o plántulas para huertos o materiales para carteleras y murales a cambio de capacitación o mejoras en su propio territorio, en este caso el proyecto requiere su participación; pero no tiene incidencia directa en las decisiones.  
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Participación funcional")
          p En este caso, las personas conforman grupos de trabajo para responder objetivos predeterminados por el proyecto, no tienen incidencia sobre la formulación, pero se tienen en cuenta en el monitoreo y el ajuste de las actividades. 
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Participación interactiva")
          p Los grupos locales organizados participan en la formulación, implementación y evaluación del proyecto; esto implica procesos de enseñanza y aprendizaje sistemáticos y estructurados, y la toma de control en forma progresiva del proyecto. 
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Autodesarrollo")
          p Los grupos locales organizados toman iniciativas sin esperar intervenciones externas; las intervenciones se hacen en forma de asesoría y como socios. 

    .titulo-edit.mb-5
      h3 Derechos y deberes de la ciudadanía
    
    p.mb-5(data-aos="fade-right") Para hablar de los procesos de participación ciudadana es importante primero, referenciar los derechos y deberes de los participantes en las distintas modalidades de participación ciudadana.
      br
      br
      |Teniendo en cuenta la <em>Carta iberoamericana de participación ciudadana en la gestión pública</em> (2009) se pueden resaltar: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.p-5(style="background-color: #9CD1F2")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-4.svg' style="max-width: 182px" data-aos="fade-left" alt="Imagen decorativa")
        h2.text-center Deberes de los ciudadanos
        ol.lista-ol--cuadro
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Conocer y hacer buen uso de los mecanismos de participación ciudadana.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Participar de manera informada sobre las decisiones que le afecten.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Escuchar y argumentar con la mayor objetividad mediante el diálogo.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Respetar las reglas, la palabra y el turno de otros, aun cuando no comparta su opinión.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Intervenir en los procesos de participación ciudadana, permitiendo aprendizajes para su mejora.

      .col-md.tarjeta.p-5(style="background-color: #F6CC9A")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-5.svg' style="max-width: 182px" data-aos="fade-left" alt="Imagen decorativa")
        h2.text-center Derechos de los ciudadanos
        ol.lista-ol--cuadro
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Ser convocado agotando los medios destinados para tal fin, respetando los mecanismos de representatividad de su colectivo o asociación.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Ser informado tempranamente sobre el objetivo, tema y motivo.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Participar según la modalidad del proceso y conocer sus reglas de juego.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Ser tratado y escuchado con respeto.
          li.d-flex
            .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/img-4.svg" style="max-width: 20px")
            | Conocer los resultados finales del proceso del cual hizo parte.

    .titulo-edit.mb-5
      h3 Principios de la participación ciudadana
    
    p.mb-5(data-aos="fade-right") Son los rectores del proceso de participación ciudadana, de acuerdo con el Ministerio de Salud y Protección Social (2016), en su <em>Manual metodológico de participación ciudadana</em> los principios elementales son:



    PasosA.color-primario.mb-5(tipo="n")
      .d-flex.flex-wrap.align-items-center
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Comunicación efectiva para preparar interacciones más amplias y rápidas con los ciudadanos y asegurar una mejor gestión del conocimiento. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 280px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 280px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Transparencia desde el principio del proceso hasta el final, donde se socialicen los resultados y se informe cómo se incorporaron las recomendaciones del público participante en la política pública. 
      .d-flex.flex-wrap.align-items-center
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Confianza en doble vía para estrechar la credibilidad mutua, donde prevalezca el interés por un mejoramiento de la salud y por ende, de la calidad de vida de los colombianos. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 280px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 280px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Compromiso a través del liderazgo para brindar información temprana, así como para garantizar que el interés común se priorice sobre el particular, lo cual se traduce en mecanismos de consulta y participación a todos los niveles. 
      .d-flex.flex-wrap.align-items-center
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Claridad en los objetivos, límites y alcance de la participación ciudadana a desarrollarse, los cuales deben ser informados previa y claramente para que ayude en la construcción colectiva del conocimiento, confianza y compromiso. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 280px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 280px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Objetividad en la información que MinSalud provea durante el desarrollo de la participación ciudadana, así como en la socialización de los resultados de la misma, para que todos los ciudadanos estén informados de manera completa y veraz.
      .d-flex.flex-wrap.align-items-center
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Ciudadanía activa que se documenta e informa sobre sus deberes y derechos, logrando comunicar el bien mayor para su comunidad y aumentando la conciencia ciudadana para reforzar la participación decidida, activa y constructiva. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 280px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-13.svg" style="max-width: 280px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Igualdad en la participación ciudadana, de forma tal que existan las garantías necesarias para participar como ciudadanos en igualdad de condiciones. 
      .d-flex.flex-wrap.align-items-center
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") La autonomía en la participación ciudadana dentro de la gestión pública debe ejercerse con total independencia de posibles intereses ajenos al bien común.
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 280px" data-aos="fade-left" alt="Imagen decorativa")

    .titulo-edit.mb-5
      h3 Mecanismos de participación ciudadana
    
    p.mb-5(data-aos="fade-right") Son un instrumento público donde se garantiza que se respeten los derechos de los ciudadanos a estar enterados de los proyectos que se realizarán en sus territorios y a dar su punto de vista. 
      br
      br
      |Dentro de los mecanismos de participación ciudadana se encuentran: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Veedurías ciudadanas" data-aos="fade-left")
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 280px" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4 Es un mecanismo democrático de representación que permite a los ciudadanos o a las diferentes organizaciones comunitarias ejercer vigilancia sobre la gestión pública, respecto a las autoridades administrativas, políticas judiciales, electorales, legislativas y órganos de control, como también entidades públicas o privadas que operen en el país, encargadas de la ejecución de un programa, proyecto, contrato o la prestación de un servicio público.
      .row(titulo="Acciones populares" data-aos="fade-left")
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-16.svg" style="max-width: 280px" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4 Son acciones para la protección de los derechos e intereses colectivos, relacionados con el patrimonio, el espacio, la seguridad y la salubridad pública, la moral administrativa, el ambiente, la libre competencia económica y otros de similar naturaleza.

    .cajon.color-acento-botones.p-4.mb-4.col-lg-10.col-xl-8.mx-auto.mb-5(style="background-color: #98D8D7")
      p.mb-0(data-aos="fade-left") <b>Importante:</b> la legalidad de las veedurías se verifica con la inscripción ante la Personería o ante la Cámara de Comercio, para este caso la veeduría se inscribe como entidad sin ánimo de lucro y se constituye a través de un acta de asamblea de constitución (Ley 850, 2003).

    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-17.jpg" alt="Imagen decorativa")
      .container-offset.col-lg-10.mx-auto
        p(data-aos="fade-right") Ahora bien, los mecanismos de participación ciudadana tienen dos orígenes: popular o de autoridad pública. Entre los mecanismos de origen popular se encuentran la iniciativa popular legislativa y normativa ante las corporaciones públicas, el cabildo abierto y la revocatoria del mandato; por otro lado, de origen en autoridad pública están el plebiscito que puede tener origen en la autoridad pública o popular, el referendo y la consulta popular (Instituto Distrital de la Participación y Acción Comunal, 2007).

    p.mb-5 De acuerdo con el IDPAC (2007) se pueden definir de la siguiente forma:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5(style="background-color: #FFF0DF")
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 El plebiscito
            p Es el mecanismo mediante el cual el presidente de la república convoca a la ciudadanía a que apoye o rechace una decisión del ejecutivo puesta en cuestión y que no requiere aprobación del Congreso, excepto las relacionadas con los estados de excepción y el ejercicio de los poderes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-18.png' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 El referendo
            p Es la convocatoria mediante la cual los ciudadanos pueden participar en la aprobación o derogación del proyecto de una norma jurídica o de una ya vigente, así como en la creación o segregación de un municipio; en la derogación de una reforma constitucional o sometan a aprobación un proyecto de reforma constitucional. El referendo puede ser nacional, regional, departamental, distrital, municipal o local.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-19.png' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 El cabildo abierto
            p Es la reunión pública del concejo distrital, municipal o juntas administradoras locales, en la cual hay participación de los habitantes para discutir libremente de manera directa y pública los asuntos de interés de la comunidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-20.png' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 La iniciativa popular
            p Es un derecho político de participación ciudadana que consiste en la posibilidad de que la ciudadanía pueda presentar proyectos de normas jurídicas ante el Congreso de la República para que, dentro de la misma, sean debatidos y posteriormente aprobados, modificados o negados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-21.png' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 La revocatoria del mandato
            p Es un derecho político, por medio del cual la ciudadanía mediante votación directa puede cesar de su cargo público a un funcionario electo, ya sea un gobernador o un alcalde y, es clara al señalar que no aplica para otros funcionarios de elección popular como congresistas, diputados, concejales o el presidente de la república.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-22.png' data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            h3 La consulta popular
            p Es el mecanismo de participación mediante el cual una pregunta de carácter general sobre un tema de trascendencia nacional, departamental, distrital, municipal o local es sometida por el presidente de la república, gobernador o alcalde, según sea el caso, a consideración del pueblo para que este se pronuncie formalmente al respecto.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-23.png' data-aos="fade-left" alt="Imagen decorativa")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2 Indicadores, percepción y desempeño
    
    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema2/img-24.svg' style="max-width: 88px")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Dentro de los procesos de orientación de comunidades una parte fundamental se relaciona al manejo de indicadores de diferente índole como de percepción y desempeño, estos instrumentos forman parte de la última fase de la educación ambiental denominada monitoreo y evaluación. 

    .cajon.color-acento-botones.p-4.mb-4.col-lg-10.col-xl-8.mx-auto.mb-5(style="background-color: #98D8D7")
      p.mb-0(data-aos="fade-left") El monitoreo de acuerdo con el Ministerio de Salud y Protección Social (2016) en su documento <em>Manual metodológico de participación ciudadana</em> se define como un examen continuo de los procesos y la generación de productos de un programa durante la ejecución del mismo. Su propósito es ajustar sobre la marcha, posibles cambios sobre los aspectos operacionales del programa monitoreado. El monitoreo usualmente genera datos de forma periódica que pueden ser usados para el seguimiento o la evaluación.

    .titulo-edit.mb-5
      h3 Indicador de desempeño
    
    p.mb-4(data-aos="fade-right") De acuerdo con el documento de <em>Lineamientos metodológicos para la construcción de indicadores de desempeño</em> de la CEPAL el indicador de desempeño es una herramienta que entrega información cuantitativa respecto al logro o resultado de los objetivos de la institución, cubriendo aspectos cuantitativos o cualitativos, a través del indicador de desempeño se pueden tomar decisiones respecto a la gestión de los recursos.
      br
      br
      |Es necesario tener seguimiento de los objetivos a través de los indicadores de desempeño, ya que estos ofrecen ventajas considerables en la toma de decisión teniendo en cuenta que:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5(style="background-color: #FFF0DF")
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p Son herramientas de gestión que proveen un valor de referencia a partir del cual se puede establecer una comparación entre las metas planeadas y el desempeño logrado.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-25.svg' data-aos="fade-left" style="max-width: 433px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p Un indicador de desempeño es una herramienta que entrega información cuantitativa respecto al logro o resultado de los objetivos de la institución.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-26.svg' data-aos="fade-left" style="max-width: 515px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p Los indicadores de desempeño son medidas que describen cuán bien se están desarrollando los objetivos de una institución, a qué costo y con qué nivel de calidad.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-27.svg' data-aos="fade-left" style="max-width: 433px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p En un sistema de cuenta pública orientada a resultados se requieren datos sobre un conjunto de indicadores diferentes, que reflejan la información necesaria para distintos niveles de la toma de decisiones.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-28.svg' data-aos="fade-left" style="max-width: 426px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p Los legisladores y los directores requieren información estratégica sobre la gestión de la institución (resultados finales e impacto), mientras que los gerentes de divisiones, departamentos o programas y su <em>staff</em> requieren detalles sobre la provisión de insumos, las actividades, los productos finales y los resultados intermedios.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-29.svg' data-aos="fade-left" style="max-width: 515px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p La idea de incorporar indicadores y metas de desempeño al proceso presupuestario es disponer de información sobre los niveles de cumplimiento de los objetivos planteados, los resultados esperados de cada institución y enriquecer el análisis en la formulación del presupuesto y su discusión en el Congreso.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-30.svg' data-aos="fade-left" style="max-width: 516px" alt="Imagen decorativa")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
            p Los indicadores y sus metas se presentan como información complementaria al Proyecto de Ley de Presupuestos, y una vez aprobado este, las metas se vinculan con el seguimiento (monitoreo) de la ejecución.
          .col-md-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-31.svg' data-aos="fade-left" style="max-width: 528px" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") El indicador de desempeño es una herramienta que entrega información cuantitativa respecto al logro o resultado de los objetivos de la institución, cubriendo aspectos cuantitativos o cualitativos, a través del indicador de desempeño se pueden tomar decisiones respecto a la gestión de los recursos. Entre los principales indicadores de desempeño se pueden encontrar:

    .tarjeta.p-4.mb-5(style="background-color: #EBF4FD")
      LineaTiempoC.color-primario(text-small)
        .row.col-lg-11.mx-auto.justify-content-between(titulo="1")
          .col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
            h3 Indicador de cobertura
            p Mide la cantidad de elementos de un universo que cumple una condición, por ejemplo, el porcentaje de colaboradores de una empresa que ha recibido capacitación en temas ambientales.
          .col-lg-7(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema2/img-32.svg' alt="Ecuación que indica que el porcentaje de capacitados se da dividiendo la cantidad de colaboradores capacitados sobre el total de colaboradores en la empresa y luego esto se multiplica por cien.")

        .row.col-lg-11.mx-auto.justify-content-between(titulo="2")
          .col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
            h3 Indicador de focalización
            p Mide la cantidad de elementos que cumplen una condición determinada y están dentro del índice de cobertura, por ejemplo, porcentaje de colaboradores de una empresa que ha recibido la capacitación titulada “minimización de contaminantes en aguas residuales”.
          .col-lg-7(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema2/img-33.svg' alt="Ecuación que indica que el porcentaje de capacitados se da dividiendo los colaboradores capacitados en minimización de contaminantes sobre el total de colaboradores en la empresa y luego esto se multiplica por cien.")
        
        .row.col-lg-11.mx-auto.justify-content-between(titulo="3")
          h3 Indicadores de eficiencia
          p Son útiles para evaluar los costos relativos y productividad que diferentes métodos de servicio entregan a la producción de bienes.
            br
            br
            |Los indicadores de eficiencia pueden expresarse como “costo por producto”, “costo por capacitación”, “unidades por insumo” o “costo por resultado”.

        .row.col-lg-11.mx-auto.justify-content-between(titulo="4")
          h3 Indicadores de calidad
          p Miden atributos, capacidades o características que deben tener los bienes o servicios para satisfacer adecuadamente los objetivos del programa.
            br
            br
            |• Calidad es una dimensión de la eficacia, pero por su importancia se la distingue con nombre propio. 
            br
            br
            |Dentro de los indicadores de calidad se encuentran los denominados indicadores de percepción, entre los cuales se encuentran el grado de satisfacción de los usuarios, el tiempo de respuesta a requerimientos de los beneficiarios, entre otros. 

    p.mb-5(data-aos="fade-right") El indicador de desempeño es una herramienta que entrega información cuantitativa respecto al logro o resultado de los objetivos de la institución, cubriendo aspectos cuantitativos o cualitativos, a través del indicador de desempeño se pueden tomar decisiones respecto a la gestión de los recursos. Seguidamente, se describen los pasos para elaborar correctamente un indicador de desempeño: 

    .container-100.d-flex.flex-wrap(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      ol.lista-ol--cuadro.lista-ol--separador.col-lg.order-2.order-lg-1.pe-lg-4
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 1
          | Establecer las definiciones estratégicas como referente para la medición.
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 2
          | Establecer las áreas de desempeño relevantes a medir. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 3
          | Formular el indicador y describir la fórmula de cálculo. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 4
          | Validar los indicadores aplicando criterios técnicos. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 5
          | Recopilar los datos. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 6
          | Establecer las metas o el valor deseado del indicador y la periodicidad de la medición. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 7
          | Señalar la fuente de los datos o medios de verificación. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 8
          | Establecer supuestos (observaciones). 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 9
          | Evaluar: establecer referentes comparativos y establecer juicios. 
        li 
          .lista-ol--cuadro__vineta(data-aos="fade-right")
            span 10
          | Comunicar e informar el desempeño logrado. 
      img.mx-auto.order-1.order-lg-2.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-34.png" style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema2',
  components: { TabsA },
  data: () => ({}),
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
.container-card-folder
  display: flex
  margin-bottom: 2rem
  .container-number
    width: 105px
    min-width: 105px
    height: 105px
    display: flex
    justify-content: center
    align-items: center
    background-color: #0078BB
    color: white
    font-weight: bold
    font-size: 60px
    margin-top: 1.5rem
    position: relative
    border-top-left-radius: 8px
    border-bottom-left-radius: 8px
  .container-folder
    border-radius: 8px
    background: linear-gradient(0deg, #DEDEDE 0%, white 50%, #DEDEDE 100%)
    flex: 1 0 0%
    box-shadow: 0 0 5px 2px #00000010
    .sup-folder
      height: 1.5rem
    h3
      padding: .4rem 1.5rem
      background-color: #0078BB
      min-height: 40px
      display: flex
      align-items: center
      color: white
      margin-bottom: 0
    .container-text-folder
      padding: 1rem 1.5rem
      min-height: 89px
  @media (max-width: 768px)
    .container-number
      min-width: 60px
      width: 60px
      height: 60px
      font-size: 30px
.pasos-a
  .pasos-a__linea
    .pasos-a__linea__esquina
      .pasos-a__linea__esquina__linea
        border-radius: 0
</style>
