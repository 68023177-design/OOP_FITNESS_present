import { Slide } from '../components/Slide';
import { CodeBlock } from '../components/CodeBlock';

const CODE = `// src/models/Payment.ts
export class Payment {
  private _status: PaymentStatus;

  get status(): PaymentStatus { return this._status; }

  getStatusLabel(): string {
    switch (this._status) {
      case PaymentStatus.PAID: return 'ชำระแล้ว';
      case PaymentStatus.PENDING: return 'รอชำระ';
      case PaymentStatus.CANCELED: return 'ยกเลิก';
    }
  }

  /** Encapsulation: มีแต่ PENDING เท่านั้นที่ยืนยันชำระได้ */
  process(): void {
    if (this._status !== PaymentStatus.PENDING) {
      throw new Error('ไม่สามารถยืนยันการชำระนี้ได้');
    }
    this._status = PaymentStatus.PAID;
  }

  /** Encapsulation: มีแต่ PENDING เท่านั้นที่ยกเลิกได้ */
  cancel(): void {
    if (this._status !== PaymentStatus.PENDING) {
      throw new Error('ไม่สามารถยกเลิกการชำระนี้ได้');
    }
    this._status = PaymentStatus.CANCELED;
  }
}`;

const POINTS = [
  { t: 'ข้อมูลถูกซ่อน', d: 'private / protected — ภายนอกเข้าไม่ถึง field ตรง ๆ' },
  { t: 'เข้าถึงผ่านเมธอดเท่านั้น', d: 'getter/setter + method เปลี่ยนสถานะ (ห้ามแก้ตรง ๆ)' },
  { t: 'สถานะย้อนกลับไม่ได้', d: 'ชำระแล้วจะ process ซ้ำไม่ได้ · check-out แล้วย้อนไม่ได้' },
];

export function S06Encapsulation() {
  return (
    <Slide
      badge="OOP หลักการที่ 2 — Encapsulation"
      title="ห่อหุ้มข้อมูล ป้องกันความผิดพลาด"
      subtitle="ไฟล์จริง: src/models/Payment.ts · Visit.ts · Member.ts"
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
            เช่น <span className="font-mono">Visit.checkOut()</span> ทำได้ครั้งเดียว และคำนวณระยะเวลาให้อัตโนมัติ —
            ผู้ใช้ไม่สามารถตั้งเวลาเองผิด ๆ ได้
          </p>
        </div>
        <CodeBlock code={CODE} filename="src/models/Payment.ts" highlight={[4, 7, 16, 26]} />
      </div>
    </Slide>
  );
}