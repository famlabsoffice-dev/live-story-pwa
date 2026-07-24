export interface AIInferenceRequest {
  input: string;
  modelId: string;
}

export interface AIInferenceResult {
  output: string;
  processedLocally: boolean;
}

export class LocalAIRuntime {
  async run(request: AIInferenceRequest): Promise<AIInferenceResult> {
    return {
      output: request.input,
      processedLocally: true,
    };
  }
}
