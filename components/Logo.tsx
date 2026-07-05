'use client';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`w-8 h-8 md:w-9 md:h-9 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-180 group-hover:drop-shadow-[0_0_12px_rgba(26,26,26,0.15)] ${className}`} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter">
        {/* Abstract precise 'N' */}
        <path d="M11 23V9L21 23V9" />
        
        {/* Architectural extension lines */}
        <path d="M3 9H11" strokeWidth="1" opacity="0.3" />
        <path d="M21 23H29" strokeWidth="1" opacity="0.3" />
        <path d="M11 23H3" strokeWidth="1" opacity="0.3" />
        <path d="M29 9H21" strokeWidth="1" opacity="0.3" />

        {/* Primary connectivity nodes */}
        <circle cx="11" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="21" cy="23" r="1.5" fill="currentColor" stroke="none" />
        
        {/* Secondary connectivity nodes */}
        <circle cx="11" cy="23" r="1.2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="21" cy="9" r="1.2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
}
