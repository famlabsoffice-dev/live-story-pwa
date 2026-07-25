import { describe, expect, it } from "vitest";
import { InMemoryInterviewRepository } from "./inMemoryInterviewRepository";

describe("offline interview resume", () => {
  it("keeps stored interview data available", async () => {
    const repository = new InMemoryInterviewRepository();

    await repository.saveSession({
      id: "session-1",
      participant: { id: "p1", displayName: "Test" },
      status: "paused",
      mode: "guided",
      createdAt: "2026-01-01",
      updatedAt: "2026-01-01",
    });

    const session = await repository.getSession("session-1");

    expect(session?.status).toBe("paused");
  });
});
