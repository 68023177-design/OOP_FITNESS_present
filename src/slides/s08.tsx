import { Slide } from '../components/Slide';
import { CodeBlock } from '../components/CodeBlock';

const CODE = `// src/models/MonthlyPackage.ts
private static readonly STUDENT_DISCOUNT = 0.2;

calcPrice(member: Member | null): number {
  if (member instanceof StudentMember) {
    return Math.round(this._basePrice * (1 - STUDENT_DISCOUNT));
  }
  return this._basePrice;
}

// src/models/factories.ts
export function createMember(
  kind: MemberKind,
  data: { id: string; name: string; phone: string; email: string },
): Member {
  if (kind === MemberKind.STUDENT) {
    return new StudentMember(
      data.id, data.name, data.phone, data.email,
      'MBR-001', '641111001', 'วิศวกรรมศาสตร์',
    );
  }
  return new ExternalMember(
    data.id, data.name, data.phone, data.email,
    'MBR-002', '1509900000011',
  );
}`;

const POINTS = [
  { t: 'method เดียว พฤติกรรมต่าง', d: 'calcPrice() → Daily คิดเต็ม / Monthly ลดนิสิต 20% (เช็ค instanceof)' },
  { t: 'override ตามชนิดจริง', d: 'getRoleLabel() วนซ้ำทีละ object ได้ผลลัพธ์ต่างกัน' },
  { t: 'Factory Method', d: 'createMember() สร้างคลาสลูกให้อัตโนมัติตาม MemberKind' },
  { t: 'clone()', d: 'แพ็กเกจถูกสำเนาเมื่อซื้อ เพื่อกันแก้ราคาย้อนหลัง' },
];

export function S08Polymorphism() {
  return (
    <Slide
      badge="OOP หลักการที่ 4 — Polymorphism"
      title="รันไทม์เลือกพฤติกรรมตามชนิดจริงของ object"
      subtitle="ไฟล์จริง: src/models/MonthlyPackage.ts · DailyPackage.ts · factories.ts"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CodeBlock
          code={CODE}
          filename="MonthlyPackage.ts + factories.ts"
          highlight={[4, 5, 6, 13, 19, 26]}
        />
        <div className="flex flex-col justify-center gap-4">
          {POINTS.map((p) => (
            <div key={p.t} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-base font-bold text-white">{p.t}</p>
              <p className="mt-1 text-sm text-slate-400">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}