export interface HealthStatus {
  healthy: boolean;
  checkedAt: string;
}

export function runHealthCheck(): HealthStatus {
  return {
    healthy: true,
    checkedAt: new Date().toISOString(),
  };
}
