import { describe, expect, it } from "vitest";
import { getNextQuestion, isInterviewComplete } from "./interviewFlowController";
import type { InterviewSessionContext } from "./sessionContext";

const context: InterviewSessionContext = {
  session: {
    id: "session-1",
    participant: { id: "person-1", displayName: "Test" },
    status: "active",
    mode: "guided",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  questions: [
    { id: "q1", category: "childhood", type: "open", prompt: "Memory", order: 1, required: true },
  ],
  answers: [],
  metadata: {},
};

describe("interview flow controller", () => {
  it("returns next unanswered question", () => {
    expect(getNextQuestion(context)?.id).toBe("q1");
  });

  it("detects incomplete sessions", () => {
    expect(isInterviewComplete(context)).toBe(false);
  });
});
