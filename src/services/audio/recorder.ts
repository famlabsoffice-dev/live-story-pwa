export class AudioRecorder {
  private recorder?: MediaRecorder;
  private chunks: Blob[] = [];

  async start(stream: MediaStream): Promise<void> {
    this.chunks = [];
    this.recorder = new MediaRecorder(stream);
    this.recorder.ondataavailable = (event) => {
      if (event.data.size > 0) this.chunks.push(event.data);
    };
    this.recorder.start();
  }

  stop(): Promise<Blob> {
    return new Promise((resolve) => {
      if (!this.recorder) return resolve(new Blob());
      this.recorder.onstop = () => {
        resolve(new Blob(this.chunks, { type: 'audio/webm' }));
      };
      this.recorder.stop();
    });
  }
}
