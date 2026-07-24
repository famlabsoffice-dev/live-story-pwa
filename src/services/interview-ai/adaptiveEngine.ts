import { analyzeContext } from "./contextAnalyzer";
import { selectQuestions } from "./questionSelector";

export function generateNextQuestions(transcript: string): string[] {
  const context = analyzeContext(transcript);
  return selectQuestions(context);
}
