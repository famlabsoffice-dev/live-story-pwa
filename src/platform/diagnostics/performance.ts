export interface PerformanceMetric {
  name: string;
  value: number;
  measuredAt: string;
}

export function measurePerformance(
  name: string,
  value: number,
): PerformanceMetric {
  return {
    name,
    value,
    measuredAt: new Date().toISOString(),
  };
}
