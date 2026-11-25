<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fortaleciendo la planeación estratégica.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, principios y relaciones desarrollados en el componente formativo, mediante la identificación, comprensión y aplicación conceptual de los fundamentos de la planeación estratégica, la competitividad y el análisis del mercado.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representa la competitividad para una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad para responder estratégicamente al mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de productos comercializados anualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de clientes registrados oficialmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación física de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el propósito del diagnóstico del mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar inmediatamente las ventas organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar información para orientar decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Definir procesos administrativos internos exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar las actividades de producción empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué analiza principalmente el análisis interno empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las condiciones políticas del entorno comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El comportamiento de la competencia internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las capacidades propias de la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los sistemas externos de distribución comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué orienta el direccionamiento estratégico organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La clasificación de los segmentos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La distribución física de los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El comportamiento general del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las decisiones y acciones organizacionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál elemento fortalece la formulación de objetivos de mercadeo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La planeación estratégica organizacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La ubicación geográfica empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diseño del producto comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad instalada productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué refleja la ventaja competitiva en una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La clasificación de sus productos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los atributos que la diferencian del mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El volumen anual de su producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de empleados vinculados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite identificar el análisis del mercado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oportunidades para orientar estrategias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambios en la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Condiciones del entorno y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Procesos internos de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué elemento pertenece a los factores externos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La productividad de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El valor generado en procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aprovechamiento de recursos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La competencia nacional e internacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa la productividad para la organización?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad para aprovechar sus recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El comportamiento de la oferta comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El crecimiento de los mercados externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura del sistema distributivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué integra la planeación estratégica organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente las acciones comerciales futuras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El análisis y las acciones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente los recursos financieros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procesos productivos de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el propósito de segmentar un mercado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de competidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar grupos con características comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar los procesos de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir las actividades de planeación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza a un segmento objetivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reúne organizaciones del mismo sector.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corresponde a mercados internacionales únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orienta las estrategias de mercadeo organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Define los recursos internos disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué finalidad tienen los sistemas de distribución?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar el acceso del mercado a la oferta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar el comportamiento de la demanda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar el direccionamiento estratégico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hacer llegar productos o servicios al mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué analiza el clima económico del mercado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las condiciones económicas del entorno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las fortalezas internas organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las etapas del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los niveles de productividad empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cómo contribuye el <em>e-marketing</em> a la organización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye completamente la planeación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apoya las estrategias mediante medios digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplaza el análisis del mercado realizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de segmentar mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué orienta el clima político en el análisis estratégico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las condiciones políticas del entorno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los procesos internos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La clasificación de los clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El potencial de ventas organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué permite estimar el pronóstico de ventas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La productividad de los procesos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los resultados comerciales esperados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La estructura del mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las condiciones del clima social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué deben considerar las estrategias de mercadeo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la oferta disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la capacidad productiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentos, mercado y objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los recursos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué fortalece el valor generado para los clientes?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El comportamiento de la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La participación en mercados externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El desarrollo de procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La relación entre organización y mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué integra el <em>e-marketing</em> dentro de la organización?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las acciones digitales del mercadeo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los procesos de producción empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las actividades del análisis financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los sistemas de control administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Ha acertado la respuesta!',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
