'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Logo } from './Logo';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white border-t border-gray-100 py-16 px-8 md:px-16 lg:px-24 relative z-10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-3">
          <Logo className="text-onyx" />
          <span className="text-sm font-medium tracking-wider text-onyx font-sans">Nawapat Tech</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-slate text-xs font-mono tracking-wider">
            © {currentYear} Nawapat Tech. {t.advisory.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
