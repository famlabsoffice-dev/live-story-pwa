export class OfflineMediaManager {
  isOnline() {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  }

  status() {
    return this.isOnline() ? 'online' : 'offline';
  }
}
