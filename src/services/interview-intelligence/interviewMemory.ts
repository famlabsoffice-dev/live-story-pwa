export class InterviewMemory {
  private answers = new Map<string, string>();

  remember(questionId: string, answer: string): void {
    this.answers.set(questionId, answer);
  }

  getAnswer(questionId: string): string | undefined {
    return this.answers.get(questionId);
  }
}
