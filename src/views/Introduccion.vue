<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center
      .col-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets//curso/introduccion/img_1.png", class="img-fluid")      
      .col-12.col-lg-9
        p.mb-4 Este componente desarrolla los fundamentos conceptuales que permiten comprender cómo el análisis de la competitividad, el diagnóstico del mercado, los factores internos y externos, la segmentación, los sistemas de distribución y el <em>e-marketing</em> aportan a la formulación de estrategias alineadas con el direccionamiento estratégico.
        .tarjeta.tarjeta--fondo-img-01.py-4.px-5.mb-0
          p.mb-0 El contenido se abordará mediante un enfoque técnico aplicado, integrando explicaciones conceptuales, ejemplos y situaciones propias del contexto organizacional que faciliten la interpretación de la información y el análisis estratégico. De esta manera, el aprendiz fortalecerá su capacidad para comprender la relación entre los diferentes elementos que sustentan la planeación estratégica y su aplicación en la formulación de estrategias de mercadeo orientadas al logro de los objetivos organizacionales.
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
