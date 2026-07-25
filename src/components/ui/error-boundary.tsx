'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    void error;
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">Etwas ist schiefgelaufen.</h2>
          <button onClick={() => this.setState({ hasError: false })} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Erneut versuchen
          </button>
        </div>
      );
    }
    return this.children;
  }
}
