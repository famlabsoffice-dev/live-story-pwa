export interface InterviewContext {
  topics: string[];
  missingAreas: string[];
  emotionalSignals: string[];
}

export function analyzeContext(text: string): InterviewContext {
  const lower = text.toLowerCase();

  return {
    topics: text.split(/\s+/).slice(0, 10),
    missingAreas: detectMissingAreas(lower),
    emotionalSignals: detectEmotion(lower),
  };
}

function detectMissingAreas(text: string): string[] {
  const areas = ["family", "childhood", "places", "work"];
  return areas.filter((area) => !text.includes(area));
}

function detectEmotion(text: string): string[] {
  return ["glücklich", "traurig", "stolz", "angst"].filter((word) => text.includes(word));
}
