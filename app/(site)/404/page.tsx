import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-onyx flex flex-col items-center justify-center p-8 text-center relative selection:bg-navy selection:text-white">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" />
      
      <div className="relative z-10 max-w-md">
        <h1 className="text-8xl font-mono text-onyx/20 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-onyx">Page Not Found</h2>
        <p className="text-slate text-sm leading-relaxed mb-8 border-l border-gray-100 pl-4 text-left">
          The architectural node or strategic layer you are looking for does not exist or has been restructured.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-2.5 border border-onyx text-xs uppercase tracking-widest font-mono text-onyx hover:bg-onyx hover:text-white transition-all duration-300 ease-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
