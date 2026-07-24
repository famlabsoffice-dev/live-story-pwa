export interface Transcript {
  id: string;
  text: string;
  language: string;
  confidence: number;
}

export interface TranscriptionService {
  transcribe(audio: Blob): Promise<Transcript>;
}
