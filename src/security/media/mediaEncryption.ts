import { EncryptedMedia, MediaMetadata } from './mediaTypes';

export class MediaEncryptionService {
  private static readonly ALGORITHM = 'AES-GCM';
  private static readonly KEY_LENGTH = 256;

  static async encrypt(data: ArrayBuffer | Blob, metadata: MediaMetadata): Promise<EncryptedMedia> {
    const arrayBuffer = data instanceof Blob ? await data.arrayBuffer() : data;
    const key = await this.generateKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedData = await crypto.subtle.encrypt({ name: this.ALGORITHM, iv }, key, arrayBuffer);

    return { metadata, encryptedData, iv, keyId: 'master-key-v1' };
  }

  static async decrypt(encryptedMedia: EncryptedMedia): Promise<ArrayBuffer> {
    const { encryptedData, iv } = encryptedMedia;
    const key = await this.importKey(new Uint8Array(32));
    return crypto.subtle.decrypt({ name: this.ALGORITHM, iv }, key, encryptedData);
  }

  private static async generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey({ name: this.ALGORITHM, length: this.KEY_LENGTH }, true, ['encrypt', 'decrypt']);
  }

  private static async importKey(rawKey: Uint8Array): Promise<CryptoKey> {
    return crypto.subtle.importKey('raw', rawKey, this.ALGORITHM, true, ['encrypt', 'decrypt']);
  }

  static async encryptStream(file: File | Blob, metadata: MediaMetadata, onProgress?: (progress: number) => void): Promise<EncryptedMedia> {
    const totalChunks = Math.ceil(file.size / (1024 * 1024));
    for (let i = 0; i < totalChunks; i++) {
      onProgress?.(((i + 1) / totalChunks) * 100);
    }
    return this.encrypt(file, metadata);
  }
}
