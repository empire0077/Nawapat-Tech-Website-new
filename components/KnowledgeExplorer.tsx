'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { articles } from '@/lib/articles';
import { 
  Network, 
  Layers, 
  Cpu, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Workflow, 
  Grid, 
  Sliders
} from 'lucide-react';

export function KnowledgeExplorer() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'layers' | 'pathway'>('layers');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Filter articles by category
  const getCategoryArticles = (cat: string) => articles.filter(a => a.category === cat);

  const categories = [
    {
      id: 'enterprise-architecture',
      icon: Layers,
      titleEn: 'Enterprise Architecture',
      titleTh: 'โครงสร้างสถาปัตยกรรมองค์กร (Knowledge Tree)',
      descEn: 'The structural core of the enterprise, defining capabilities, data, systems, and security matrices.',
      descTh: 'รากฐานสถาปัตยกรรมระดับองค์กรที่ควบคุม ทิศทางธุรกิจ เทคโนโลยี ข้อมูล และความปลอดภัยแบบบูรณาการ',
      color: 'border-slate-300 hover:border-slate-800 text-slate-800 bg-slate-50/50',
      badge: 'THE CORE TREE'
    },
    {
      id: 'frameworks',
      icon: Sliders,
      titleEn: 'Strategic Frameworks',
      titleTh: 'กรอบกลยุทธ์การตัดสินใจ (Frameworks)',
      descEn: 'Proprietary models for assessing feasibility, organizational speed, and predictive future states.',
      descTh: 'ตัวแบบสถาปัตยกรรมเพื่อประเมินความพร้อมเทคโนโลยี โครงสร้างพีระมิดปฏิบัติการ และการมองอนาคต',
      color: 'border-slate-300 hover:border-slate-800 text-slate-800 bg-slate-50/50',
      badge: 'METHODOLOGY'
    },
    {
      id: 'ai',
      icon: Cpu,
      titleEn: 'Artificial Intelligence Layer',
      titleTh: 'โครงข่ายปัญญาประดิษฐ์ประยุกต์ (AI)',
      descEn: 'Scaling machine intelligence securely from isolated prompts to autonomous multi-agent networks.',
      descTh: 'การยกระดับสมรรถนะปัญญาประดิษฐ์ ตั้งแต่ระบบปัญญาประดิษฐ์สร้างสรรค์ ไปจนถึงระบบตัวแทนอิสระ',
      color: 'border-slate-300 hover:border-slate-800 text-slate-800 bg-slate-50/50',
      badge: 'COGNITIVE LAYER'
    },
    {
      id: 'digital-transformation',
      icon: Globe,
      titleEn: 'Digital Transformation Layer',
      titleTh: 'โครงสร้างเปลี่ยนผ่านสู่ดิจิทัล (Transformation)',
      descEn: 'Translating cognitive technology into high-impact industries: government, utilities, and SCADA systems.',
      descTh: 'การนำเทคโนโลยีดิจิทัลและสมาร์ทกริดไปใช้จริงในภาคอุตสาหกรรม สาธารณูปโภค และงานบริการภาครัฐ',
      color: 'border-slate-300 hover:border-slate-800 text-slate-800 bg-slate-50/50',
      badge: 'TRANSFORMATION LAYER'
    }
  ];

  // Specific connected path requested by user:
  // Enterprise Architecture -> AI Architecture -> Enterprise AI -> Agentic AI -> AI Governance -> Digital Transformation -> Enterprise Systems
  const connectedPath = [
    { slug: 'business', cat: 'enterprise-architecture', titleEn: 'Business Architecture', titleTh: 'สถาปัตยกรรมธุรกิจ' },
    { slug: 'ai-architecture', cat: 'enterprise-architecture', titleEn: 'AI Architecture', titleTh: 'สถาปัตยกรรมปัญญาประดิษฐ์' },
    { slug: 'enterprise-ai', cat: 'ai', titleEn: 'Enterprise AI', titleTh: 'ปัญญาประดิษฐ์ระดับองค์กร' },
    { slug: 'agentic-ai', cat: 'ai', titleEn: 'Agentic AI', titleTh: 'ระบบตัวแทนอัจฉริยะ' },
    { slug: 'ai-governance', cat: 'ai', titleEn: 'AI Governance', titleTh: 'การกำกับดูแลปัญญาประดิษฐ์' },
    { slug: 'government', cat: 'digital-transformation', titleEn: 'Digital Transformation', titleTh: 'การเปลี่ยนผ่านสู่ดิจิทัล' },
    { slug: 'scada', cat: 'digital-transformation', titleEn: 'Enterprise Systems', titleTh: 'ระบบเครือข่ายอุตสาหกรรม' }
  ];

  return (
    <section id="knowledge-network" className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100 relative z-10 scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-gray-100 rounded-full text-xs font-mono tracking-widest text-slate uppercase">
              <Network className="w-3.5 h-3.5 text-onyx" />
              <span>Expert Knowledge Network</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-onyx">
              {lang === 'th' ? 'โครงข่ายความรู้สถาปัตยกรรมอัจฉริยะ' : 'Cognitive Knowledge Network'}
            </h2>
            <p className="text-slate text-sm sm:text-base font-light leading-relaxed">
              {lang === 'th'
                ? 'ระบบนิเวศความรู้องค์รวมที่มีชีวิต ทุกบทความถูกจัดตำแหน่งตามหลักวิชาชีพและเชื่อมต่อกันเป็นเครือข่ายใยแมงมุมเชิงความหมาย (Semantic Graph) เพื่อปูทางสู่ความชาญฉลาดในระดับเอ็นเตอร์ไพรส์'
                : 'A living, interconnected knowledge ecosystem. Every concept operates as a logical node mapped under professional guidelines, ensuring a semantic web of actionable enterprise architectures.'}
            </p>
          </div>

          {/* VIEW SWITCHER */}
          <div className="flex items-center bg-slate-50 border border-gray-100 p-1 rounded-md text-xs font-mono shrink-0">
            <button 
              onClick={() => setActiveTab('layers')}
              className={`flex items-center gap-1.5 px-4 py-2 transition-all duration-300 rounded ${activeTab === 'layers' ? 'bg-white text-onyx shadow-sm font-semibold' : 'text-slate hover:text-onyx'}`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'ดูแบบโครงสร้างเลเยอร์' : 'LAYERED VIEW'}</span>
            </button>
            <button 
              onClick={() => setActiveTab('pathway')}
              className={`flex items-center gap-1.5 px-4 py-2 transition-all duration-300 rounded ${activeTab === 'pathway' ? 'bg-white text-onyx shadow-sm font-semibold' : 'text-slate hover:text-onyx'}`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'ดูแบบแผนที่ทราเวอร์ส' : 'FLOW PATHWAY'}</span>
            </button>
          </div>
        </div>

        {/* INTERACTIVE VIEWS */}
        {activeTab === 'layers' ? (
          
          /* VIEW 1: BENTO GRID LAYERS EXPLOER */
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const catTitle = lang === 'th' ? cat.titleTh : cat.titleEn;
              const catDesc = lang === 'th' ? cat.descTh : cat.descEn;
              const catArticles = getCategoryArticles(cat.id);

              return (
                <div 
                  key={cat.id} 
                  className={`border p-8 sm:p-10 rounded-lg flex flex-col justify-between transition-all duration-500 hover:shadow-md ${cat.color}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 border border-gray-200/50 bg-white shadow-sm flex items-center justify-center rounded">
                        <CatIcon className="w-5 h-5 text-onyx" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-slate bg-white/60 border border-gray-100 px-2 py-0.5 rounded font-semibold">{cat.badge}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-medium text-onyx tracking-tight">
                        {catTitle}
                      </h3>
                      <p className="text-slate text-xs sm:text-sm leading-relaxed font-light">
                        {catDesc}
                      </p>
                    </div>

                    {/* Nodes within category */}
                    <div className="pt-4 flex flex-wrap gap-2.5">
                      {catArticles.map((art) => {
                        const artTitle = lang === 'th' 
                          ? art.titleTh.split(' (')[0] 
                          : art.titleEn;
                        const isHovered = hoveredNode === art.slug;

                        return (
                          <Link
                            key={art.slug}
                            href={`/${cat.id}/${art.slug}`}
                            onMouseEnter={() => setHoveredNode(art.slug)}
                            onMouseLeave={() => setHoveredNode(null)}
                            className={`px-3.5 py-1.5 text-xs font-mono rounded border transition-all duration-300 flex items-center gap-1.5 ${isHovered ? 'bg-onyx text-white border-onyx scale-105 shadow-sm' : 'bg-white text-slate border-gray-100 hover:border-onyx/30 hover:text-onyx'}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 group-hover:bg-onyx" />
                            <span>{artTitle}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-200/50 flex items-center justify-between text-[10px] font-mono text-slate">
                    <span>SYS_NODES: {catArticles.length}</span>
                    <span>RESTRICTED ACCESS</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          
          /* VIEW 2: LOGICAL PATHWAY MAP */
          <div className="bg-slate-50 border border-gray-100 rounded-lg p-8 sm:p-12 space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" />
            
            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-slate block uppercase">KNOWLEDGE HIGHWAY TRAVERSAL</span>
              <h3 className="text-xl sm:text-2xl font-medium text-onyx tracking-tight">
                {lang === 'th' ? 'แผนภูมิความเชื่อมโยงความรู้เชิงโครงสร้าง' : 'Logical Interconnection Pipeline'}
              </h3>
              <p className="text-slate text-xs sm:text-sm font-light leading-relaxed">
                {lang === 'th'
                  ? 'สัมผัสกระบวนทัศน์การสอดประสานความรู้ระดับองค์กรที่ไหลลื่นจากโครงสร้างระบบพื้นฐาน ไปจนถึงขีดความสามารถการตัดสินใจแบบอัตโนมัติที่ถูกต้องและเหมาะสมเชิงกฎหมาย'
                  : 'Trace the actual cognitive path. This interactive highway demonstrates how conceptual architecture flows organically into concrete smart operations and utilities control.'}
              </p>
            </div>

            {/* Visual connected highway nodes */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-7 gap-6 items-stretch pt-6">
              {connectedPath.map((node, index) => {
                const nodeTitle = lang === 'th' ? node.titleTh : node.titleEn;
                const isHovered = hoveredNode === node.slug;

                return (
                  <div key={node.slug} className="flex flex-col md:flex-row items-center gap-4 relative">
                    {/* Node Card */}
                    <Link
                      href={`/${node.cat}/${node.slug}`}
                      onMouseEnter={() => setHoveredNode(node.slug)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`flex-1 w-full text-center p-5 border rounded-lg flex flex-col justify-between h-44 transition-all duration-300 hover:-translate-y-1 relative ${isHovered ? 'bg-onyx text-white border-onyx shadow-md' : 'bg-white text-onyx border-gray-100 hover:border-onyx/20'}`}
                    >
                      <div>
                        <span className="text-[8px] font-mono tracking-wider text-slate uppercase block mb-3">NODE_0{index + 1}</span>
                        <h4 className="text-xs sm:text-sm font-semibold tracking-tight">{nodeTitle}</h4>
                      </div>
                      
                      <div className="text-[8px] font-mono text-slate-400 pt-4 flex items-center justify-center gap-1">
                        <span>EXPLORE</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </Link>

                    {/* Connecting arrow (not on last node) */}
                    {index < connectedPath.length - 1 && (
                      <div className="flex items-center justify-center text-slate-300 shrink-0 select-none">
                        {/* Desktop Arrow */}
                        <ArrowRight className="hidden md:block w-5 h-5 animate-pulse text-onyx" />
                        {/* Mobile Down Arrow */}
                        <div className="block md:hidden text-center py-2 text-onyx text-sm font-mono font-bold">↓</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Path info helper */}
            <div className="relative z-10 bg-white border border-gray-100 p-5 rounded flex items-center gap-3.5 text-xs text-slate">
              <Sparkles className="w-4 h-4 text-onyx shrink-0 animate-bounce" />
              <p className="font-light">
                {lang === 'th'
                  ? 'ข้อมูลเชิงวิชาการทุกโหนด ได้รับการรับรองและลิงก์ความสัมพันธ์ตามสัญศาสตร์ Schema.org สมบูรณ์แบบเพื่อเสิร์ฟการประมวลผลของ Web 3.0 และ AI Crawler'
                  : 'Every node in this pipeline has dynamic schema linkages established. This tells search engines exactly how these distinct layers interact and support each other.'}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
