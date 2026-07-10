'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { FadeIn } from '@/components/FadeIn';
import { Parallax } from '@/components/Parallax';
import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  Network, 
  Database, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { KnowledgeExplorer } from '@/components/KnowledgeExplorer';
import { articles, generatePersonSchema } from '@/lib/articles';

export default function HomePage() {
  const { t, lang } = useLanguage();

  const absoluteArticles = articles.map(art => ({
    title: lang === 'th' ? art.titleTh : art.titleEn,
    url: `https://nawapat.tech/${art.category}/${art.slug}`
  }));
  const personSchema = generatePersonSchema(absoluteArticles);

  return (
    <main className="min-h-screen bg-white text-onyx pt-24 overflow-hidden selection:bg-navy selection:text-white">
      {/* Insert JSON-LD Person-centric Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" />

      {/* SECTION 1: HERO */}
      <section className="relative z-10 pt-24 pb-32 px-8 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-gray-100 rounded-full text-xs font-mono tracking-widest text-slate uppercase">
                <Sparkles className="w-3.5 h-3.5 text-onyx animate-pulse" />
                <span>Enterprise Architecture Evolution</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-onyx">
                {t.hero.headlineP1}
                <span className="block mt-2 text-slate-400 font-light font-sans">
                  {t.hero.headlineP2}
                </span>
                {t.hero.headlineHighlight && (
                  <span className="block mt-2 text-onyx underline decoration-1 underline-offset-8">
                    {t.hero.headlineHighlight}
                  </span>
                )}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-slate leading-relaxed max-w-2xl font-light">
                {t.hero.subHeadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#advisory"
                  className="inline-flex items-center justify-center px-8 py-4 bg-onyx text-white hover:bg-slate text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
                <Link
                  href="/architect"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 hover:border-onyx text-onyx hover:bg-slate-50 text-sm font-medium tracking-wider uppercase transition-all duration-300"
                >
                  {lang === 'th' ? 'รู้จักสถาปนิก' : 'Meet the Architect'}
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <FadeIn delay={0.4} direction="left" className="w-full max-w-md">
              <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-center relative group">
                <div className="absolute inset-0 opacity-[0.03] blueprint-grid" />
                {/* Visual architectural blueprint lines */}
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-200/50" />
                <div className="absolute top-2/4 left-0 right-0 h-px bg-gray-200/50" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-200/50" />
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-200/50" />
                <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gray-200/50" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-200/50" />
                
                {/* Portrait Image of the architect */}
                <Image 
                  src="/architect_portrait.svg" 
                  alt="Dr. Nawapat Thamchob" 
                  fill
                  priority
                  className="object-cover rounded-lg z-20" 
                  referrerPolicy="no-referrer"
                />

                <div className="p-12 space-y-6 z-10 relative">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-100 bg-white shadow-sm rounded-full">
                    <Cpu className="w-5 h-5 text-onyx animate-pulse" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-onyx font-sans">
                    {lang === 'th' ? 'สถาปัตยกรรมระดับองค์กรเชิงรับรู้' : 'Cognitive Enterprise Design'}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed font-light">
                    {t.hero.imagePlaceholder}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate tracking-widest">
                    <span>SYS_ACTIVE: TRUE</span>
                    <span>ENG_VER: 3.5</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PARADIGM SHIFT */}
      <section id="paradigm" className="py-32 px-8 md:px-16 lg:px-24 bg-slate-50 border-y border-gray-100 relative z-10">
        <div className="max-w-screen-2xl mx-auto">
          <Parallax offset={15}>
            <FadeIn className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate block mb-3">
                {t.paradigm.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-onyx mb-16">
                {t.paradigm.titleSub}
              </h2>
            </FadeIn>
          </Parallax>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* The Old World */}
            <FadeIn delay={0.1} className="space-y-8 bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-3 text-red-500 font-mono text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>{t.paradigm.oldWorld}</span>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-onyx flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate" />
                    {t.paradigm.staticIntel}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.paradigm.staticIntelDesc}
                  </p>
                </div>
                <hr className="border-gray-100" />
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-onyx flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-slate rotate-90" />
                    {t.paradigm.complexTax}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.paradigm.complexTaxDesc}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* The New World */}
            <FadeIn delay={0.2} className="space-y-8 bg-white p-10 md:p-12 border border-onyx/20 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
              <div className="flex items-center space-x-3 text-emerald-600 font-mono text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>{t.paradigm.newWorld}</span>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-onyx flex items-center gap-2">
                    <Network className="w-4 h-4 text-emerald-600" />
                    {t.paradigm.livingAssets}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.paradigm.livingAssetsDesc}
                  </p>
                </div>
                <hr className="border-gray-100" />
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-onyx flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    {t.paradigm.scalableJudge}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.paradigm.scalableJudgeDesc}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3: KNOWLEDGE EXPLORER (INTEGRATING ALL 27 KNOWLEDGE TREE NODES) */}
      <KnowledgeExplorer />


      {/* SECTION 4: SHOWCASE */}
      <section id="showcase" className="py-32 px-8 md:px-16 lg:px-24 bg-slate-50 border-t border-gray-100 relative z-10">
        <div className="max-w-screen-2xl mx-auto">
          <Parallax offset={15}>
            <FadeIn className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-slate block mb-3">
                Applied Innovations
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-onyx">
                {t.showcase.title}
              </h2>
            </FadeIn>
          </Parallax>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Showcase 1 */}
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-100 bg-slate-50">
                    <Database className="w-4 h-4 text-slate" />
                  </div>
                  <h3 className="text-xl font-medium text-onyx tracking-tight">
                    {t.showcase.s1Title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.showcase.s1Desc}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate">
                  <span>TELEMETRY SCALING</span>
                  <span className="text-emerald-600 font-semibold">DEPLOYED</span>
                </div>
              </div>
            </FadeIn>

            {/* Showcase 2 */}
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-100 bg-slate-50">
                    <Network className="w-4 h-4 text-slate" />
                  </div>
                  <h3 className="text-xl font-medium text-onyx tracking-tight">
                    {t.showcase.s2Title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {t.showcase.s2Desc}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate">
                  <span>SELF-HEALING SEMANTICS</span>
                  <span className="text-emerald-600 font-semibold">DEPLOYED</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Link
              href="#advisory"
              className="inline-flex items-center text-xs uppercase tracking-widest font-mono text-onyx hover:text-slate border-b border-onyx pb-1 transition-all duration-300"
            >
              <span>{t.showcase.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 inline" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: ADVISORY */}
      <section id="advisory" className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.01] blueprint-grid z-0" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <FadeIn>
            <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gray-100 bg-slate-50 rounded-full mb-8">
              <ShieldCheck className="w-6 h-6 text-onyx" />
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-onyx max-w-2xl mx-auto leading-tight">
              {t.advisory.title}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-slate text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              {lang === 'th' 
                ? 'ร่วมสนทนากลยุทธ์เพื่อปรับสถาปัตยกรรมระดับองค์กรของคุณให้ตอบรับกับอนาคต AI แบบไร้รอยต่อ' 
                : 'Initiate a direct dialogue with Dr. Nawapat Thamchob to design an intelligent, high-resiliency digital footprint for your enterprise.'}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href="mailto:nawapat@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-onyx text-white hover:bg-slate text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>{t.advisory.cta}</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
