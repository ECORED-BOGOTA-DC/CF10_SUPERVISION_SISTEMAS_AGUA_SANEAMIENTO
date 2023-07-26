<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%);")
      img.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/img-1.svg" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        .cajon.color-acento-botones.p-4.mb-5(style="background-color: #98D8D7")
          p Diversas estrategias se utilizan en la sensibilización y la educación de las comunidades; sin embargo, de estas depende la participación de una comunidad en un proyecto, los grupos que se puedan llegar a formar y los mecanismos de participación que tendrán. Es de vital importancia dar a conocer los proyectos para que la comunidad tome la mejor decisión.
        p.mb-0 Les invitamos a contextualizar los temas para orientar comunidades con el siguiente video:
        

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pCwSNA8CJcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
