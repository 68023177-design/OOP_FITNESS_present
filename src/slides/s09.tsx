import { Slide } from '../components/Slide';

const PATTERNS = [
  {
    name: 'Singleton',
    file: 'services/FitnessCenterService.ts',
    code: 'static getInstance(): FitnessCenterService { ... }',
    desc: 'Service กลางเพียงตัวเดียว ทุกหน้าจอใช้ข้อมูลชุดเดียวกัน',
  },
  {
    name: 'Facade',
    file: 'services/FitnessCenterService.ts',
    code: 'svc.addMember(...) · svc.checkIn(...) · svc.resolveIssue(...)',
    desc: 'UI เรียกเมธอดง่าย ๆ หนึ่งบรรทัด ไม่ต้องรู้โครงสร้างข้อมูลภายใน',
  },
  {
    name: 'Generic Repository',
    file: 'services/Repository.ts',
    code: 'new Repository<Member>(key, hydrate)',
    desc: 'class เดียวใช้กับข้อมูลทุกชนิด โหลด/บันทึก localStorage ผ่าน Generics',
  },
  {
    name: 'Factory Method',
    file: 'models/factories.ts',
    code: 'createMember(kind, data) → Member',
    desc: 'จุดเดียวที่ตัดสินใจสร้างคลาสลูก หลีกเลี่ยงวงรอบ import ที่ทำให้ crash',
  },
];

export function S09Patterns() {
  return (
    <Slide
      badge="Design Patterns ประยุกต์"
      title="เมื่อ OOP รวมกับ Pattern ที่ใช้จริง"
      subtitle="เขียนให้เข้าใจง่าย พร้อมอธิบายได้หน้าห้อง"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PATTERNS.map((p) => (
          <div key={p.name} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-teal-300">{p.name}</span>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] text-slate-400">{p.file}</span>
            </div>
            <p className="mt-3 font-mono text-xs text-slate-300">{p.code}</p>
            <p className="mt-3 text-sm text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-2xl border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-sm text-teal-100">
        ทำไมต้องแยก <span className="font-mono">factories.ts</span>? — การ import คลาสลูกจากคลาสแม่ทำให้เกิดวงรอบ
        (circular dependency) ที่ crash ตอน runtime จึงย้ายจุด "เลือกคลาสลูก" มาอยู่ที่ factory
      </p>
    </Slide>
  );
}