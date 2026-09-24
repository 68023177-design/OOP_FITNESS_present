import { Slide } from '../components/Slide';

const FEATURES = [
  { module: 'สมาชิก', works: ['เพิ่ม สมาชิกนิสิต/ภายนอก', 'แก้ไข / ลบ', 'ระงับ / เปิดใช้งาน', 'ค้นหา'] },
  { module: 'แพ็กเกจ', works: ['ตั้งชื่อ / ราคา / สิทธิ์', 'แสดงส่วนลดนิสิต 20%', 'ดูวันเหลืออัตโนมัติ'] },
  { module: 'ชำระเงิน', works: ['คิดราคาอัตโนมัติ (Polymorphism)', 'บันทึก รอชำระ → ยืนยัน / ยกเลิก', 'สรุปรายได้รวม'] },
  { module: 'เข้า-ออก', works: ['Check-in ตรวจสิทธิ์ + ตรวจซ้ำ', 'Check-out คำนวณนาที', 'สถานะกำลังใช้บริการ'] },
  { module: 'เทรนเนอร์', works: ['CRUD ครบ', 'ความเชี่ยวชาญ', 'ตารางเวลาว่างรายวัน × ช่วง'] },
  { module: 'แจ้งปัญหา', works: ['แจ้งใหม่ → กำลังดำเนินการ → เสร็จสิ้น', 'บันทึกสรุปผลการซ่อม', 'ลบ/แก้ไข'] },
];

export function S10Features() {
  return (
    <Slide
      badge="เกณฑ์ที่ 3-4 — ระบบทำงานได้จริง + GUI"
      title="CRUD ครบทุกโมดูล ผ่านหน้าจอใช้งานจริง"
      subtitle="เว็บ responsive ใช้งานกับมือถือได้ — ทุกฟีเจอร์คลิกได้จริงในการสาธิต"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.module} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="font-bold text-white">{f.module}</p>
            <ul className="mt-2 space-y-1">
              {f.works.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {['Sidebar นำทาง 7 เมนู', 'Toast แจ้งผลสำเร็จ/ข้อผิดพลาด', 'Dialog ยืนยันก่อนลบ', 'หน้าจอว่าง (Empty State)'].map((gui) => (
          <div key={gui} className="rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2.5 text-xs text-slate-300">
            {gui}
          </div>
        ))}
      </div>
    </Slide>
  );
}