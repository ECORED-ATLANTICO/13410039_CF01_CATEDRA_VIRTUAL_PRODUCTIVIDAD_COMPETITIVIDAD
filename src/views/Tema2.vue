<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diagnósticos del mercado

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img_1.png", class="img-fluid")      
      .col-12.col-lg-8
        p.mb-4 El diagnóstico del mercado es un proceso de análisis que permite recopilar, organizar e interpretar información sobre las condiciones del entorno en el que participa una organización. Su propósito es proporcionar una visión objetiva del mercado para identificar aspectos que puedan influir en la formulación de estrategias de mercadeo y en el cumplimiento de los objetivos organizacionales. 
        .tarjeta.tarjeta--fondo-img-01.py-4.px-5.mb-0
          p.mb-0 Más que una recopilación de datos, el diagnóstico constituye un proceso de análisis que facilita la comprensión del comportamiento del mercado y de los elementos que pueden representar oportunidades o situaciones que requieren atención. Por esta razón, se convierte en el punto de partida para la planeación estratégica y la toma de decisiones fundamentadas. A continuación, se explican los elementos que hacen parte del diagnóstico y su aporte a la planeación estratégica

    br
    br
    br

    .bg_img_3.mb-3

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-0
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h4.mb-3 Información del mercado
            p.mb-3 Consiste en recopilar datos sobre los consumidores, competidores, precios, oferta, demanda y tendencias del sector, con el propósito de conocer las condiciones actuales del mercado y los factores que influyen en su comportamiento.
          .col-12.col-lg-6.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_3.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h4.mb-3 Análisis de la información
            p.mb-3 Permite examinar, organizar e interpretar los datos recopilados para identificar patrones, cambios y relaciones relevantes, facilitando la comprensión del comportamiento del mercado y de los factores que afectan la competitividad empresarial.
          .col-12.col-lg-6.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_4.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h4.mb-3 Identificación de oportunidades
            p.mb-3 Se orienta a reconocer necesidades insatisfechas, nuevos segmentos, tendencias y espacios de crecimiento que la empresa puede aprovechar para desarrollar propuestas de valor, fortalecer su posicionamiento y mejorar su competitividad.
          .col-12.col-lg-6.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_5.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h4.mb-3 Toma de decisiones
            p.mb-3 Comprende la selección de acciones y estrategias comerciales fundamentadas en los resultados del diagnóstico, considerando los objetivos empresariales, los recursos disponibles y las condiciones del mercado para mejorar el desempeño organizacional.
          .col-12.col-lg-6.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_6.png", class="img-fluid")

    br

    .bg_img_4.mb-3

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Propósito del diagnóstico del mercado
      .mb-0 

      .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img_8.png')})`}"
          role="img"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El propósito del diagnóstico del mercado consiste en generar información que apoye la toma de decisiones relacionadas con el mercadeo, al comprender las condiciones del entorno, la organización puede orientar sus acciones hacia aquellos aspectos que favorecen el logro de sus objetivos y fortalecer su capacidad para responder a los cambios del mercado. 

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema2/img_9.png", class="img-fluid")  
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 Asimismo, el diagnóstico permite reducir la incertidumbre durante el proceso de planeación estratégica, ya que las decisiones dejan de fundamentarse únicamente en percepciones y comienzan a apoyarse en información analizada de manera sistemática.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-04.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-1.mb-1.ps-3.ps-xl-5
              h5.mb-2 Ejemplo aplicado.
              p.mb-0 Una empresa dedicada a la comercialización de productos para el hogar decidió ampliar su cobertura hacia nuevas ciudades. Antes de iniciar este proceso, realizó un diagnóstico del mercado para conocer las características de los consumidores, las condiciones del entorno y la presencia de competidores. La información obtenida permitió orientar las decisiones comerciales y priorizar aquellas zonas donde existían mayores oportunidades para el crecimiento de la organización.
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Fuentes de información
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .row.justify-content-center.align-items-center.mb-3
          .col-2.col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
            figure
              img(src="@/assets/curso/tema2/img_12.png", class="img-fluid")  
          .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
            p.mb-0 El diagnóstico del mercado requiere información proveniente de diferentes fuentes que permitan comprender la realidad del entorno y de la organización, estas fuentes aportan datos que, una vez analizados, contribuyen a interpretar las condiciones del mercado y respaldar la formulación de estrategias de mercadeo. 
        p.mb-3(data-aos="zoom-in-right") La utilidad de una fuente de información no depende únicamente de la cantidad de datos que proporciona, sino de su capacidad para aportar elementos pertinentes al análisis, por ello, la selección de la información debe responder a las necesidades del diagnóstico y a los objetivos que persigue la organización.
        .tarjeta.tarjeta--fondo-img-01.py-3.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema2/img_13.png", class="img-fluid")  
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Para reflexionar.
              p.mb-0 ¿Por qué una organización debería analizar la información disponible antes de definir sus objetivos de mercadeo, en lugar de basar sus decisiones únicamente en la experiencia o en la percepción del mercado?
      .col-6.col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema2/img_14.png", class="img-fluid")

    .bg_img_5.mb-3

      .subtitulo-destacado.mb-5
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Identificación de oportunidades y necesidades del mercado

      .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/tema2/img_17.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
          .col-12.col-xl-7.p-5
            p.mb-0 El análisis de la información obtenida durante el diagnóstico facilita la identificación de oportunidades y necesidades presentes en el mercado. este proceso permite reconocer aspectos que pueden contribuir al fortalecimiento de la competitividad de la organización y orientar las acciones de mercadeo hacia aquellos escenarios que ofrecen mayores posibilidades de desarrollo. 

      p.mb-5(data-aos="zoom-in-right") De igual manera, la identificación de necesidades favorece una mejor comprensión del entorno, permitiendo que la organización establezca prioridades acordes con las condiciones observadas y con el direccionamiento estratégico definido.
      
    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Relación con la definición de objetivos de mercadeo

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema2/img_18.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 Los resultados del diagnóstico del mercado constituyen un insumo para la definición de los objetivos de mercadeo, ya que proporcionan información sobre las condiciones que enfrenta la organización y las oportunidades que pueden ser aprovechadas mediante acciones estratégicas. Esta relación permite que los objetivos respondan a situaciones identificadas durante el análisis del mercado y se encuentren articulados con el direccionamiento estratégico de la organización, fortaleciendo la coherencia entre el diagnóstico, la planeación y la formulación de estrategias de mercadeo.

    .tarjeta.tarjeta--fondo-img-01.py-3.px-5.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          h5.mb-2 Clave estratégica.
          p.mb-0 El diagnóstico del mercado transforma la información del entorno en un insumo estratégico para establecer objetivos de mercadeo coherentes con las condiciones del mercado y el direccionamiento organizacional.
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema2/img_19.png", class="img-fluid") 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-03.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-2.mb-2.ps-3.ps-xl-5
              h5.mb-2 Reflexión del capítulo.
              p.mb-0  La integridad personal invita a valorar los hechos con honestidad, evitando interpretar la información según intereses particulares o expectativas preconcebidas, tomar decisiones fundamentadas en información analizada de manera responsable fortalece tanto el desempeño organizacional como la confianza en los procesos de planeación.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
