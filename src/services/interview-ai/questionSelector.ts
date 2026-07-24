import type { InterviewContext } from "./contextAnalyzer";

const questionMap: Record<string, string> = {
  family: "Erzähle mehr über deine Familie.",
  childhood: "Welche Erinnerung aus deiner Kindheit ist besonders wichtig?",
  places: "Welche Orte haben dein Leben geprägt?",
  work: "Welche Erfahrungen aus deinem Berufsleben möchtest du bewahren?",
};

export function selectQuestions(context: InterviewContext): string[] {
  const questions = context.missingAreas
    .map((area) => questionMap[area])
    .filter(Boolean);

  return questions.length
    ? questions.slice(0, 3)
    : ["Welche Erinnerung ist dir besonders wichtig?"];
}
