export interface LocalAIModel {
  id: string;
  name: string;
  version: string;
  localOnly: boolean;
}

export class ModelRegistry {
  private models: LocalAIModel[] = [];

  register(model: LocalAIModel): void {
    this.models.push(model);
  }

  get(modelId: string): LocalAIModel | undefined {
    return this.models.find((model) => model.id === modelId);
  }
}
