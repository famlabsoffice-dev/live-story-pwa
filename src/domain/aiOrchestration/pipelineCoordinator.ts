export interface PipelineStage<Input, Output> {
  execute(input: Input): Promise<Output>;
}

export interface PipelineExecutionContext {
  sessionId: string;
  storyId: string;
  metadata?: Record<string, unknown>;
}

export interface PipelineResult<T> {
  success: boolean;
  output?: T;
  error?: Error;
}

export class PipelineCoordinator<Input, Output> {
  private readonly stages: PipelineStage<unknown, unknown>[];

  constructor(stages: PipelineStage<unknown, unknown>[] = []) {
    this.stages = stages;
  }

  addStage(stage: PipelineStage<unknown, unknown>): void {
    this.stages.push(stage);
  }

  async execute(
    input: Input,
    context: PipelineExecutionContext,
  ): Promise<PipelineResult<Output>> {
    try {
      if (!context.sessionId || !context.storyId) {
        throw new Error("Invalid pipeline execution context");
      }

      let current: unknown = input;

      for (const stage of this.stages) {
        current = await stage.execute(current);
      }

      return {
        success: true,
        output: current as Output,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }
}
