export type InterviewStatus =
  | "draft"
  | "active"
  | "paused"
  | "completed";

export type InterviewMode =
  | "guided"
  | "free_conversation"
  | "memory_reconstruction";

export interface InterviewParticipant {
  id: string;
  displayName: string;
}

export interface InterviewSession {
  id: string;
  participant: InterviewParticipant;
  status: InterviewStatus;
  mode: InterviewMode;
  createdAt: string;
  updatedAt: string;
}

export interface InterviewAnswer {
  id: string;
  questionId: string;
  text: string;
  capturedAt: string;
  confidence?: number;
}
