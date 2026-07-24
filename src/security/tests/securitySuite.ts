export interface SecurityTestCase {
  name: string;
  execute(): Promise<boolean>;
}

export interface SecurityTestReport {
  passed: number;
  failed: number;
  results: Array<{ name: string; passed: boolean }>;
}

export async function runSecuritySuite(
  tests: SecurityTestCase[],
): Promise<SecurityTestReport> {
  const results = [];

  for (const test of tests) {
    results.push({
      name: test.name,
      passed: await test.execute(),
    });
  }

  return {
    passed: results.filter((item) => item.passed).length,
    failed: results.filter((item) => !item.passed).length,
    results,
  };
}
