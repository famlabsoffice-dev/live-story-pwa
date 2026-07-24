export interface InterviewState { sessionId: string; asked: string[]; answered: string[]; }

export function createInterviewState(): InterviewState {
 return { sessionId: crypto.randomUUID(), asked: [], answered: [] };
}
