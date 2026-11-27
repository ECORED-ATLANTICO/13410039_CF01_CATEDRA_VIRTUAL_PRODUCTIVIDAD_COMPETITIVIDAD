<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Planeación estratégica

    .bg_img_13.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/img_2.png", class="img-fluid")
        .col-12.col-lg-8
          p.mb-4 Después de comprender las condiciones del entorno, analizar las capacidades internas de la organización y establecer el direccionamiento estratégico, el siguiente paso consiste en definir cómo alcanzar los objetivos organizacionales. Esta función corresponde a la planeación estratégica, proceso que permite organizar las acciones necesarias para orientar el desarrollo de las estrategias de mercadeo.
          .tarjeta.tarjeta--fondo-img-01.py-4.px-5.mb-0
            p.mb-0 En este capítulo se estudiará el concepto de planeación estratégica, su propósito y la manera en que facilita la formulación de objetivos de mercadeo, la definición del potencial de mercado y de ventas, el pronóstico de ventas y la articulación de estos elementos con las estrategias de mercadeo.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-xl-10
        .tarjeta.tarjeta--fondo-img-08.py-0.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mt-1.mb-1
            .col-12.col-xl-9.mt-5.mb-5.ps-3.ps-xl-5
              h5.ps-0.ps-xl-2.mb-2 Planeación estratégica
              p.ps-0.ps-xl-2.mb-0 Lo invitamos a ver el siguiente recurso educativo el cual corresponde a un video que introduce a los fundamentos de la planeación estratégica y permite comprender cómo las decisiones organizacionales orientan el logro de los objetivos institucionales. 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=1yAOUdaaYxc" target="_blank" rel="noopener noreferrer")
                span ir al recurso

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        p.mb-0 La planeación estratégica es el proceso mediante el cual la organización organiza y orienta sus acciones para alcanzar los objetivos establecidos en el direccionamiento estratégico, este proceso permite transformar el análisis realizado sobre el entorno y las capacidades internas en decisiones que orientan el desarrollo de las estrategias de mercadeo. La planeación estratégica facilita la coordinación de las acciones organizacionales, favoreciendo que las decisiones respondan a una misma orientación y contribuyan al logro de los resultados esperados.
      .col-12.col-lg-8.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          | Relación entre el direccionamiento y la planeación estratégicos
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-6 Direccionamiento estratégico
                th.col-auto.col-lg-6 Planeación estratégica
            tbody
              tr.bg-table-01
                td.text-start Define el rumbo de la organización.
                td.text-start Organiza las acciones para alcanzar ese rumbo.
              tr.bg-table-02
                td.text-start Establece la orientación general.
                td.text-start Define cómo desarrollar las acciones necesarias.
              tr.bg-table-01
                td.text-start Sirve como marco para la toma de decisiones.
                td.text-start Facilita la ejecución de las decisiones estratégicas.
              tr.bg-table-02
                td.text-start Orienta los objetivos organizacionales.
                td.text-start Permite formular objetivos de mercadeo y acciones estratégicas.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Propósito de la planeación estratégica
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_5.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El propósito de la planeación estratégica consiste en establecer una guía para el desarrollo de las acciones organizacionales, asegurando que estas respondan al direccionamiento estratégico y a las condiciones identificadas durante el análisis del entorno y de la organización. Asimismo, este proceso facilita la articulación entre los objetivos organizacionales y las estrategias de mercadeo, permitiendo orientar las decisiones hacia el fortalecimiento de la competitividad y el cumplimiento de los resultados esperados.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-05.py-2.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-4.mb-4.ps-3.ps-xl-4
              h5.mb-2 En contexto.
              p.mb-0 Una empresa dedicada a la comercialización de productos agrícolas decidió fortalecer su presencia en nuevos mercados regionales. Después de analizar el entorno y revisar sus capacidades internas, elaboró una planeación estratégica que permitió organizar las acciones comerciales, establecer prioridades y orientar los recursos disponibles hacia el cumplimiento de sus objetivos de mercadeo.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Tipos de planeación estratégica
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Según su alcance, horizonte de tiempo y nivel de aplicación, se pueden distinguir diferentes tipos de planeación que permiten articular las decisiones empresariales con los recursos disponibles y las condiciones del mercado.

    .bg_img_14.mb-3

      .row.justify-content-center.cursor-pointer.mb-5
        .col-11.col-md-9.col-lg-6.col-xl-4.mb-4.mb-lg-3(data-aos="zoom-in-right")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema6/img_7.png", class="img-fluid")
            .crd_hover_txt--body_2
              h4.mb-3 Planeación estratégica
              p.mb-0  Establece el rumbo general de la organización a largo plazo, considerando su misión, visión, objetivos y condiciones del entorno empresarial.
              p.mb-0 Ejemplo: una empresa de alimentos proyecta ingresar a tres nuevos mercados regionales durante los próximos cinco años.
        .col-11.col-md-9.col-lg-6.col-xl-4.mb-4.mb-lg-3(data-aos="zoom-in-right")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema6/img_8.png", class="img-fluid")
            .crd_hover_txt--body_2
              h4.mb-3 Planeación táctica
              p.mb-0 Define planes y acciones para las diferentes áreas de la empresa, orientados al cumplimiento de los objetivos estratégicos en el mediano plazo.
              p.mb-0 Ejemplo: el área de mercadeo diseña un plan anual de promoción y posicionamiento para apoyar la expansión comercial.
        .col-11.col-md-9.col-lg-6.col-xl-4.mb-4.mb-lg-3(data-aos="zoom-in-right")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema6/img_9.png", class="img-fluid")
            .crd_hover_txt--body_2
              h4.mb-3 Planeación operativa
              p.mb-0 Organiza las actividades, los recursos y los procedimientos necesarios para ejecutar los planes establecidos en períodos de corto plazo.
              p.mb-0 Ejemplo: el equipo comercial programa campañas mensuales, asigna responsables y realiza seguimiento a las ventas.

    .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema6/img_10.png", class="img-fluid")  
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 La planeación estratégica permite transformar el análisis del entorno y de la organización en acciones orientadas al logro de los objetivos organizacionales. Mediante la formulación de objetivos de mercadeo, el análisis del potencial de mercado y de ventas y el pronóstico de ventas, la organización dispone de una base para orientar sus decisiones estratégicas. Con estos elementos definidos, el siguiente capítulo abordará la segmentación del mercado, proceso que permitirá identificar los grupos de interés hacia los cuales se dirigirán las estrategias de mercadeo formuladas durante la planeación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-07.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-start.align-items-center.mb-0
            .col-12.col-xl-6.mt-3.mb-3.ps-3.ps-xl-5
              p.mb-3 Ir al pódcast:
              TarjetaAudio.color-secundario.p-3.mb-0(
                texto="<span style='font-style: normal !important;'>Planeación estratégica organizacional"
                :audio="require_src('@/assets/curso/podcast/podcast02.mp3')"
                tiempo
              )
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-03.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-2.mb-2.ps-3.ps-xl-5
              h5.mb-2 Reflexión del capítulo.
              p.mb-0 Planear implica decidir anticipadamente las acciones que permitirán alcanzar determinados objetivos, la integridad personal invita a asumir este proceso con responsabilidad, considerando las consecuencias de cada decisión y procurando que las acciones planificadas respondan a criterios de transparencia, compromiso y respeto por los recursos de la organización.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
