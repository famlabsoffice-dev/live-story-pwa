export class MediaBackgroundSync {
  async register() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      return registration;
    }
    return null;
  }
}
