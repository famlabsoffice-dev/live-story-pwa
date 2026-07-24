export interface PerformanceMetric {
  name: string;
  duration: number;
}

export class PerformanceOptimizer {
  private cache = new Map<string, unknown>();

  memoize<T>(key: string, factory: () => T): T {
    if (this.cache.has(key)) {
      return this.cache.get(key) as T;
    }

    const value = factory();
    this.cache.set(key, value);
    return value;
  }

  measure<T>(name: string, operation: () => T): { result: T; metric: PerformanceMetric } {
    const start = performance.now();
    const result = operation();

    return {
      result,
      metric: {
        name,
        duration: performance.now() - start,
      },
    };
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const performanceOptimizer = new PerformanceOptimizer();
