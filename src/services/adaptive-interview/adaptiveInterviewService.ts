import type {
  InterviewContext,
  InterviewQuestion,
  InterviewSignal,
} from "./adaptiveInterviewTypes";

export class AdaptiveInterviewIntelligence {
  generateQuestion(
    context: InterviewContext,
    signal: InterviewSignal,
  ): InterviewQuestion {
    const missing = signal.missingDetails[0] ?? context.currentTopic;

    return {
      id: crypto.randomUUID(),
      question: `Kannst du mehr über ${missing} erzählen?`,
      intent: signal.missingDetails.length > 0
        ? "clarification"
        : "memory_recall",
      priority: Math.round(context.confidence * 100),
    };
  }

  prioritize(
    questions: InterviewQuestion[],
  ): InterviewQuestion[] {
    return [...questions].sort((a, b) => b.priority - a.priority);
  }
}
