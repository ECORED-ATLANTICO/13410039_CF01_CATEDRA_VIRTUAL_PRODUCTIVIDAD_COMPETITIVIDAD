<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Sistemas de distribución

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img_1.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender el mercado y definir los segmentos hacia los cuales se orientarán las estrategias de mercadeo representa un avance importante dentro de la planeación estratégica. Sin embargo, para que dichas estrategias alcancen los resultados esperados, también es necesario analizar la manera en que los productos o servicios llegarán al mercado y las condiciones del entorno que pueden influir en este proceso. 

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema2/img_12.png", class="img-fluid") 
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 En este capítulo se abordará la estructura de los sistemas de distribución y la influencia del clima político, económico y social sobre las decisiones de mercadeo, permitiendo comprender cómo estos factores externos condicionan la implementación de las estrategias organizacionales.

    .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 Los sistemas de distribución corresponden a la estructura mediante la cual una organización hace llegar sus productos o servicios al mercado. Su análisis permite comprender cómo se articulan las acciones necesarias para facilitar el acceso de los clientes a la oferta de la organización y respaldar el cumplimiento de los objetivos de mercadeo. Dentro de la planeación estratégica, los sistemas de distribución constituyen un elemento de apoyo para la implementación de las estrategias, ya que permiten orientar las decisiones relacionadas con la forma en que la organización participa en el mercado.
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema8/img_2.png", class="img-fluid")  

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Criterios para seleccionar las alternativas de distribución

    .bg_img_16.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema8/img_4.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 La selección de las alternativas de distribución requiere analizar diferentes criterios que permitan determinar cómo hacer llegar los productos o servicios al mercado de manera eficiente. Esta evaluación facilita identificar las opciones más adecuadas según las características de los clientes, las capacidades de la organización y los objetivos de mercadeo, contribuyendo al fortalecimiento de la competitividad empresarial.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12.col-xl-10.mb-5
        SlyderF.circl-arrow.mb-0(columnas="col-12 col-lg-4")
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_5.png", class="img-fluid")
            h4.text-center Características del mercado
            p.text-center Analizar la ubicación, el tamaño, los hábitos de compra y las necesidades de los consumidores para seleccionar alternativas acordes con el mercado objetivo.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_6.png", class="img-fluid")
            h4.text-center Características del producto
            p.text-center Considerar las condiciones de conservación, fragilidad, volumen, valor y frecuencia de compra para determinar los requerimientos de distribución.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_7.png", class="img-fluid")
            h4.text-center Cobertura del mercado
            p.text-center Evaluar el alcance geográfico y la cantidad de clientes que pueden atenderse mediante las diferentes alternativas de distribución.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_8.png", class="img-fluid")
            h4.text-center Costos de distribución
            p.text-center Comparar los gastos asociados al transporte, almacenamiento, intermediación y entrega para seleccionar opciones económicamente viables.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_9.png", class="img-fluid")
            h4.text-center Capacidad logística
            p.text-center Examinar los recursos, la infraestructura, la tecnología y los procesos disponibles para garantizar la distribución oportuna de los productos.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_10.png", class="img-fluid")
            h4.text-center Control del canal
            p.text-center Determinar el nivel de supervisión que la organización necesita sobre la comercialización, los precios, la atención al cliente y la entrega.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_11.png", class="img-fluid")
            h4.text-center Nivel de servicio
            p.text-center Valorar los tiempos de entrega, la disponibilidad de productos, la accesibilidad y la atención requerida para satisfacer las expectativas de los clientes.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema8/img_12.png", class="img-fluid")
            h4.text-center Coherencia estratégica
            p.text-center Verificar que la alternativa seleccionada contribuya al posicionamiento, los objetivos de mercadeo y el direccionamiento estratégico de la organización.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-04.py-2.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-5.mb-5.ps-3.ps-xl-4
              h5.mb-2 Ejemplo práctico
              p.mb-0 Una empresa colombiana de alimentos saludables desea ampliar su cobertura comercial y evalúa tres alternativas: vender directamente mediante su tienda virtual, comercializar a través de supermercados o establecer acuerdos con distribuidores regionales.
      .col-12.col-lg-10.mb-5
        p.mb-0(data-aos="zoom-in-right") Para seleccionar la alternativa más conveniente, analiza la ubicación de sus clientes, los costos logísticos, las condiciones de conservación de los productos, la cobertura esperada y el nivel de control requerido.
        p.mb-0(data-aos="zoom-in-right") La decisión final debe responder a los objetivos de mercadeo y a las capacidades de la empresa, considerando que también puede combinar diferentes alternativas de distribución para atender distintos segmentos del mercado. 
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema8/img_13.png", class="img-fluid")  
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Error frecuente
              p.mb-0 Seleccionar un sistema de distribución sin considerar las características del mercado o los segmentos definidos puede dificultar el cumplimiento de los objetivos de mercadeo, aun cuando la estrategia formulada sea adecuada.
      .col-12.col-lg-10.mb-4
        .row.justify-content-center.align-items-center.mb-5
          .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
            figure
              img(src="@/assets/curso/tema2/img_12.png", class="img-fluid") 
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Además de seleccionar un sistema de distribución acorde con las necesidades del mercado, la organización debe considerar diferentes condiciones del entorno que pueden influir en la implementación de sus estrategias. Entre ellas se encuentran los factores políticos, económicos y sociales, que serán abordados en los siguientes subtemas.

    Separador

    .bg_img_17.mb-3

      #t_8_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 8.1 Clima político
      .mb-0 

      .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-xl-7.p-5
            p.mb-0 El clima político comprende las condiciones derivadas de las decisiones, políticas y lineamientos que pueden influir en el funcionamiento de los mercados y en el desarrollo de las actividades organizacionales. Su análisis permite identificar factores externos que pueden favorecer o limitar la implementación de las estrategias de mercadeo. Dentro de la planeación estratégica, comprender el clima político facilita que la organización valore las condiciones del entorno antes de ejecutar sus acciones comerciales, contribuyendo a una toma de decisiones más fundamentada.
          .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/tema7/img_7.png" class="img-fluid w-100 h-100 object-fit-cover").p-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-05.py-3.px-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-1.mb-1.ps-3.ps-xl-5
              h5.mb-2 En contexto.
              p.mb-0 Una empresa proyectó ampliar la distribución de sus productos hacia una nueva región. Antes de iniciar este proceso, analizó las condiciones políticas que podían influir en su operación, identificando aspectos que requerían ser considerados durante la planeación de sus actividades comerciales.

    Separador

    #t_8_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.2 Clima económico
    .mb-0 

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img_16.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El clima económico corresponde al conjunto de condiciones económicas presentes en el entorno que pueden influir en el comportamiento del mercado y en las decisiones de las organizaciones, su análisis permite comprender cómo estas condiciones inciden en el desarrollo de las estrategias de mercadeo y en el cumplimiento de los objetivos organizacionales. La valoración del clima económico facilita que la organización incorpore información relevante durante la planeación estratégica, fortaleciendo la capacidad para orientar sus acciones de acuerdo con las condiciones identificadas en el mercado.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-4
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema8/img_17.png", class="img-fluid")  
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 ¿Sabía que...?
              p.mb-0 Las organizaciones no pueden controlar las condiciones económicas del entorno; sin embargo, sí pueden incorporarlas dentro de sus procesos de análisis y planeación para orientar de manera más estratégica sus decisiones de mercadeo.

    Separador

    #t_8_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.3 Clima social de los mercados
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema8/img_18.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El clima social de los mercados hace referencia a las condiciones sociales presentes en el entorno que pueden influir en el comportamiento del mercado y en la manera como las organizaciones orientan sus estrategias de mercadeo, su análisis permite comprender aspectos que contribuyen a interpretar las necesidades y características de los diferentes segmentos del mercado. Considerar el clima social favorece una mejor comprensión del entorno y fortalece la formulación de estrategias acordes con las condiciones identificadas durante el diagnóstico y la segmentación del mercado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-04.py-2.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mt-3.mb-3
            .col-12.col-xl-10.mt-3.mb-3.ps-3.ps-xl-4
              h5.mb-2 Ejemplo aplicado.
              p.mb-0 Una organización dedicada a la comercialización de productos para el hogar revisó las condiciones sociales de los mercados donde desarrollaba sus actividades antes de ampliar su cobertura comercial, este análisis le permitió orientar sus acciones hacia aquellos segmentos cuyas características respondían a los objetivos definidos durante su planeación estratégica.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Clave estratégica.
              p.mb-0 Los sistemas de distribución y el análisis del clima político, económico y social permiten que las estrategias de mercadeo se implementen considerando las condiciones reales del entorno donde participa la organización.
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema8/img_19.png", class="img-fluid")  

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema8/img_20.png", class="img-fluid")
      .col-12.col-lg-9
        p.mb-4(data-aos="zoom-in-right") La implementación de las estrategias de mercadeo requiere comprender tanto la forma en que los productos o servicios llegarán al mercado como las condiciones externas que pueden influir en dicho proceso. El análisis de los sistemas de distribución y del clima político, económico y social fortalece la capacidad de la organización para orientar sus decisiones de manera coherente con el entorno.
        .tarjeta.tarjeta--fondo-img-11.py-4.px-5.mb-4
          p.mb-0 Una vez comprendidos estos elementos, el componente concluye con el estudio del <em>e-marketing</em>, herramienta que integra los conocimientos desarrollados durante el proceso formativo y evidencia cómo las tecnologías digitales apoyan la implementación de estrategias de mercadeo acordes con el direccionamiento estratégico y las condiciones del mercado.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-03.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-2.mb-2.ps-3.ps-xl-5
              h5.mb-2 Reflexión del capítulo.
              p.mb-0 Las decisiones relacionadas con la distribución de productos y servicios deben responder tanto a los objetivos organizacionales como a las condiciones del entorno. Actuar con integridad implica asumir estas decisiones con responsabilidad, considerando su impacto sobre los clientes, la organización y los diferentes actores que participan en los procesos de distribución.
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
