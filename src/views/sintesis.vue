<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden

    .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/sintesis/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
          .col-12.col-xl-7.p-5
            p.mb-0 El componente formativo Fundamentos estratégicos de mercadeo ofrece al aprendiz los fundamentos conceptuales necesarios para comprender la planeación estratégica como eje orientador de las decisiones de mercadeo, durante su desarrollo se analizan la competitividad, el diagnóstico del mercado, los factores externos e internos de la organización, el direccionamiento estratégico y la formulación de objetivos de mercadeo, favoreciendo la comprensión de los elementos que sustentan la toma de decisiones estratégicas en contextos organizacionales. 

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/sintesis/img_2.png", class="img-fluid")  
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 Asimismo, el componente desarrolla conocimientos relacionados con la segmentación del mercado, los sistemas de distribución, las condiciones políticas, económicas y sociales del entorno, así como el <em>e-marketing</em> como apoyo para la implementación de estrategias de mercadeo. Estos contenidos fortalecen la capacidad para interpretar información del mercado, orientar procesos de planeación estratégica y comprender la relación entre el análisis organizacional y el cumplimiento de los objetivos de mercadeo.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
