import { Slide } from '../components/Slide';
import { CodeBlock } from '../components/CodeBlock';

const CODE = `// src/models/Member.ts
export abstract class Member extends Person {
  protected _memberNo: string;
  protected _package: Package | null; // composition
  protected _expiresAt: Date | null;

  suspend(): void {
    this._status = MemberStatus.SUSPENDED;
  }
  activate(): void {
    this._status = MemberStatus.ACTIVE;
  }

  hasAccess(now: Date = new Date()): boolean {
    return (
      this._status === MemberStatus.ACTIVE &&
      this._package !== null &&
      this._expiresAt !== null &&
      this._expiresAt > now
    );
  }
}

// src/models/StudentMember.ts
export class StudentMember extends Member {
  private _studentId: string;
  private _faculty: string;

  getRoleLabel(): string { return 'นิสิต'; }
  hasStudentDiscount(): boolean { return true; }
}`;

const LINES = [
  { name: 'สายที่ 1', desc: 'Person → Member → StudentMember / ExternalMember บวกด้วย Trainer' },
  { name: 'สายที่ 2', desc: 'Package → DailyPackage / MonthlyPackage' },
  { name: 'ใช้ code ร่วมกัน', desc: 'คลาสลูกสืบทอดคุณสมบัติ + เมธอดจากคลาสแม่ แล้วเพิ่มของตัวเอง' },
  { name: 'Composition', desc: 'Member เก็บ Package (has-a) — องค์ประกอบรวมกันเป็นหนึ่ง' },
];

export function S07Inheritance() {
  return (
    <Slide
      badge="OOP หลักการที่ 3 — Inheritance"
      title="สืบทอดจากคลาสแม่ เพิ่มเติมได้ตามชนิด"
      subtitle="ไฟล์จริง: src/models/Member.ts · StudentMember.ts · ExternalMember.ts · DailyPackage.ts · MonthlyPackage.ts"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          {LINES.map((l) => (
            <div key={l.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-base font-bold text-violet-300">{l.name}</p>
              <p className="mt-1 text-sm text-slate-400">{l.desc}</p>
            </div>
          ))}
        </div>
        <CodeBlock code={CODE} filename="Member.ts + StudentMember.ts" highlight={[2, 20, 26]} />
      </div>
    </Slide>
  );
}