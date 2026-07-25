import type { InterviewContext } from './interviewTypes';

export interface ReconstructionResult {
  summary: string;
  memories: string[];
}

export class StoryReconstructionPipeline {
  reconstruct(context: InterviewContext, answers: string[]): ReconstructionResult {
    return {
      summary: answers.join(' '),
      memories: [...context.collectedFacts, ...answers],
    };
  }
}
