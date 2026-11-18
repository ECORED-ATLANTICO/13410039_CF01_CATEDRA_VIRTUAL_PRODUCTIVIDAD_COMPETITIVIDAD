<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis interno de la empresa

    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img_1.png", class="img-fluid")      
      .col-12.col-lg-8
        p.mb-4 El fortalecimiento de la competitividad no depende únicamente del conocimiento del entorno, las organizaciones también requieren comprender sus propias capacidades para identificar aquellos aspectos que contribuyen al logro de sus objetivos estratégicos y al desarrollo de ventajas competitivas, este proceso corresponde al análisis interno de la empresa. 
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema4/img_2.png", class="img-fluid")  
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 En este capítulo se abordarán los elementos internos relacionados con la productividad y la generación de valor para los procesos y los clientes, su comprensión permitirá reconocer cómo las capacidades organizacionales respaldan la formulación de estrategias de mercadeo y contribuyen al fortalecimiento de la competitividad.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto
    .mb-0 

    .bg_img_9.mb-3

      .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img_3.png')})`}"
          role="img"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis interno de la empresa consiste en el estudio de los elementos propios de la organización que inciden en su desempeño y en el cumplimiento de sus objetivos. Su propósito es identificar las capacidades que fortalecen la competitividad y aquellos aspectos que requieren mejoramiento para responder de manera efectiva a las condiciones del mercado. Este análisis complementa el estudio de los factores externos, ya que permite valorar la capacidad de la organización para aprovechar las oportunidades identificadas en el entorno y orientar sus decisiones de mercadeo de acuerdo con sus recursos y condiciones internas.

      p.mb-5(data-aos="zoom-in-right") La siguiente figura presenta las principales diferencias entre el análisis interno y externo de la empresa, destacando sus características y su contribución al diagnóstico organizacional, como fundamento para fortalecer la competitividad y orientar las decisiones estratégicas de mercadeo

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-left")
      h5 Figura 3.
      |    Diferencias entre análisis externo y análisis interno
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema4/img_5.svg', class="img-fluid", alt="La figura presenta una comparación entre el análisis externo y el interno de una empresa, mediante dos columnas diferenciadas por colores azul y verde. Cada sección contiene un encabezado, cuatro recuadros informativos e íconos representativos. Esta organización visual permite comprender cómo el estudio del entorno y la evaluación de las capacidades empresariales se complementan en el diagnóstico estratégico. Además, destaca la importancia de integrar ambas perspectivas para identificar oportunidades, reconocer aspectos de mejora y orientar decisiones que fortalezcan la competitividad organizacional.").mb-5

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Importancia del análisis interno

    .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_6.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-xl-7.p-5
          p.mb-0 El análisis interno proporciona información que facilita la comprensión de las capacidades de la organización y su relación con los objetivos de mercadeo. Esta información favorece la toma de decisiones estratégicas, ya que permite establecer acciones acordes con las condiciones reales de la empresa. Asimismo, fortalece el proceso de planeación estratégica al integrar el conocimiento de los recursos organizacionales con la información obtenida del entorno, permitiendo una visión más completa para la formulación de estrategias de mercadeo.

    .bg_img_10.mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0
          .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
                h5.mb-2 Clave estratégica. 
                p.mb-0 El análisis interno permite reconocer las capacidades organizacionales que respaldan la formulación de estrategias de mercadeo y el fortalecimiento de la competitividad.
              .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
                figure
                  img(src="@/assets/curso/tema4/img_8.png", class="img-fluid")  

      Separador

      #t_4_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.2 Productividad
      .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema4/img_9.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 La productividad hace referencia a la capacidad de la organización para desarrollar sus actividades de manera eficiente mediante el aprovechamiento de sus recursos. Su análisis permite comprender cómo el desempeño interno contribuye al cumplimiento de los objetivos organizacionales y al fortalecimiento de la competitividad. En el contexto de la planeación estratégica, la productividad constituye un elemento que aporta información para la toma de decisiones, ya que evidencia la capacidad de la organización para responder a las condiciones del mercado mediante el desarrollo de sus procesos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-05.py-3.px-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-1.mb-1.ps-3.ps-xl-5
              h5.mb-2 En contexto.
              p.mb-0 Una empresa del sector textil identificó que, aunque existía una demanda creciente por sus productos, presentaba retrasos en la entrega de pedidos debido a la forma en que desarrollaba sus procesos internos. Después de analizar su productividad, implementó ajustes en la organización de sus actividades, logrando mejorar el cumplimiento de los tiempos establecidos y fortaleciendo su capacidad para responder a las necesidades del mercado.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Productividad y competitividad

    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img_10.png", class="img-fluid")      
      .col-12.col-lg-9
        p.mb-4 La productividad y la competitividad mantienen una relación estrecha dentro de la organización. Mientras la productividad refleja la manera en que se aprovechan los recursos para desarrollar las actividades organizacionales, la competitividad representa la capacidad de responder estratégicamente a las condiciones del mercado. Por esta razón, una organización que fortalece su productividad dispone de mejores condiciones para apoyar la formulación de estrategias de mercadeo y contribuir al logro de los objetivos definidos en su direccionamiento estratégico.
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Aunque presentan diferencias en su enfoque y aplicación, ambas permiten fortalecer la gestión empresarial y orientar las estrategias hacia el cumplimiento de los objetivos establecidos. A continuación, se presentan varios aspectos en los cuales la productividad y la competitividad, se complementan:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-left")
      h5 Figura 4.
      |    Analisis comparativo entre productividad y competitividad
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema4/img_11.svg', class="img-fluid", alt="La figura presenta una comparación entre productividad y competitividad mediante dos columnas diferenciadas por colores azul y verde. En la parte superior se incluyen fotografías de contextos empresariales, mientras que los recuadros inferiores contienen íconos y descripciones que permiten identificar sus características y diferencias. Esta organización facilita comprender cómo el aprovechamiento de los recursos y el posicionamiento en el mercado se relacionan con el desempeño empresarial, destacando su importancia para fortalecer la gestión, generar valor y orientar decisiones estratégicas organizacionales.").mb-5

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-03.py-3.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mt-2.mb-2
            .col-12.col-xl-9.mt-4.mb-4
              h5.mb-2 Para reflexionar.
              p.mb-0 ¿De qué manera el fortalecimiento de la productividad puede contribuir a que una organización responda de forma más eficiente a las condiciones del mercado y al cumplimiento de sus objetivos de mercadeo?

    .row.justify-content-center.align-items-center.mb-0
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema4/img_12.png", class="img-fluid")  
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 Comprender la productividad permite reconocer la importancia del desempeño interno de la organización. Sin embargo, el análisis interno no se limita a la eficiencia con la que se desarrollan las actividades; también implica identificar cómo dichas actividades generan valor para los procesos organizacionales y para los clientes, aspectos que serán abordados en la siguiente entrega del capítulo.
    
    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Valor a los procesos
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_13.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El valor a los procesos hace referencia al aporte que las actividades desarrolladas por una organización generan para el cumplimiento de sus objetivos y el fortalecimiento de su desempeño. Analizar este aspecto permite reconocer cómo los procesos contribuyen al funcionamiento de la organización y respaldan el desarrollo de estrategias de mercadeo.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema2/img_12.png", class="img-fluid")  
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 La generación de valor en los procesos no depende únicamente de la ejecución de las actividades, sino de la manera en que estas se articulan para responder a las necesidades de la organización, por ello, constituye un elemento relevante dentro del análisis interno y en la identificación de capacidades que favorecen la competitividad.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-04.py-3.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mt-1.mb-1
            .col-12.col-xl-10.mt-4.mb-4.ps-3.ps-xl-4
              h5.mb-2 Ejemplo aplicado.
              p.mb-0 Una empresa del sector de alimentos revisó el desarrollo de sus procesos internos para identificar actividades que aportaban mayor valor al cumplimiento de sus objetivos. Como resultado del análisis, reorganizó algunas actividades administrativas y comerciales, logrando una mejor articulación entre las áreas involucradas y fortaleciendo el desarrollo de sus estrategias de mercadeo.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Relación con el desempeño organizacional


    .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_14.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-xl-7.p-5
          p.mb-0 Cuando los procesos generan valor, la organización dispone de mejores condiciones para responder a las exigencias del mercado y orientar sus recursos hacia el cumplimiento de sus objetivos. Esta relación fortalece la capacidad organizacional para desarrollar estrategias acordes con el direccionamiento estratégico. Además, el análisis del valor generado por los procesos facilita la identificación de oportunidades de fortalecimiento interno, permitiendo que las decisiones estratégicas se fundamenten tanto en el conocimiento del entorno como en las capacidades propias de la organización.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Clave estratégica.
              p.mb-0 Los procesos generan valor cuando contribuyen al cumplimiento de los objetivos organizacionales y fortalecen la capacidad de la empresa para desarrollar estrategias de mercadeo.
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema4/img_15.png", class="img-fluid")  

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Valor a los clientes
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema4/img_16.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El valor a los clientes corresponde a la capacidad de la organización para desarrollar acciones orientadas a responder a las necesidades del mercado mediante la generación de beneficios percibidos por quienes reciben sus productos o servicios. Su análisis permite comprender la relación entre las capacidades internas de la organización y las expectativas del mercado. Dentro del análisis interno, este concepto evidencia que las decisiones organizacionales deben orientarse no solo al fortalecimiento de los procesos, sino también a generar condiciones que contribuyan al cumplimiento de los objetivos de mercadeo y al fortalecimiento de la competitividad.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-02.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-3.mb-3.ps-3.ps-xl-5
              h5.mb-3 En contexto.
              p.mb-0 Una organización dedicada a la fabricación de muebles analizó la percepción de sus clientes frente al proceso de atención y entrega de los productos. Aunque la calidad era reconocida por el mercado, identificó oportunidades para mejorar la comunicación con los clientes durante el proceso de compra. Este análisis permitió fortalecer la relación con el mercado sin modificar las características del producto ofrecido.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Relación con la competitividad

    .tarjeta.tarjeta--fondo-img-06.py-3.px-4.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema4/img_18.png", class="img-fluid")  
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 La generación de valor para los clientes fortalece la competitividad de la organización al contribuir a una mejor relación con el mercado y respaldar el desarrollo de estrategias orientadas al cumplimiento de los objetivos organizacionales. De esta manera, el análisis interno deja de centrarse exclusivamente en los procesos y amplía su alcance hacia quienes reciben los bienes o servicios de la organización. Por ello, comprender el valor generado para los clientes permite integrar las capacidades internas con las condiciones del entorno, favoreciendo una visión estratégica que servirá de base para el estudio del direccionamiento estratégico.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-4(data-aos="zoom-in-right")
          h5.mb-3 Para reflexionar.
          p.mb-0 ¿Por qué el análisis interno de una organización debe considerar tanto el valor generado en sus procesos como el valor que perciben sus clientes al momento de orientar las decisiones estratégicas? 
        p.mb-4(data-aos="zoom-in-right") El análisis interno permite comprender las capacidades con las que cuenta una organización para responder a las condiciones del mercado. La productividad, el valor generado en los procesos y el valor aportado a los clientes constituyen elementos que fortalecen la competitividad y respaldan la formulación de estrategias de mercadeo. 
        p.mb-0(data-aos="zoom-in-right") Una vez comprendidas las condiciones del entorno y las capacidades internas de la organización, el siguiente paso consiste en establecer el rumbo que orientará las decisiones estratégicas. Por esta razón, el siguiente capítulo abordará el direccionamiento estratégico, como fundamento para definir los objetivos de mercadeo y orientar la planeación estratégica de la organización.
      .col-6.col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema4/img_19.png", class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-03.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-2.mb-2.ps-3.ps-xl-5
              h5.mb-2 Reflexión del capítulo.
              p.mb-0 Analizar las capacidades internas de una organización requiere reconocer tanto sus fortalezas como aquellos aspectos que pueden mejorarse. La integridad personal favorece una actitud de autocrítica constructiva, permitiendo valorar la realidad con objetividad y asumir el compromiso de contribuir al mejoramiento continuo de los procesos y de los resultados organizacionales.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
