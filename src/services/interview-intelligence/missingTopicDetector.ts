import type { InterviewContext } from "./types";

export class MissingTopicDetector {
  detect(context: InterviewContext, expectedTopics: string[]): string[] {
    return expectedTopics.filter(
      (topic) => !context.discoveredTopics.includes(topic),
    );
  }
}
