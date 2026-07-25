import { describe, expect, it } from "vitest";
import { selectQuestion } from "./questionSelection";

const questions = [
  { id: "q2", category: "family" as const, type: "open" as const, prompt: "Family", order: 2, required: true },
  { id: "q1", category: "childhood" as const, type: "open" as const, prompt: "Childhood", order: 1, required: true },
];

describe("question selection", () => {
  it("selects first open ordered question", () => {
    expect(selectQuestion(questions, [])?.id).toBe("q1");
  });
});
