import { Slide } from '../components/Slide';
import { CodeBlock } from '../components/CodeBlock';

const CODE = `// src/models/Person.ts
export abstract class Person {
  protected _id: string;
  protected _name: string;
  protected _phone: string;
  protected _email: string;

  constructor(id: string, name: string, phone: string, email: string) {
    this._id = id;
    this._name = name;
    this._phone = phone;
    this._email = email;
  }

  get id(): string { return this._id; }
  get name(): string { return this._name; }
  set name(value: string) {
    if (value && value.trim()) this._name = value.trim();
  }

  /** คลาสลูกทุกตัวต้อง implement ให้ครบ (สัญญา) */
  abstract getRoleLabel(): string;
  abstract getTypeCode(): string;
}`;

const POINTS = [
  { t: 'คลาสนามธรรม = แม่แบบ', d: 'new Person() ตรง ๆ ไม่ได้ — ต้องมีคลาสลูกมาสืบทอดก่อน' },
  { t: 'abstract method = สัญญา', d: 'getRoleLabel() · getTypeCode() · calcPrice() ต้องถูก implement' },
  { t: 'UI เห็นเพียงภาพรวม', d: 'รายละเอียดถูกซ่อน ผู้ใช้รู้แค่ว่า "เรียกเมธอดได้"' },
];

export function S05Abstraction() {
  return (
    <Slide
      badge="OOP หลักการที่ 1 — Abstraction"
      title="ซ่อนรายละเอียด บอกเพียงความสามารถ"
      subtitle="ไฟล์จริง: src/models/Person.ts · src/models/Package.ts"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          {POINTS.map((p) => (
            <div key={p.t} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-base font-bold text-white">{p.t}</p>
              <p className="mt-1 text-sm text-slate-400">{p.d}</p>
            </div>
          ))}
          <p className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            ตัวอย่างอีกหนึ่งจุด — <span className="font-mono">Package.calcPrice(member)</span> คือสัญญาที่คลาสลูก
            แต่ละตัวนำไปคิดราคาตามสไตล์ของตัวเอง
          </p>
        </div>
        <CodeBlock code={CODE} filename="src/models/Person.ts" highlight={[2, 22, 23]} />
      </div>
    </Slide>
  );
}