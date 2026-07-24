export interface PerformanceMetric {
  name: string
  value: number
  timestamp: string
}

export function createPerformanceMetric(name: string, value: number): PerformanceMetric {
  return {
    name,
    value,
    timestamp: new Date().toISOString(),
  }
}
