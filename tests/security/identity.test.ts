import { pseudonymize } from '@/security/identity/pseudonymizer';

describe('Identity Protection', () => {
  it('creates anonymous identifiers', () => {
    expect(pseudonymize('Max Mustermann')).toContain('anon_');
  });
});
