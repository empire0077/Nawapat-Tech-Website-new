'use client';

import { FadeIn } from '@/components/FadeIn';
import { Parallax } from '@/components/Parallax';
import { DataNodes } from '@/components/DataNodes';
import { BookOpen, BrainCircuit, Activity, Network, Layers, GraduationCap } from 'lucide-react';

export default function ArchitectPage() {
  return (
    <main className="min-h-screen bg-white text-onyx pt-24 pb-20 overflow-hidden selection:bg-navy selection:text-white">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] blueprint-grid z-0" />
      
      {/* SECTION 1: Executive Hero */}
      <section className="relative z-10 pt-20 pb-32 px-8 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full order-2 lg:order-1">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-onyx mb-4">
                Dr. Nawapat Thamchob
              </h1>
              <h2 className="text-xl md:text-2xl text-slate mb-8 tracking-wide">
                Senior Enterprise Architect & AI Strategist
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base md:text-lg text-slate leading-relaxed mb-10 max-w-xl border-l-2 border-gray-100 pl-6">
                &quot;เชื่อมโยงมิติของเทคโนโลยี ธุรกิจ และการสื่อสาร เพื่อสถาปนาระบบนิเวศดิจิทัลระดับองค์กร&quot;
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm font-medium text-slate/80 tracking-wide">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-onyx" />
                  <span>Ph.D. in Communication Arts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-onyx" />
                  <span>MBA in Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-onyx" />
                  <span>B.B.A. in Computer & Finance</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <FadeIn delay={0.3} direction="left" className="w-full max-w-md">
               <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-lg border border-gray-100 shadow-sm overflow-hidden group flex items-center justify-center">
                  <DataNodes />
                  <img 
                    src="/นวภัทร์ ธรรมชอบ 02.png" 
                    alt="Dr. Nawapat Thamchob" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg z-20" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-slate/40 text-sm tracking-widest font-mono uppercase z-10">Portrait Placeholder</span>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: Enterprise Transformations */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-slate-50 border-y border-gray-100 relative z-10">
        <div className="max-w-screen-2xl mx-auto">
          <Parallax offset={15}>
            <FadeIn>
              <h2 className="text-3xl font-medium tracking-tight mb-16 text-onyx">Enterprise Transformations</h2>
            </FadeIn>
          </Parallax>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group relative flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center mb-8 border border-gray-100 bg-slate-50 group-hover:border-onyx/20 transition-colors duration-300">
                  <Activity className="w-4 h-4 text-slate group-hover:text-onyx transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-onyx tracking-tight">RPA Center of Excellence</h3>
                <p className="text-slate text-sm leading-relaxed flex-grow">วางแผนแม่บทและสร้างระบบอัตโนมัติกว่า 20 ระบบ ลดภาระงานกว่า 300 ชั่วโมง/ปี</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group relative flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center mb-8 border border-gray-100 bg-slate-50 group-hover:border-onyx/20 transition-colors duration-300">
                  <BrainCircuit className="w-4 h-4 text-slate group-hover:text-onyx transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-onyx tracking-tight">AI Prompt Management</h3>
                <p className="text-slate text-sm leading-relaxed flex-grow">พัฒนาแพลตฟอร์มคลังองค์ความรู้ Prompt ส่วนกลางระดับองค์กร</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group relative flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center mb-8 border border-gray-100 bg-slate-50 group-hover:border-onyx/20 transition-colors duration-300">
                  <Network className="w-4 h-4 text-slate group-hover:text-onyx transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-onyx tracking-tight">SCADA & SAP Automation</h3>
                <p className="text-slate text-sm leading-relaxed flex-grow">วางสถาปัตยกรรมท่อส่งข้อมูล SCADA อัตโนมัติและระบบ SAP แบบบูรณาการ</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="h-full">
              <div className="h-full bg-white p-10 md:p-12 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group relative flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center mb-8 border border-gray-100 bg-slate-50 group-hover:border-onyx/20 transition-colors duration-300">
                  <Layers className="w-4 h-4 text-slate group-hover:text-onyx transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-onyx tracking-tight">Competency 360 System</h3>
                <p className="text-slate text-sm leading-relaxed flex-grow">พัฒนาระบบประเมินสมรรถนะองค์กรดิจิทัล 100% ลดเวลาจาก 2 สัปดาห์เหลือ 2 วัน</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3: Thought Leadership & Publications */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <Parallax offset={10}>
              <FadeIn>
                <h2 className="text-3xl font-medium tracking-tight text-onyx mb-6">Thought Leadership & Publications</h2>
                <div className="w-12 h-1 bg-onyx/10 mb-8" />
              </FadeIn>
            </Parallax>
          </div>
          <div className="md:w-2/3">
            <div className="flex flex-col space-y-12">
              <FadeIn delay={0.1}>
                <div className="relative pl-8 md:pl-12 border-l border-gray-100">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-white border-2 border-onyx rounded-full" />
                  <span className="text-xs font-mono text-slate uppercase tracking-widest block mb-2">Book Publication</span>
                  <h3 className="text-lg font-medium text-onyx mb-2">The Practical Guide to Building AI within Business Process</h3>
                  <p className="text-slate text-sm">ประยุกต์ใช้กรอบการทำงาน 5 มิติ</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="relative pl-8 md:pl-12 border-l border-gray-100">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-white border-2 border-onyx/30 rounded-full" />
                  <span className="text-xs font-mono text-slate uppercase tracking-widest block mb-2">Research Article</span>
                  <h3 className="text-lg font-medium text-onyx mb-2">การเปลี่ยนเป็นทำงานแบบดิจิทัลด้วยเทคโนโลยี RPA</h3>
                  <p className="text-slate text-sm">PEACON & Innovation</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative pl-8 md:pl-12 border-l border-gray-100">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-white border-2 border-onyx/30 rounded-full" />
                  <span className="text-xs font-mono text-slate uppercase tracking-widest block mb-2">Research Article</span>
                  <h3 className="text-lg font-medium text-onyx mb-2">Determining Distribution Centers Locations Using Weighted K-Means Clustering</h3>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Capacity Building */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-slate-50 relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Parallax offset={15}>
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-onyx">
                Advanced Specialized Courses<br/>
                <span className="text-xl text-slate font-normal mt-2 block">(หลักสูตรเฉพาะทางขั้นสูง)</span>
              </h2>
            </FadeIn>
          </Parallax>
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg text-slate leading-relaxed">
              ผู้ออกแบบและบรรยายหลักสูตรเฉพาะทางขั้นสูงด้าน Artificial Intelligence (มากกว่า 50 รุ่น) และ Automation (มากกว่า 40 รุ่น) ขับเคลื่อนศักยภาพบุคลากรระดับประเทศ
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
