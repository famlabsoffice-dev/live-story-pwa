import type { PipelineCoordinator, PipelineExecutionContext, PipelineResult } from './pipelineCoordinator';

export interface AIOrchestrationRequest<T> {
  input: T;
  context: PipelineExecutionContext;
}

export interface AIOrchestrationService<TInput, TOutput> {
  orchestrate(request: AIOrchestrationRequest<TInput>): Promise<PipelineResult<TOutput>>;
}

export class AIOrchestrationIntegrationLayer<TInput, TOutput>
  implements AIOrchestrationService<TInput, TOutput>
{
  constructor(
    private readonly coordinator: PipelineCoordinator<TInput, TOutput>,
  ) {}

  async orchestrate(
    request: AIOrchestrationRequest<TInput>,
  ): Promise<PipelineResult<TOutput>> {
    return this.coordinator.execute(request.input, request.context);
  }
}
