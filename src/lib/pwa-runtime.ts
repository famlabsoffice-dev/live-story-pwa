/**
 * PWA Runtime Management
 * Handles Service Worker registration and lifecycle
 */
export const registerServiceWorker = async () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });
      console.log('SW registered successfully:', registration.scope);
      return registration;
    } catch (error) {
      console.error('SW registration failed:', error);
      throw error;
    }
  }
};

export const unregisterServiceWorker = async () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
    }
  }
};
