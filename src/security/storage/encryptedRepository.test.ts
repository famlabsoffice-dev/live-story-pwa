import { describe, expect, it } from 'vitest';
import { deriveKey } from '../crypto/keyManager';
import { EncryptedRepository } from './encryptedRepository';

describe('EncryptedRepository', () => {
  it('stores and restores encrypted records', async () => {
    const { key } = await deriveKey('storage-password');
    const repository = new EncryptedRepository(key, 'stories');

    await repository.save('550e8400-e29b-41d4-a716-446655440000', {
      title: 'My Story',
    });

    await expect(
      repository.get('550e8400-e29b-41d4-a716-446655440000'),
    ).resolves.toEqual({ title: 'My Story' });
  });
});
