'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { registerServiceWorker } from '@/lib/pwa-runtime';

interface EnterpriseContextType {
  isInitialized: boolean;
  error: Error | null;
}

const EnterpriseContext = createContext<EnterpriseContextType | undefined>(undefined);

export function EnterpriseProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await registerServiceWorker();
        setIsInitialized(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Initialization failed'));
      }
    };
    init();
  }, []);

  return (
    <EnterpriseContext.Provider value={{ isInitialized, error }}>
      {children}
    </EnterpriseContext.Provider>
  );
}

export const useEnterprise = () => {
  const context = useContext(EnterpriseContext);
  if (context === undefined) {
    throw new Error('useEnterprise must be used within an EnterpriseProvider');
  }
  return context;
};
