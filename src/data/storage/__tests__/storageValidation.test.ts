import { describe, expect, it } from 'vitest';
import { validateStorageRecord } from '../storageValidation';

describe('validateStorageRecord', () => {
  it('accepts valid records', () => {
    expect(
      validateStorageRecord({
        id: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    ).toBe(true);
  });

  it('rejects invalid records', () => {
    expect(validateStorageRecord({ id: '1' })).toBe(false);
  });
});
