import type { InterviewContext } from "./types";

export class ContextAnalyzer {
  analyze(context: InterviewContext): string[] {
    return context.discoveredTopics.filter(
      (topic) => !context.answeredQuestionIds.includes(topic),
    );
  }
}
