'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white text-onyx flex flex-col items-center justify-center p-8 text-center relative selection:bg-navy selection:text-white">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" />
      
      <div className="relative z-10 max-w-md">
        <h1 className="text-8xl font-mono text-onyx/20 mb-4 tracking-tighter">ERROR</h1>
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-onyx">System Exception</h2>
        <p className="text-slate text-sm leading-relaxed mb-8 border-l border-gray-100 pl-4 text-left">
          An unexpected interruption occurred in the application layer. Please reset the system or contact administration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-2.5 border border-onyx bg-onyx text-xs uppercase tracking-widest font-mono text-white hover:bg-white hover:text-onyx transition-all duration-300 ease-out cursor-pointer"
          >
            Reset App
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 text-xs uppercase tracking-widest font-mono text-slate hover:text-onyx hover:border-onyx transition-all duration-300 ease-out"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
