import type { InterviewQuestion } from "../domain/interview/interview.types";

const questions: InterviewQuestion[] = [];

export const questionRepository = {
  create: (question: InterviewQuestion) => {
    questions.push(question);
    return question;
  },
  list: () => questions,
  getById: (id: string) => questions.find((question) => question.id === id),
};
