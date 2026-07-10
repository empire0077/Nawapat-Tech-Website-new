'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { Logo } from './Logo';

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-500">
      <div className="max-w-screen-2xl mx-auto py-6 px-8 md:px-16 lg:px-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Home">
          <Logo className="text-onyx" />
        </Link>
        <div className="flex items-center space-x-8 md:space-x-12 text-sm font-medium tracking-wide">
          <Link href="/architect" className={`hidden md:block var-font-anim ${pathname === '/architect' ? 'text-onyx border-b border-onyx pb-0.5' : 'text-slate hover:text-onyx'}`}>The Architect</Link>
          <Link href="/#paradigm" className="hidden md:block var-font-anim text-slate hover:text-onyx">{t.nav.philosophy}</Link>
          <Link href="/#knowledge-network" className="hidden md:block var-font-anim text-slate hover:text-onyx">{t.nav.frameworks}</Link>
          <Link href="/#showcase" className="hidden md:block var-font-anim text-slate hover:text-onyx">{t.nav.labs}</Link>
          <Link href="/#advisory" className="var-font-anim text-slate hover:text-onyx">{t.nav.advisory}</Link>
          <div className="flex items-center space-x-4 border-l border-gray-300/60 pl-8 text-xs tracking-widest">
            <button onClick={() => setLang('th')} className={`var-font-anim ${lang === 'th' ? 'text-onyx font-semibold' : 'text-slate hover:text-onyx'}`}>TH</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLang('en')} className={`var-font-anim ${lang === 'en' ? 'text-onyx font-semibold' : 'text-slate hover:text-onyx'}`}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
