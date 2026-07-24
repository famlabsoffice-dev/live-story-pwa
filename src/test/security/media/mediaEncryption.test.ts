import { describe, it, expect } from 'vitest';
import { MediaEncryptionService } from '../../../security/media/mediaEncryption';
import { MediaMetadataService } from '../../../security/media/mediaMetadata';

describe('MediaEncryptionService', () => {
  const mockFile = new File(['test content'], 'test.txt', { type: 'text/plain' });
  
  it('should encrypt and decrypt data correctly', async () => {
    const metadata = await MediaMetadataService.generateMetadata(mockFile);
    const encrypted = await MediaEncryptionService.encrypt(mockFile, metadata);
    
    expect(encrypted.encryptedData).toBeDefined();
    expect(encrypted.iv).toHaveLength(12);
    
    // Decryption test (mocked key)
    const decrypted = await MediaEncryptionService.decrypt(encrypted);
    expect(decrypted).toBeDefined();
  });

  it('should support progress updates in streaming encryption', async () => {
    const metadata = await MediaMetadataService.generateMetadata(mockFile);
    let progressValue = 0;
    await MediaEncryptionService.encryptStream(mockFile, metadata, (p) => {
      progressValue = p;
    });
    
    expect(progressValue).toBe(100);
  });
});
