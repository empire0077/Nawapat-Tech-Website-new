'use client';

export function DataNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="data-nodes" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-navy/15" />
          <path d="M2 2 L24 24" stroke="currentColor" className="text-navy/5" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#data-nodes)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/[0.04] to-transparent animate-scan" />
    </div>
  );
}
