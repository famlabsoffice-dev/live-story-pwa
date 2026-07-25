import type { DeploymentEnvironment } from "./environment";

export interface DeploymentConfig {
  environment: DeploymentEnvironment;
  offlineEnabled: boolean;
  diagnosticsEnabled: boolean;
}

export const defaultDeploymentConfig: DeploymentConfig = {
  environment: {
    name: "production",
    version: "1.0.0",
    buildId: "local-build",
    deployedAt: new Date().toISOString(),
  },
  offlineEnabled: true,
  diagnosticsEnabled: true,
};
