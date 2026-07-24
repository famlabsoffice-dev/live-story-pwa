export interface AudioRecording {
  id: string;
  blob: Blob;
  createdAt: string;
  durationMs: number;
}

export class AudioRecorderService {
  private recorder?: MediaRecorder;
  private chunks: Blob[] = [];
  private startedAt = 0;

  async start(stream: MediaStream): Promise<void> {
    this.chunks = [];
    this.recorder = new MediaRecorder(stream);
    this.startedAt = Date.now();

    this.recorder.ondataavailable = (event) => {
      if (event.data.size) this.chunks.push(event.data);
    };

    this.recorder.start();
  }

  async stop(): Promise<AudioRecording> {
    if (!this.recorder) throw new Error("Recorder not started");

    await new Promise<void>((resolve) => {
      this.recorder!.onstop = () => resolve();
      this.recorder!.stop();
    });

    return {
      id: crypto.randomUUID(),
      blob: new Blob(this.chunks, { type: "audio/webm" }),
      createdAt: new Date().toISOString(),
      durationMs: Date.now() - this.startedAt,
    };
  }
}
