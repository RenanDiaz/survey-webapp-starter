"use client";
import React, { useState } from "react";

// Preguntas CHASIDE (1-98)
const chasideQuestions = [
  "¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?",
  "¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?",
  "¿Te gustaría dirigir/crear un proyecto de urbanización en tu provincia?",
  "¿A una frustración siempre opones un pensamiento positivo?",
  "¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?",
  "¿Cuando eras chico, te interesaba saber cómo estaban construidos tus juguetes?",
  "¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?",
  "¿Escuchas atentamente los problemas que te plantean tus amigos?",
  "¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?",
  "¿Eres exigente y crítico con tu equipo de trabajo?",
  "¿Te atrae armar rompecabezas o puzzles?",
  "¿Te gustaría conocer la diferencia entre macroeconomía y microeconomía?",
  "¿Usar uniforme te hace sentir distinto, importante?",
  "¿Participarías como profesional en un espectáculo de acrobacia aérea?",
  "¿Organizas tu dinero de manera que te alcance hasta el próximo cobro?",
  "¿Convences fácilmente a otras personas sobre la validez de tus argumentos?",
  "¿Te gustaría estar informado sobre los nuevos descubrimientos que se están realizando sobre el origen del Universo?",
  "¿Ante una situación de emergencia actúas rápidamente?",
  "¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?",
  "¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?",
  "¿Eres el que pone un toque de alegría en las fiestas?",
  "¿Crees que los detalles son tan importantes como el todo?",
  "¿Te sentirías a gusto trabajando en un ámbito hospitalario?",
  "¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?",
  "¿Pasarías varias horas leyendo algún libro de tu interés?",
  "¿Planificas detalladamente tus trabajos antes de empezar?",
  "¿Entablas una relación casi personal con tu ordenador?",
  "¿Disfrutas modelando con arcilla?",
  "¿Ayudas habitualmente a los no videntes (a quien lo necesite) a cruzar la calle?",
  "¿Consideras importante que desde la educación secundaria se fomente la actitud crítica y la participación activa?",
  "¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?",
  "¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?",
  "¿Participarías en una campaña de prevención contra la enfermedad como el sida?",
  "¿Te interesan los temas relacionados al pasado y a la evolución del hombre?",
  "¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
  "¿Fuera de los horarios escolares, dedicas algún día de la semana a la realización de actividades corporales?",
  "¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de algún peligro?",
  "¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?",
  "¿Te gusta más el trabajo manual que el trabajo intelectual?",
  "¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional (ayudando)?",
  "¿Participarías de una investigación sobre la violencia en el fútbol?",
  "¿Te gustaría trabajar en un laboratorio mientras estudias?",
  "¿Arriesgarías tu vida para salvar la vida de otro que no conoces?",
  "¿Te agradaría hacer un curso de primeros auxilios?",
  "¿Tolerarías empezar tantas veces como fuere necesario hasta obtener el logro deseado?",
  "¿Distribuyes tu horarios del día adecuadamente para poder hacer todo lo planeado?",
  "¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?",
  "¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo el marino?",
  "¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?",
  "¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?",
  "¿Te resulta fácil coordinar un grupo de trabajo?",
  "¿Te resultó interesante el estudio de las ciencias biológicas?",
  "¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?",
  "¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu provincia?",
  "¿Tienes interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?",
  "¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?",
  "¿Desearías que te regalen algún instrumento musical para tu cumpleaños?",
  "¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?",
  "¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?",
  "¿Cuando se descompone un artefacto en tu casa, te dispones prontamente a repararlo?",
  "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?",
  "¿Leerías revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
  "¿Preservar las raíces culturales de nuestro país, te parece importante y necesario?",
  "¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
  "¿Te gustaría realizar tareas auxiliares en una nave, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc.?",
  "¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?",
  "¿La libertad y la justicia son valores fundamentales en tu vida?",
  "¿Aceptarías hacer una práctica pagadas en una industria de productos alimenticios en el sector de control de calidad?",
  "¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?",
  "¿Te interesaría investigar sobre alguna nueva vacuna?",
  "¿En un equipo de trabajo, preferís el rol de coordinador?",
  "¿En una discusión entre amigos, te ofreces como mediador?",
  "¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?",
  "¿Lucharías por una causa justa hasta las últimas consecuencias?",
  "¿Te gustaría investigar científicamente sobre cultivos agrícolas?",
  "¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión?",
  "¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?",
  "¿Dirigirías el área de importación y exportación de una empresa?",
  "¿Te cohíbes/inhibes –cortas- al entrar a un lugar nuevo con gente desconocida?",
  "¿Te gratificaría el trabajar con niños?",
  "¿Harías el diseño de un cartel o afiche para una campaña contra el sida?",
  "¿Dirigirías un grupo de teatro independiente?",
  "¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?",
  "¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?",
  "¿Te costearías tus estudios trabajando en una auditoría –revisión de las cuentas-?",
  "¿Eres de los que defiendes causas perdidas?",
  "¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?",
  "¿Sabrías responder que significa ADN o ARN?",
  "¿Elegirías una carrera cuyo instrumento de trabajo fuere la utilización de un idioma extranjero?",
  "¿Trabajar con objetos, máquinas, te resulta más gratificante que trabajar con personas?",
  "¿Te resultaría gratificante ser asesor contable en una empresa reconocida?",
  "¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?",
  "¿Te atrae investigar sobre los misterios del universo, por ejemplo los agujeros negros?",
  "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?",
  "¿Dedicarías parte de tu tiempo a ayudar a personas con carencias o necesitadas?",
  "¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?",
  "¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?",
  "¿Sabes qué es el PIB? Se trata de un concepto económico. ¿Te gusta este tipo de tema?",
];


export default function ChasideTest() {
  const [answers, setAnswers] = useState<string[]>(Array(chasideQuestions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleAnswer = async (value: string) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
    if (current < chasideQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Última pregunta, enviar
      setSubmitted(true);
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: newAnswers }),
      });
    }
  };

  const handleRestart = () => {
    setAnswers(Array(chasideQuestions.length).fill(""));
    setSubmitted(false);
    setCurrent(0);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center border border-gray-200 mt-8">
        <h2 className="text-3xl font-extrabold mb-4 text-blue-700">¡Test enviado!</h2>
        <p className="mb-8 text-lg text-gray-700">
          Gracias por completar el test CHASIDE.<br />Pronto verás tu resultado aquí.
        </p>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow"
          onClick={handleRestart}
        >
          Volver a intentar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200 mt-8">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center">
        Test de orientación vocacional CHASIDE
      </h2>
      <div className="mb-8 text-center text-gray-700">
        Pregunta {current + 1} de {chasideQuestions.length}
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-4 text-gray-900 text-lg">
          {current + 1}. {chasideQuestions[current]}
        </label>
        <div className="flex gap-8 justify-center">
          {["Sí", "No"].map((opt) => (
            <button
              key={opt}
              type="button"
              className={`px-8 py-3 rounded-lg font-semibold shadow text-lg transition border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${answers[current] === opt ? "bg-blue-600 text-white border-blue-700" : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-50"}`}
              onClick={() => handleAnswer(opt)}
              autoFocus
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="text-gray-500 text-sm mt-8">Puedes salir y volver, tu avance no se guarda.</div>
    </div>
  );
}
