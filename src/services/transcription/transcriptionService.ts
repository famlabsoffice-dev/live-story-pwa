export interface TranscriptResult {
  text: string;
  language: string;
  confidence: number;
}

export interface TranscriptionProvider {
  transcribe(audio: Blob): Promise<TranscriptResult>;
}

export class LocalTranscriptionService implements TranscriptionProvider {
  async transcribe(audio: Blob): Promise<TranscriptResult> {
    return {
      text: "",
      language: "de-DE",
      confidence: 0,
    };
  }
}
