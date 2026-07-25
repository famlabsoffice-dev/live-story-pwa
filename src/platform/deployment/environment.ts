export type DeploymentStage =
  | "development"
  | "staging"
  | "production";

export interface DeploymentEnvironment {
  name: DeploymentStage;
  version: string;
  buildId: string;
  deployedAt: string;
}

export function createDeploymentEnvironment(
  config: DeploymentEnvironment,
): DeploymentEnvironment {
  return {
    ...config,
    deployedAt: config.deployedAt || new Date().toISOString(),
  };
}
