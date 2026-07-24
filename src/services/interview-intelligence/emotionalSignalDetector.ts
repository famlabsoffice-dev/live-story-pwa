export interface EmotionalSignal {
  sentiment: "positive" | "neutral" | "negative";
  intensity: number;
}

export class EmotionalSignalDetector {
  detect(text: string): EmotionalSignal {
    return {
      sentiment: text.length > 0 ? "neutral" : "neutral",
      intensity: 0,
    };
  }
}
