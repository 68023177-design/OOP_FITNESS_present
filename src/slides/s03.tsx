import { Slide } from '../components/Slide';

const TREE = `src/
├─ models/        คลาส OOP ทั้งหมด (11 คลาส) + factory + enums
│  ├─ Person.ts · Member.ts
│  ├─ StudentMember.ts · ExternalMember.ts
│  ├─ Package.ts · DailyPackage.ts · MonthlyPackage.ts
│  ├─ Payment.ts · Visit.ts · Trainer.ts · IssueReport.ts
│  └─ factories.ts · enums.ts
├─ services/      FitnessCenterService (Singleton + Facade)
│                 Repository<T> (โหลด/บันทึก localStorage)
├─ hooks/         useFitness.ts — เชื่อม React → Service
├─ pages/         UI 7 หน้า (Dashboard · Members · Packages · ...
│                 Payments · Visits · Trainers · Issues)
└─ utils/         จัดรูปแบบวันที่ เงิน และข้อความภาษาไทย`;

const LAYERS = [
  { name: 'models/', desc: 'โค้ด OOP หลัก 4 ข้อ — ทุกคลาสซ่อนข้อมูลไว้ในตัว' },
  { name: 'services/', desc: 'จุดควบคุมกลาง หนึ่งเดียว (Singleton) + Repository เก็บข้อมูล' },
  { name: 'pages + hooks/', desc: 'UI เรียกเมธอดของ Service เท่านั้น ไม่แตะข้อมูลตรง ๆ' },
];

export function S03Structure() {
  return (
    <Slide
      badge="สถาปัตยกรรม"
      title="โครงการ 3 ชั้น — Model · Service · UI"
      subtitle="แยกความรับผิดชอบชัดเจน พร้อมอธิบายหลักการ OOP ที่แทรกอยู่ทุกชั้น"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 p-5 font-mono text-[13px] leading-7 text-slate-300 shadow-lg">
          {TREE}
        </pre>
        <div className="flex flex-col justify-center gap-4">
          {LAYERS.map((l) => (
            <div key={l.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="font-mono text-sm font-bold text-emerald-300">{l.name}</p>
              <p className="mt-1 text-sm text-slate-400">{l.desc}</p>
            </div>
          ))}
          <p className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            UI ไม่รู้ว่าข้อมูลเก็บอยู่ที่ไหน — สื่อสารผ่าน{' '}
            <span className="font-mono text-amber-200">FitnessCenterService</span> เท่านั้น (หลักการ Facade)
          </p>
        </div>
      </div>
    </Slide>
  );
}