export interface TranscriptResult { text: string; language: string; }

export function normalizeTranscript(text: string): TranscriptResult {
 return { text: text.trim(), language: 'de' };
}
