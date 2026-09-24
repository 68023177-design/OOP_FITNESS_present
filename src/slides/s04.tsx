import { Slide } from '../components/Slide';
import { ClassDiagram } from '../components/ClassDiagram';

const STATS = [
  { v: '11', l: 'คลาสทั้งหมด' },
  { v: '2', l: 'สายสืบทอด' },
  { v: '1', l: 'Composition (has-a)' },
];

export function S04ClassDiagram() {
  return (
    <Slide
      badge="เกณฑ์ที่ 2 — จำนวนคลาส ≥ 5"
      title="Class Diagram — 11 คลาส · สายสืบทอด 2 สาย"
      subtitle="แบ่งหน้าที่ชัดเจน ซ่อนข้อมูลในแต่ละคลาส และเชื่อมสมาชิกกับแพ็กเกจแบบ Composition"
    >
      <div className="mb-4 flex flex-wrap gap-3">
        {STATS.map((s) => (
          <div key={s.l} className="rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-2 text-center">
            <p className="text-2xl font-black text-emerald-400">{s.v}</p>
            <p className="text-xs text-slate-400">{s.l}</p>
          </div>
        ))}
      </div>
      <ClassDiagram />
    </Slide>
  );
}