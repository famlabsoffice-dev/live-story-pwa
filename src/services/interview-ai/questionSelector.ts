import type { InterviewContext } from "./contextAnalyzer";

export function selectQuestions(context: InterviewContext): string[] {
  if (context.missingAreas.length > 0) {
    return context.missingAreas.map((area) => `Erzähle mehr über ${area}`);
  }

  return ["Welche Erinnerung ist dir besonders wichtig?"];
}
