import { describe, expect, it } from 'vitest';

describe('Memory Graph Core', () => {
  it('supports memory nodes', () => {
    const node = { id: '1', type: 'person', label: 'Family', connections: [] };
    expect(node.label).toBe('Family');
  });
});
