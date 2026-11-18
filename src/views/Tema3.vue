<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de factores externos

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de factores externos permite comprender las condiciones del entorno que pueden influir en el desempeño de una organización y en el desarrollo de sus estrategias de mercadeo. A diferencia del diagnóstico del mercado, que se orienta a recopilar e interpretar información, este análisis profundiza en aquellos elementos del entorno que pueden representar oportunidades o desafíos para la competitividad organizacional. 

    .row.justify-content-center.align-items-center.mb-3
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema2/img_12.png", class="img-fluid")  
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 En este capítulo se estudiarán los factores externos relacionados con la ventaja competitiva, los mercados, la competencia y el comportamiento de la demanda y la oferta. Su comprensión constituye un insumo para la formulación de estrategias de mercadeo acordes con las condiciones del entorno y con los objetivos organizacionales.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Ventaja competitiva
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La ventaja competitiva corresponde al conjunto de características que permiten a una organización diferenciarse dentro del mercado y fortalecer su posición frente a otras empresas, estas características pueden derivarse de la manera en que la organización responde a las condiciones del entorno, orienta sus recursos y desarrolla acciones alineadas con su direccionamiento estratégico. 

    .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema3/img_3.png", class="img-fluid")  
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 Dentro del contexto del mercadeo, la ventaja competitiva se refleja en la capacidad de la organización para generar condiciones que favorezcan su permanencia y crecimiento en el mercado, contribuyendo al fortalecimiento de su participación frente a los demás competidores. Los elementos que contribuyen a construir y fortalecer las ventajas competitivas son: 

    .bg_img_6.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-4.mb-lg-0
          TabsA.color-primario-vo.uno(data-aos="zoom-in-right")
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Calidad")
              p.mb-3 Capacidad de ofrecer productos o servicios que cumplen las expectativas de los consumidores mediante características superiores y resultados confiables. 
              p.mb-3 Ejemplo: una empresa de alimentos mantiene estándares de calidad que fortalecen la confianza de sus clientes.
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Innovación")
              p.mb-3 Desarrollo o incorporación de mejoras en productos, servicios y procesos que permiten responder a nuevas necesidades del mercado.  
              p.mb-3 Ejemplo: una empresa de calzado utiliza materiales novedosos para diferenciar su oferta comercial.
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Eficiencia en costos")
              p.mb-3 Capacidad de aprovechar los recursos y optimizar los procesos para operar con menores costos sin comprometer la calidad.
              p.mb-3 Ejemplo: una empresa de distribución optimiza sus rutas para reducir gastos de transporte.
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Diferenciación")
              p.mb-3 Incorporación de atributos distintivos que hacen que los consumidores perciban una oferta como diferente y valiosa frente a sus alternativas.
              p.mb-3 Ejemplo: una cafetería ofrece productos personalizados y experiencias exclusivas de consumo.
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Servicio al cliente")
              p.mb-3 Capacidad de brindar atención oportuna, personalizada y confiable durante las diferentes etapas de la relación comercial.
              p.mb-3 Ejemplo: una empresa de electrodomésticos ofrece acompañamiento técnico y soluciones rápidas después de la compra.
            .tarjeta.color-primario-v.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Capacidad de adaptación")
              p.mb-3 Habilidad para responder oportunamente a cambios del mercado, las tecnologías y las preferencias de los consumidores.
              p.mb-3 Ejemplo: una tienda tradicional incorpora canales digitales para atender nuevos hábitos de compra.
        .col-8.col-lg-4.mb-5.mb-lg-0(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema3/img_4.png", class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Cuota de participación en el mercado

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema3/img_5.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 La cuota de participación en el mercado constituye un referente que permite apreciar la posición alcanzada por una organización dentro del sector donde desarrolla sus actividades. Su análisis facilita valorar el comportamiento de la organización frente a los demás participantes del mercado y reconocer el efecto que pueden tener las estrategias implementadas sobre su desempeño competitivo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema3/img_6.png", class="img-fluid")  
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        p.mb-0 Aunque la participación en el mercado no representa por sí sola la ventaja competitiva de una organización, sí aporta información para valorar los resultados obtenidos y orientar decisiones relacionadas con el fortalecimiento de las estrategias de mercadeo y el cumplimiento de los objetivos organizacionales.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-04.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-1.mb-1.ps-3.ps-xl-5
              h5.mb-2 Ejemplo aplicado.
              p.mb-0 Una empresa dedicada a la comercialización de artículos deportivos observó que su participación en el mercado aumentó durante el último año después de fortalecer la distribución de sus productos y desarrollar nuevas acciones de mercadeo. Al comparar estos resultados con los obtenidos por otras empresas del sector, la organización identificó que había fortalecido su posición competitiva, información que utilizó para orientar nuevas decisiones estratégicas y consolidar su presencia en el mercado.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Características de la ventaja competitiva

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_8.png", class="img-fluid")      
      .col-12.col-lg-9
        p.mb-4 La ventaja competitiva se caracteriza por fortalecer la posición de la organización dentro del mercado, favorecer la diferenciación frente a los competidores y contribuir al logro de los objetivos organizacionales. Su desarrollo depende de la capacidad de la organización para interpretar las condiciones del entorno y orientar sus decisiones estratégicas de manera coherente con dichas condiciones. 
        .row.justify-content-center.align-items-center.mb-3
          .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
            figure
              img(src="@/assets/curso/tema3/img_9.png", class="img-fluid")  
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Asimismo, la ventaja competitiva mantiene una relación directa con la planeación estratégica, ya que las acciones desarrolladas por la organización deben contribuir al fortalecimiento de aquellos aspectos que favorecen su desempeño y su permanencia en el mercado.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-3
        .tarjeta.tarjeta--fondo-img-01.py-3.px-5.mb-5(data-aos="zoom-in-right")
          h5.mb-2 Clave estratégica.
          p.mb-0 La ventaja competitiva permite que una organización fortalezca su posición en el mercado mediante atributos que la diferencian de sus competidores y orientan el desarrollo de sus estrategias de mercadeo.
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-05.py-4.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-2.mb-2.ps-3.ps-xl-5
              h5.mb-2 ¿Sabía que...?
              p.mb-0 Diversos estudios sobre competitividad empresarial coinciden en que las organizaciones fortalecen su posición en el mercado cuando las decisiones estratégicas se sustentan en el análisis permanente del entorno y en la evaluación de su desempeño competitivo, en lugar de responder únicamente a situaciones coyunturales (Porter, 1990; Gudziol Vidal, 1999).
      .col-12.col-lg-10.mb-0
        p.mb-0 Comprender la ventaja competitiva permite reconocer la importancia de diferenciarse dentro del entorno; sin embargo, dicha diferenciación solo puede analizarse en función del mercado donde participa la organización. Por esta razón, el siguiente subtema abordará el concepto de mercado, sus características y su relación con la identificación de oportunidades comerciales.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Mercados
    .mb-0 

    .bg_img_7.mb-3

      .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-xl-7.p-5
            p.mb-0 El mercado es el espacio en el que interactúan la oferta y la demanda alrededor de bienes o servicios, permitiendo el intercambio entre organizaciones y consumidores. Su análisis proporciona información sobre las condiciones en las que se desarrollan las actividades comerciales y constituye un referente para la formulación de estrategias de mercadeo. 
          .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/tema3/img_13.png" class="img-fluid w-100 h-100 object-fit-cover").p-0

      .row.justify-content-center.align-items-center.mb-5
        .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/tema3/img_14.png", class="img-fluid")  
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 Desde una perspectiva estratégica, comprender el mercado implica reconocer las características del entorno donde participa la organización. Este conocimiento facilita la identificación de oportunidades comerciales y contribuye a orientar las decisiones de mercadeo de acuerdo con las condiciones existentes.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido-vc.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img_15.png', class="img-fluid")
            h3.text-center Dinámico
            p.mb-0 Presenta cambios permanentes en sus condiciones.

      .col-12.col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido-vc.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img_16.png', class="img-fluid")
            h3.text-center Competitivo
            p.mb-0 Reúne organizaciones que participan en un mismo entorno comercial.

      .col-12.col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta.color-acento-contenido-vc.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img_17.png', class="img-fluid")
          h3.text-center Variable
          p.mb-0 Sus condiciones pueden modificarse según diferentes factores.

      .col-12.col-sm-6.col-lg-3
        .tarjeta.color-acento-contenido-vc.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img_18.png', class="img-fluid")
            h3.text-center Estratégico
            p.mb-0 Proporciona información para orientar decisiones de mercadeo.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Tipos de mercado

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_19.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los mercados pueden presentar diferentes características según el entorno en el que participan las organizaciones, los productos ofrecidos o las condiciones de intercambio. Reconocer estas diferencias facilita la comprensión del contexto en el que se desarrollan las estrategias de mercadeo y permite interpretar de manera más adecuada la información obtenida durante el diagnóstico. 

    p.mb-0(data-aos="zoom-in-right") El conocimiento de los diferentes mercados también favorece la identificación de oportunidades comerciales, ya que permite analizar las condiciones particulares que influyen en el comportamiento de los participantes y en el desarrollo de las actividades organizacionales. 
    p.mb-5(data-aos="zoom-in-right") Los mercados se clasifican según la naturaleza de sus compradores y su finalidad comercial. Entre los más comunes tenemos

    .row.justify-content-center.align-items-stretch.mb-5 
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        AcordionA.mb-0(tipo="b" clase-tarjeta="tarjeta color-secundario-vc")
          div(titulo="Mercado de consumo")
            p.mb-0 Agrupa a personas y hogares que adquieren productos o servicios para satisfacer necesidades personales o familiares. 
            p.mb-0 Ejemplo: consumidores que compran alimentos, ropa y artículos de aseo en supermercados.
          div(titulo="Mercado industrial")
            p.mb-0 Está conformado por empresas que adquieren materias primas, equipos y servicios para desarrollar sus procesos productivos.
            p.mb-0 Ejemplo: una fábrica de muebles compra madera, maquinaria y materiales para elaborar sus productos.
          div(titulo="Mercado de revendedores")
            p.mb-0 Reúne empresas y comerciantes que compran productos terminados para comercializarlos nuevamente y obtener beneficios económicos. 
            p.mb-0 Ejemplo: un distribuidor mayorista adquiere electrodomésticos para venderlos a establecimientos comerciales.
          div(titulo="Mercado institucional")
            p.mb-0 Comprende organizaciones públicas y privadas que adquieren bienes y servicios para desarrollar sus actividades y atender las necesidades de sus usuarios. 
            p.mb-0 Ejemplo: una universidad compra computadores y mobiliario para equipar sus instalaciones.
          div(titulo="Mercado gubernamental")
            p.mb-0 Está integrado por entidades del Estado que adquieren bienes, obras y servicios para cumplir sus funciones y atender necesidades colectivas. 
            p.mb-0 Ejemplo: una alcaldía contrata el suministro de equipos para instituciones educativas públicas.
          div(titulo="Mercado internacional")
            p.mb-0 Abarca las transacciones comerciales realizadas entre compradores y vendedores de diferentes países, considerando condiciones económicas, culturales y normativas. 
            p.mb-0 Ejemplo: una empresa colombiana exporta café procesado a consumidores y distribuidores europeos.
      .col-6.col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_20.png", class="img-fluid")  

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5
        p.mb-0(data-aos="zoom-in-right") Es importante precisar que las clasificaciones no son excluyentes. Por ejemplo, una entidad gubernamental pertenece al mercado institucional en sentido amplio, mientras que una empresa industrial también puede participar en el mercado internacional.
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-04.py-4.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-4.mb-4
              h5.mb-0 Ejemplo aplicado.
              p.mb-0 Una empresa dedicada a la fabricación de productos de aseo decidió ampliar su operación hacia un nuevo mercado regional. Antes de iniciar este proceso, analizó las características del entorno donde pretendía participar para comprender las condiciones comerciales existentes y orientar sus decisiones de mercadeo de acuerdo con las particularidades del nuevo mercado.
      .col-12.col-lg-10.mb-0
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema3/img_21.png", class="img-fluid")  
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Clave estratégica.
              p.mb-0 Comprender las características del mercado permite interpretar el entorno donde participa la organización y fundamentar las decisiones estratégicas de mercadeo.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Competencia nacional e internacional
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_22.png", class="img-fluid")      
      .col-12.col-lg-9
        p.mb-4 La competencia corresponde al conjunto de organizaciones que participan en un mismo mercado ofreciendo bienes o servicios dirigidos a necesidades similares. Su análisis permite comprender el entorno competitivo y reconocer aquellos aspectos que pueden influir en el desempeño de la organización y en la formulación de estrategias de mercadeo. 
        .tarjeta.tarjeta--fondo-img-01.py-4.px-5.mb-0
          p.mb-0 La competencia puede desarrollarse en escenarios nacionales o internacionales, dependiendo del alcance del mercado donde participa la organización. En ambos casos, su estudio facilita la identificación de condiciones que inciden en la competitividad y en la posición que ocupa la empresa dentro del mercado.

    .row.justify-content-center.cursor-pointer.mb-5
      .col-11.col-md-9.col-lg-8.col-xl-6.mb-4.mb-lg-3(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_23.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 Competencia nacional
            p.mb-0 Se presenta entre empresas que comercializan productos o servicios similares dentro de un mismo país, considerando las necesidades de los consumidores y las condiciones del mercado interno. 
            p.mb-3 Ejemplo: dos cadenas de supermercados colombianas compiten mediante precios, promociones y cobertura comercial.
      .col-11.col-md-9.col-lg-8.col-xl-6.mb-4.mb-lg-3(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_24.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 Competencia internacional
            p.mb-0 Surge cuando empresas de diferentes países compiten por consumidores en uno o varios mercados, mediante precios, calidad, innovación y estrategias de diferenciación. 
            p.mb-3 Ejemplo: una empresa colombiana de confecciones compite con marcas extranjeras que comercializan prendas similares en el país.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        p.mb-0(data-aos="zoom-in-right") La competencia empresarial está influenciada por diversos factores que determinan la capacidad de las organizaciones para atraer clientes, diferenciar sus productos y fortalecer su posición en el mercado. Analizar estos elementos permite comprender las condiciones competitivas, identificar oportunidades de mejora y orientar estrategias comerciales que favorezcan el crecimiento y la sostenibilidad empresarial.
      .col-12.col-lg-12.col-xl-10.mb-3
        SlyderF.circl-arrow.mb-0(columnas="col-12 col-lg-4")
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_25.png", class="img-fluid")
            h4.text-center Precio
            p.text-center Valor que ofrecen las empresas por sus productos o servicios y que influye en las decisiones de compra de los consumidores.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_26.png", class="img-fluid")
            h4.text-center Calidad
            p.text-center Características y nivel de cumplimiento de los productos o servicios frente a las necesidades y expectativas del mercado.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_27.png", class="img-fluid")
            h4.text-center Innovación
            p.text-center Incorporación de mejoras y nuevas soluciones que permiten diferenciar la oferta comercial frente a otras empresas.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_28.png", class="img-fluid")
            h4.text-center Posicionamiento
            p.text-center Lugar que ocupa una marca en la percepción de los consumidores frente a sus competidores.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_29.png", class="img-fluid")
            h4.text-center Capacidad de distribución
            p.text-center Disponibilidad de canales y recursos logísticos para llevar los productos al mercado de manera eficiente y oportuna.
          .tarjeta.color-primario-v.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema3/img_30.png", class="img-fluid")
            h4.text-center Adaptación al mercado
            p.text-center Capacidad para responder a las preferencias de los consumidores, las condiciones comerciales y las exigencias de cada mercado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .tarjeta.tarjeta--fondo-img-05.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-9.mt-3.mb-3
              h5.mb-0 ¿Sabía que...?
              p.mb-0 La internacionalización de los mercados ha incrementado la presencia de organizaciones que compiten más allá de sus fronteras de origen, haciendo que el análisis de la competencia se convierta en una actividad permanente para aquellas empresas que buscan fortalecer su competitividad y su participación en el mercado (Sirkin et al., 2009).

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Incidencia de la competencia en las decisiones de mercadeo

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema3/img_32.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El análisis de la competencia proporciona información que permite comprender las condiciones del entorno y valorar los factores que pueden afectar el desarrollo de las estrategias de mercadeo. Esta información contribuye a identificar oportunidades de diferenciación y fortalece la capacidad de la organización para responder a los cambios del mercado. Asimismo, el estudio de la competencia facilita la toma de decisiones estratégicas, ya que aporta elementos para valorar la posición de la organización dentro del mercado y orientar acciones acordes con los objetivos establecidos y el direccionamiento estratégico.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema3/img_33.png", class="img-fluid")  
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Error frecuente
              p.mb-0 Analizar la competencia no consiste en copiar las estrategias desarrolladas por otras organizaciones, su propósito es comprender el entorno competitivo para fundamentar decisiones acordes con las condiciones y objetivos propios de la organización.
      .col-12.col-lg-10.mb-5
        .tarjeta.tarjeta--fondo-img-03.py-4.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mt-2.mb-2
            .col-12.col-xl-9.mt-4.mb-4
              h5.mb-2 Para reflexionar.
              p.mb-0  ¿Cómo podría afectar la formulación de estrategias de mercadeo una organización que desconoce las condiciones del mercado y el comportamiento de sus competidores?
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") El análisis del mercado y de la competencia permite comprender quiénes participan en el entorno comercial y cómo se desarrolla la dinámica competitiva. Sin embargo, para completar el estudio de los factores externos es necesario analizar el comportamiento de la demanda y la oferta, elementos que determinan gran parte de las condiciones del mercado y que serán abordados en el siguiente subtema.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Demanda y oferta
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-3(data-aos="zoom-in-right") La demanda representa la cantidad de bienes o servicios que los consumidores requieren en un mercado bajo determinadas condiciones, su análisis permite comprender el comportamiento del mercado e identificar las necesidades que pueden orientar la formulación de estrategias de mercadeo. Desde una perspectiva estratégica, conocer la demanda facilita la interpretación de las condiciones del mercado y contribuye a que las organizaciones orienten sus decisiones hacia aquellos segmentos donde existen mayores oportunidades para el cumplimiento de sus objetivos.
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Por otro lado, la oferta corresponde al conjunto de bienes o servicios que las organizaciones ponen a disposición del mercado para atender las necesidades de los consumidores. Su análisis permite comprender las condiciones de participación de las organizaciones y valorar el entorno donde se desarrollan las actividades comerciales. La relación entre la oferta y la demanda constituye un referente para interpretar el comportamiento del mercado y analizar los factores externos que pueden influir en las decisiones estratégicas de la organización.
      .col-6.col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/tema3/img_34.png", class="img-fluid")

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-left")
      h5 Figura 2.
      |    Relación entre la demanda y la oferta
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema3/img_35.svg', class="img-fluid d-none d-lg-block", alt="La figura presenta una comparación entre la demanda y la oferta mediante dos columnas diferenciadas por colores azul y verde. En la parte superior se muestran fotografías de situaciones comerciales reales, mientras que los recuadros inferiores incluyen íconos y descripciones que facilitan la comprensión de ambos conceptos. Esta organización permite reconocer la relación entre las necesidades de los consumidores y la disponibilidad de bienes y servicios, destacando su importancia para analizar el comportamiento del mercado, identificar oportunidades comerciales y orientar decisiones empresariales estratégicas. ").mb-5
      img(src='@/assets/curso/tema3/img_36.svg', class="img-fluid d-block d-lg-none", alt="La figura presenta una comparación entre la demanda y la oferta mediante dos columnas diferenciadas por colores azul y verde. En la parte superior se muestran fotografías de situaciones comerciales reales, mientras que los recuadros inferiores incluyen íconos y descripciones que facilitan la comprensión de ambos conceptos. Esta organización permite reconocer la relación entre las necesidades de los consumidores y la disponibilidad de bienes y servicios, destacando su importancia para analizar el comportamiento del mercado, identificar oportunidades comerciales y orientar decisiones empresariales estratégicas. ").mb-5

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Incidencia de la demanda y la oferta en las estrategias de mercadeo

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_37.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El comportamiento de la demanda y la oferta proporciona información relevante para interpretar las condiciones del mercado y comprender cómo estas pueden influir en la formulación de estrategias de mercadeo, su análisis facilita la identificación de oportunidades y fortalece el proceso de toma de decisiones dentro de la organización. Asimismo, el estudio conjunto de ambos elementos permite valorar la dinámica del entorno y reconocer la importancia de fundamentar las decisiones estratégicas en información obtenida mediante el diagnóstico y el análisis de los factores externos.
    
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-4
        .tarjeta.tarjeta--fondo-img-01.py-3.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/tema3/img_39.png", class="img-fluid")  
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              h5.mb-2 Clave estratégica. 
              p.mb-0 El análisis conjunto de la demanda y la oferta permite comprender la dinámica del mercado y fundamentar decisiones de mercadeo acordes con las condiciones del entorno.

    .bg_img_8.mb-3

      .subtitulo-destacado.mb-5
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Análisis de los factores externos de la empresa

      .tarjeta--bg-img.color-primario.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-xl-7.p-5
            p.mb-0 El análisis de los factores externos es un proceso de diagnóstico que permite identificar y evaluar las condiciones del entorno que pueden influir en el funcionamiento, crecimiento y competitividad de una empresa. Estos factores generalmente se encuentran fuera de su control directo, pero pueden representar oportunidades o amenazas que deben considerarse al establecer objetivos y formular estrategias de mercadeo. 
          .col-12.col-xl-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-xl-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/tema3/img_40.png" class="img-fluid w-100 h-100 object-fit-cover").p-0

      p.mb-5(data-aos="zoom-in-right") Para comprender su impacto en el desempeño empresarial, es importante reconocer los principales factores externos y su relación con las condiciones del mercado. La siguiente figura presenta estos elementos y destaca su influencia en el desarrollo de estrategias orientadas al fortalecimiento de la competitividad organizacional.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_41.png", class="img-fluid")
      .col-12.col-lg-8.mb-0
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Económico")
            .col-12.col-lg-10
              p Variables como inflación, tasas de interés, empleo y poder adquisitivo que influyen en el consumo y los costos empresariales.
          .row(numero="2" titulo="Político y legal")
            .col-12.col-lg-10
              p Políticas gubernamentales, leyes y regulaciones que pueden afectar las actividades comerciales y las condiciones de competencia.
          .row(numero="3" titulo="Social y cultural")
            .col-12.col-lg-10
              p Hábitos, valores, estilos de vida y preferencias de la población que influyen en las decisiones de compra.
          .row(numero="4" titulo="Tecnológico")
            .col-12.col-lg-10
              p Avances tecnológicos y herramientas digitales que pueden transformar los procesos comerciales y las relaciones con los consumidores.
          .row(numero="5" titulo="Ambiental")
            .col-12.col-lg-10
              p  Condiciones ecológicas, disponibilidad de recursos naturales y exigencias de sostenibilidad que afectan las operaciones empresariales.
          .row(numero="6" titulo="Competitivo")
            .col-12.col-lg-10
              p Empresas rivales, sus productos, precios, estrategias y participación de mercado para identificar amenazas y oportunidades de diferenciación.
          .row(numero="7" titulo="Demográfico")
            .col-12.col-lg-10
              p Características y cambios de la población, como edad, distribución geográfica, tamaño de los hogares e ingresos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-5(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-03.py-4.px-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-end.align-items-center.mb-0
            .col-12.col-xl-10.mt-4.mb-4.ps-3.ps-xl-5
              h5.mb-2 Reflexión del capítulo.
              p.mb-0 El entorno presenta oportunidades y desafíos que no siempre pueden ser controlados por la organización, actuar con integridad significa reconocer estas condiciones con objetividad y asumir decisiones responsables frente a ellas, evitando atribuir los resultados únicamente a factores externos. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
