import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6 text-right" dir="rtl">
          <div className="max-w-lg w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-500 flex items-center justify-center text-xl font-bold">
                ⚠️
              </span>
              <div>
                <h2 className="text-base font-black text-white">خطا در بارگذاری سامانه</h2>
                <p className="text-xs text-zinc-400">یک خطای غیرمنتظره در اجرای برنامه رخ داده است.</p>
              </div>
            </div>
            <pre className="p-3 bg-zinc-900 rounded-xl text-xs font-mono text-orange-400 overflow-x-auto whitespace-pre-wrap">
              {this.state.error?.message || 'Unknown error'}
            </pre>
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                بارگذاری مجدد صفحه
              </button>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                }}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-xl transition-colors"
              >
                تلاش مجدد
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
