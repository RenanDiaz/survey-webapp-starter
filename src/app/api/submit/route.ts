import { NextRequest, NextResponse } from "next/server";

// Guardar respuestas en memoria (solo para demo; en producción usar DB)
const responses: { answers: string[]; timestamp: string }[] = [];

export async function POST(req: NextRequest) {
  const { answers } = await req.json();
  responses.push({ answers, timestamp: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}

export async function GET() {
  // Devuelve todas las respuestas (para reportes futuros)
  return NextResponse.json(responses);
}
