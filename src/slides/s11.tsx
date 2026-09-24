import { Slide } from '../components/Slide';

const STEPS = [
  { t: 'เริ่มระบบ', d: 'npm run dev — เปิดเว็บ http://localhost:5173' },
  { t: 'เติมข้อมูลตัวอย่าง', d: 'หน้าแรกกดปุ่ม "เติมข้อมูลตัวอย่าง (Demo)" → สมาชิก 5 คน แพ็กเกจ ชำระเงิน เข้า-ออก เทรนเนอร์ แจ้งปัญหา' },
  { t: 'สำรวจ Dashboard', d: 'สถิติสมาชิก · กำลังใช้บริการ · รายได้รวม · ปัญหาค้าง · แพ็กเกจใกล้หมดอายุ' },
  { t: 'สาธิต OOP บนหน้าจอจริง', d: 'หน้าสมาชิก: เพิ่มนิสิต (เห็น getRoleLabel / getExtraInfo) · หน้าชำระเงิน: เลือก Monthly เห็นส่วนลดนิสิต 20% (calcPrice)' },
  { t: 'สาธิต workflow', d: 'บันทึกชำระแบบรอชำระ → ยืนยัน → สมาชิกได้สิทธิ์ · Check-in → Check-out เห็นระยะเวลา · แจ้งปัญหา → เริ่มดำเนินการ → เสร็จสิ้น' },
];

export function S11Demo() {
  return (
    <Slide
      badge="เกณฑ์ที่ 5 — นำเสนอและสาธิต"
      title="เดินเรื่องการสาธิตในห้อง"
      subtitle="สาธิตตามลำดับนี้ จะโชว์ครบทั้งฟีเจอร์และจุด OOP ทุกข้อ"
    >
      <ol className="space-y-3">
        {STEPS.map((s, i) => (
          <li key={s.t} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-bold text-white">{s.t}</p>
              <p className="mt-1 text-sm text-slate-400">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          <span className="font-bold">ก่อนสาธิต:</span> ล้างข้อมูลจากรอบก่อนด้วย Ctrl+Shift+Delete (site data) หรือเปิด
          Incognito เพื่อให้ปุ่ม Demo กลับมาแสดง
        </div>
        <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-100">
          <span className="font-bold">ทองหลักการ:</span> ชี้โค้ดจริงไปพร้อมกัน เช่น calcPrice ในไฟล์ MonthlyPackage —
          อธิบายว่า "ทำไมนิสิตจ่ายน้อยกว่า"
        </div>
      </div>
    </Slide>
  );
}