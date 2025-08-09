"use client";
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "¿Te gusta trabajar en equipo?",
    options: ["Sí", "No", "A veces"],
  },
  {
    id: 2,
    text: "¿Prefieres actividades prácticas o teóricas?",
    options: ["Prácticas", "Teóricas", "Ambas"],
  },
  {
    id: 3,
    text: "¿Te consideras una persona creativa?",
    options: ["Sí", "No", "Depende"],
  },
  {
    id: 4,
    text: "¿Qué tan importante es para ti la organización?",
    options: ["Muy importante", "Poco importante", "Nada importante"],
  },
  {
    id: 5,
    text: "¿Te adaptas fácilmente a los cambios?",
    options: ["Sí", "No", "A veces"],
  },
];

function calculateResult(answers: string[]) {
  // Ejemplo simple: cuenta cuántas veces respondió "Sí"
  const score = answers.filter((a) => a === "Sí").length;
  if (score >= 4) return "¡Eres muy positivo y adaptable!";
  if (score >= 2) return "Tienes un buen equilibrio.";
  return "Podrías trabajar en tu apertura a nuevas experiencias.";
}

export default function SurveyForm() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (qIdx: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateResult(answers));
    setSubmitted(true);
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center border border-gray-200">
        <h2 className="text-3xl font-extrabold mb-4 text-blue-700">Resultado</h2>
        <p className="mb-8 text-lg text-gray-700">{result}</p>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow"
          onClick={() => {
            setAnswers(Array(questions.length).fill(""));
            setSubmitted(false);
            setResult("");
          }}
        >
          Volver a intentar
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-blue-700 text-center">
        Encuesta de ejemplo
      </h2>
      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="mb-2">
            <label className="block font-semibold mb-3 text-gray-900 text-lg">{q.text}</label>
            <div className="flex flex-wrap gap-4">
              {q.options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition border border-transparent focus-within:border-blue-400"
                >
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={opt}
                    checked={answers[idx] === opt}
                    onChange={() => handleChange(idx, opt)}
                    required
                    className="accent-blue-600 w-5 h-5"
                  />
                  <span className="text-gray-800 text-base">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold mt-8 shadow-lg transition"
      >
        Enviar
      </button>
    </form>
  );
}
