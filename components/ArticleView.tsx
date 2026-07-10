'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { Article, articles, generateArticleSchema } from '@/lib/articles';
import { 
  ArrowLeft, 
  ArrowRight, 
  Link2, 
  Network, 
  Award,
  ChevronRight
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
}

export function ArticleView({ article }: ArticleViewProps) {
  const { lang } = useLanguage();
  const currentUrl = `https://nawapat.tech/${article.category}/${article.slug}`;
  const schemaJson = generateArticleSchema(article, currentUrl);

  const title = lang === 'th' ? article.titleTh : article.titleEn;
  const excerpt = lang === 'th' ? article.excerptTh : article.excerptEn;
  const sections = lang === 'th' ? article.sectionsTh : article.sectionsEn;
  const subCategory = lang === 'th' ? article.subCategory.th : article.subCategory.en;

  // Let's find related articles to show in the sidebar/footer
  const relatedArticles = articles.filter(art => 
    article.relatedSlugs.includes(art.slug)
  );

  return (
    <main className="min-h-screen bg-white text-onyx pt-28 pb-24 selection:bg-navy selection:text-white relative">
      {/* Insert JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.01] blueprint-grid z-0" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-xs font-mono text-slate tracking-wider">
          <Link href="/" className="hover:text-onyx transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="uppercase">{article.category.replace('-', ' ')}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-onyx font-medium truncate max-w-[200px] sm:max-w-none">{article.slug.toUpperCase()}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: MAIN EDITORIAL CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Block */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-gray-100 rounded-full text-[10px] font-mono tracking-widest text-slate uppercase">
                <Network className="w-3 h-3 text-onyx" />
                <span>{subCategory}</span>
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-onyx leading-[1.15]">
                {title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate leading-relaxed font-light border-l-2 border-onyx/20 pl-4">
                {excerpt}
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Rich Sections */}
            <div className="space-y-10">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-onyx">
                    {section.heading}
                  </h2>
                  <p className="text-slate text-sm sm:text-base leading-relaxed font-light text-justify">
                    {section.body}
                  </p>
                  
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-2">
                      {section.bullets.map((bullet, bIdx) => {
                        const parts = bullet.split(':');
                        return (
                          <li key={bIdx} className="flex items-start text-xs sm:text-sm text-slate leading-relaxed font-light">
                            <span className="text-onyx mr-2.5 mt-1.5 select-none font-mono text-[9px]">▪</span>
                            <div>
                              {parts.length > 1 ? (
                                <>
                                  <strong className="font-medium text-onyx">{parts[0]}:</strong>
                                  {parts.slice(1).join(':')}
                                </>
                              ) : (
                                bullet
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* AUTHOR ATTRIBUTION LINKING (Two-Way Schema.org linkage) */}
            <div className="bg-slate-50 border border-gray-100 p-8 rounded-lg mt-12 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-onyx text-white flex items-center justify-center font-mono text-xs font-semibold shrink-0">
                  NT
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-slate tracking-wider">AUTHOR & STRATEGIST</p>
                  <h4 className="text-sm font-semibold text-onyx">
                    <a href="https://nawapat.tech/#person" className="hover:underline hover:text-navy transition-colors">
                      Nawapat Thamchob
                    </a>
                  </h4>
                  <p className="text-xs text-slate font-light leading-relaxed">
                    {lang === 'th'
                      ? 'สถาปนิกเทคโนโลยีและนักยุทธศาสตร์ AI ระดับสากล ผู้ขับเคลื่อนโครงการปฏิรูปดิจิทัลและสถาปัตยกรรมอัจฉริยะระดับประเทศ'
                      : 'Enterprise Architect specializing in Cognitive Systems, AI Governance, and High-Resiliency Infrastructure.'}
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200/50 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-slate">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-onyx" />
                  <span>Verified Identity: 100% human authored</span>
                </span>
                <a 
                  href="https://nawapat.tech/#person" 
                  className="flex items-center gap-1 hover:text-onyx text-slate transition-colors"
                >
                  <Link2 className="w-3.5 h-3.5 text-onyx" />
                  <span>https://nawapat.tech/#person</span>
                </a>
              </div>
            </div>

            {/* PATHWAY PROGRESSION (Connected Knowledge Flow) */}
            <div className="pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-6">
              
              {/* Previous Node */}
              {article.prevSlug ? (
                <Link 
                  href={article.prevSlug.includes('/') ? `/${article.prevSlug}` : `/${article.category}/${article.prevSlug}`}
                  className="group flex flex-col p-5 border border-gray-100 hover:border-onyx/20 rounded-lg hover:bg-slate-50 transition-all duration-300 text-left"
                >
                  <span className="text-[10px] font-mono tracking-widest text-slate mb-1 flex items-center gap-1 uppercase">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    {lang === 'th' ? 'โหนดก่อนหน้า' : 'PREVIOUS NODE'}
                  </span>
                  <span className="text-sm font-medium text-onyx truncate group-hover:text-navy transition-colors">
                    {lang === 'th' ? article.prevTitle.th : article.prevTitle.en}
                  </span>
                </Link>
              ) : (
                <div className="p-5 border border-gray-100/40 rounded-lg opacity-40">
                  <span className="text-[10px] font-mono tracking-widest text-slate block mb-1">ENTRYPOINT NODE</span>
                  <span className="text-sm font-medium text-onyx">Root System</span>
                </div>
              )}

              {/* Next Node */}
              {article.nextSlug ? (
                <Link 
                  href={article.nextSlug.includes('/') ? `/${article.nextSlug}` : `/${article.category}/${article.nextSlug}`}
                  className="group flex flex-col p-5 border border-gray-100 hover:border-onyx/20 rounded-lg hover:bg-slate-50 transition-all duration-300 text-right items-end"
                >
                  <span className="text-[10px] font-mono tracking-widest text-slate mb-1 flex items-center gap-1 uppercase">
                    {lang === 'th' ? 'โหนดถัดไป' : 'NEXT NODE'}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm font-medium text-onyx truncate group-hover:text-navy transition-colors">
                    {lang === 'th' ? article.nextTitle.th : article.nextTitle.en}
                  </span>
                </Link>
              ) : (
                <div className="p-5 border border-gray-100/40 rounded-lg opacity-40 text-right">
                  <span className="text-[10px] font-mono tracking-widest text-slate block mb-1">TERMINAL NODE</span>
                  <span className="text-sm font-medium text-onyx">End of Flow</span>
                </div>
              )}

            </div>

          </div>

          {/* RIGHT: KNOWLEDGE NETWORK GRAPH WIDGET (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            
            {/* Interactive Visual Graph Component */}
            <div className="bg-slate-50 border border-gray-100 p-6 rounded-lg space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-navy/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between text-xs font-mono tracking-wider text-slate">
                <span className="flex items-center gap-1">
                  <Network className="w-3.5 h-3.5 text-onyx" />
                  <span>KNOWLEDGE NETWORK</span>
                </span>
                <span className="text-[9px] bg-onyx/5 px-2 py-0.5 rounded text-onyx font-semibold">ACTIVE</span>
              </div>
              
              <h3 className="text-sm font-semibold text-onyx">
                {lang === 'th' ? 'ตำแหน่งโหนดความรู้ปัจจุบัน' : 'Current Node Position'}
              </h3>

              {/* Mini Interactive Map representation */}
              <div className="h-44 bg-white border border-gray-100 rounded-md relative flex items-center justify-center p-3 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] blueprint-grid" />
                
                {/* Simulated connection lines */}
                <svg className="absolute inset-0 w-full h-full text-slate-200" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                  <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                </svg>

                {/* Left (Prev) */}
                {article.prevSlug && (
                  <Link
                    href={article.prevSlug.includes('/') ? `/${article.prevSlug}` : `/${article.category}/${article.prevSlug}`}
                    className="absolute left-2 text-[9px] font-mono px-1.5 py-1 bg-white border border-gray-100 hover:border-onyx rounded text-slate hover:text-onyx transition-all duration-300 max-w-[70px] truncate"
                    title={article.prevSlug}
                  >
                    ← {article.prevSlug.split('/').pop()}
                  </Link>
                )}

                {/* Center (Current) */}
                <div className="absolute z-10 p-2.5 bg-onyx text-white border border-onyx shadow-md rounded text-[10px] font-mono font-bold max-w-[100px] truncate text-center scale-105 animate-pulse">
                  ⚡ {article.slug.toUpperCase()}
                </div>

                {/* Right (Next) */}
                {article.nextSlug && (
                  <Link
                    href={article.nextSlug.includes('/') ? `/${article.nextSlug}` : `/${article.category}/${article.nextSlug}`}
                    className="absolute right-2 text-[9px] font-mono px-1.5 py-1 bg-white border border-gray-100 hover:border-onyx rounded text-slate hover:text-onyx transition-all duration-300 max-w-[70px] truncate"
                    title={article.nextSlug}
                  >
                    {article.nextSlug.split('/').pop()} →
                  </Link>
                )}

                {/* Meta-text overlay */}
                <div className="absolute bottom-1 left-2 text-[8px] font-mono text-slate-400">
                  REF_ID: #{article.slug.substring(0,6).toUpperCase()}
                </div>
              </div>

              <p className="text-xs text-slate leading-relaxed font-light">
                {lang === 'th'
                  ? 'บทความนี้เป็นส่วนหนึ่งของระบบเครือข่ายองค์ความรู้ความเชื่อมโยง เพื่อปูรากฐานจากสถาปัตยกรรมธุรกิจสู่ระบบตัดสินใจอิสระ'
                  : 'This article operates as an interconnected node, tracing pathways from base architectures up to autonomous intelligent services.'}
              </p>
            </div>

            {/* Related/Connected Nodes List */}
            {relatedArticles.length > 0 && (
              <div className="border border-gray-100 p-6 rounded-lg space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-slate block uppercase">
                  {lang === 'th' ? 'โหนดอ้างอิงที่เชื่อมโยง' : 'CONNECTED REFERENCE NODES'}
                </span>
                
                <div className="space-y-3">
                  {relatedArticles.map((relArt) => {
                    const relTitle = lang === 'th' ? relArt.titleTh : relArt.titleEn;
                    return (
                      <Link
                        key={relArt.slug}
                        href={`/${relArt.category}/${relArt.slug}`}
                        className="block group p-3 border border-transparent hover:border-gray-100 hover:bg-slate-50 transition-all duration-300 rounded"
                      >
                        <p className="text-[9px] font-mono text-slate uppercase">{relArt.category.replace('-', ' ')}</p>
                        <h4 className="text-xs font-medium text-onyx group-hover:text-navy transition-colors truncate mt-0.5">
                          {relTitle}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Search Engine Insight info */}
            <div className="border border-gray-100/50 p-6 rounded-lg text-slate bg-slate-50/30">
              <span className="text-[9px] font-mono tracking-widest text-slate block uppercase mb-2">KNOWLEDGE GRAPH METRICS</span>
              <p className="text-[11px] font-light leading-relaxed">
                {lang === 'th'
                  ? 'ขับเคลื่อนด้วย Schema.org JSON-LD (TechArticle) เพื่อให้บ็อทค้นหาและระบบปัญญาประดิษฐ์มองเห็นเว็บนี้เป็นโครงข่ายความรู้ของผู้เชี่ยวชาญระดับสากล'
                  : 'Structured via custom Schema.org metadata to present this site as a validated expert knowledge base to advanced search bots and agent indices.'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
