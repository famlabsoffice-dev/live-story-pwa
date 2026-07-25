import type { InterviewAnswer } from "./interviewTypes";

export interface StoryFragment {
  id: string;
  sourceAnswerId: string;
  content: string;
  createdAt: string;
}

export interface ReconstructedStory {
  fragments: StoryFragment[];
  generatedAt: string;
}

export function buildStoryFragments(
  answers: InterviewAnswer[]
): StoryFragment[] {
  return answers.map((answer) => ({
    id: `fragment-${answer.id}`,
    sourceAnswerId: answer.id,
    content: answer.text,
    createdAt: new Date().toISOString(),
  }));
}

export function reconstructStory(
  answers: InterviewAnswer[]
): ReconstructedStory {
  return {
    fragments: buildStoryFragments(answers),
    generatedAt: new Date().toISOString(),
  };
}
