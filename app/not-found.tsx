import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-onyx flex flex-col items-center justify-center p-8 text-center relative selection:bg-navy selection:text-white pt-24" id="not-found-container">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" id="blueprint-grid-overlay" />
      
      <div className="relative z-10 max-w-md" id="not-found-content">
        <h1 className="text-8xl font-mono text-onyx/20 mb-4 tracking-tighter" id="not-found-title">404</h1>
        
        {/* English Section */}
        <div className="mb-6 text-left" id="not-found-en-section">
          <h2 className="text-xl font-medium tracking-tight mb-2 text-onyx" id="not-found-en-heading">
            Page Not Found
          </h2>
          <p className="text-slate text-sm leading-relaxed border-l border-gray-100 pl-4" id="not-found-en-desc">
            The architectural node or strategic layer you are looking for does not exist or has been restructured.
          </p>
        </div>

        {/* Thai Section */}
        <div className="mb-8 text-left" id="not-found-th-section">
          <h2 className="text-lg font-medium tracking-tight mb-2 text-onyx" id="not-found-th-heading">
            ไม่พบหน้าเว็บ
          </h2>
          <p className="text-slate text-sm leading-relaxed border-l border-gray-100 pl-4" id="not-found-th-desc">
            ไม่พบหน้านี้หรือระบบสถาปัตยกรรมระดับองค์กรที่พยายามเข้าถึงได้รับการปรับปรุงโครงสร้างใหม่
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-2.5 border border-onyx text-xs uppercase tracking-widest font-mono text-onyx hover:bg-onyx hover:text-white transition-all duration-300 ease-out cursor-pointer w-full sm:w-auto"
          id="not-found-home-link"
        >
          Return Home / กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}

