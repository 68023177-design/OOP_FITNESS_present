import { Slide } from '../components/Slide';

const RUBRIC = [
  { c: 'OOP ครบ 4 หลักการ', s: '4/4', d: 'Abstraction · Encapsulation · Inheritance · Polymorphism — มีโค้ดจริงและคำอธิบายกำกับ' },
  { c: 'จำนวนคลาส ≥ 5', s: '4/4', d: '11 คลาส สายสืบทอด 2 สาย + Composition (has-a)' },
  { c: 'ระบบทำงานได้จริง', s: '4/4', d: 'CRUD ครบทุกโมดูล ทำงานผ่าน GUI ได้จริง ข้อมูลเก็บถาวรใน localStorage' },
  { c: 'GUI และการใช้งาน', s: '4/4', d: 'เว็บ Responsive ใช้งานง่าย มีการแจ้งเตือน ยืนยันการลบ และหน้าว่าง' },
  { c: 'นำเสนอและสาธิต', s: '4/4', d: 'สาธิตจริง + เหตุผล OOP อ้างอิงตำแหน่งโค้ด (file:line)' },
];

export function S12Summary() {
  return (
    <Slide badge="สรุป" title="ตรงตามเกณฑ์การประเมินครบทุกข้อ">
      <div className="overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-200">เกณฑ์</th>
              <th className="px-4 py-3 font-semibold text-emerald-300">คะแนน</th>
              <th className="px-4 py-3 font-semibold text-slate-200">เหตุผล</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/50">
            {RUBRIC.map((r) => (
              <tr key={r.c}>
                <td className="px-4 py-3 font-bold text-white">{r.c}</td>
                <td className="px-4 py-3 font-mono font-bold text-emerald-400">{r.s}</td>
                <td className="px-4 py-3 text-slate-400">{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <p className="text-2xl font-bold text-white">ขอบคุณครับ 🙏</p>
        <p className="text-sm text-slate-400">
          ESS Fitness Center · การเขียนโปรแกรมเชิงวัตถุ (OOP) · มหาวิทยาลัยพะเยา
        </p>
      </div>
    </Slide>
  );
}