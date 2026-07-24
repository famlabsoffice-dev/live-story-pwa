export type NetworkListener = (online: boolean) => void;

class OfflineService {
  private listeners = new Set<NetworkListener>();

  isOnline(): boolean {
    if (typeof navigator === 'undefined') return true;
    return navigator.onLine;
  }

  isOffline(): boolean {
    return !this.isOnline();
  }

  subscribe(listener: NetworkListener): () => void {
    this.listeners.add(listener);

    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleChange);
      window.addEventListener('offline', this.handleChange);
    }

    return () => {
      this.listeners.delete(listener);
    };
  }

  private handleChange = (): void => {
    const status = this.isOnline();
    this.listeners.forEach((listener) => listener(status));
  };
}

export const offlineService = new OfflineService();
