import { EncryptedMedia, MediaMetadata } from './mediaTypes';

export class MediaEncryptionService {
  private static readonly ALGORITHM = 'AES-GCM';
  private static readonly KEY_LENGTH = 256;

  /**
   * Encrypts a file or blob using AES-GCM.
   */
  static async encrypt(data: ArrayBuffer | Blob, metadata: MediaMetadata): Promise<EncryptedMedia> {
    const arrayBuffer = data instanceof Blob ? await data.arrayBuffer() : data;
    const key = await this.generateKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encryptedData = await crypto.subtle.encrypt(
      {
        name: this.ALGORITHM,
        iv: iv
      },
      key,
      arrayBuffer
    );

    // In a real scenario, the key would be managed by a KeyManager.
    // Here we export it as a placeholder.
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const keyId = 'master-key-v1'; // Placeholder

    return {
      metadata,
      encryptedData,
      iv,
      keyId
    };
  }

  /**
   * Decrypts encrypted media.
   */
  static async decrypt(encryptedMedia: EncryptedMedia): Promise<ArrayBuffer> {
    const { encryptedData, iv, keyId } = encryptedMedia;
    
    // Placeholder: In reality, fetch the key using keyId from KeyManager
    const key = await this.importKey(new Uint8Array(32)); // Mock key

    const decryptedData = await crypto.subtle.decrypt(
      {
        name: this.ALGORITHM,
        iv: iv
      },
      key,
      encryptedData
    );

    return decryptedData;
  }

  private static async generateKey(): Promise<CryptoKey> {
    return await crypto.subtle.generateKey(
      {
        name: this.ALGORITHM,
        length: this.KEY_LENGTH
      },
      true,
      ['encrypt', 'decrypt']
    );
  }

  private static async importKey(rawKey: Uint8Array): Promise<CryptoKey> {
    return await crypto.subtle.importKey(
      'raw',
      rawKey,
      this.ALGORITHM,
      true,
      ['encrypt', 'decrypt']
    );
  }
}
