export interface InterviewContext {
  topics: string[];
  missingAreas: string[];
}

export function analyzeContext(text: string): InterviewContext {
  return {
    topics: text ? text.split(/\s+/).slice(0, 5) : [],
    missingAreas: [],
  };
}
