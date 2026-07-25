import type { InterviewRepository } from "./interviewRepository";
import type { InterviewSessionContext } from "./sessionContext";

export async function persistInterviewContext(
  repository: InterviewRepository,
  context: InterviewSessionContext
): Promise<void> {
  await repository.saveSession(context.session);

  for (const answer of context.answers) {
    await repository.saveAnswer(answer);
  }
}
