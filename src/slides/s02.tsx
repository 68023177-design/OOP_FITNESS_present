import { Slide } from '../components/Slide';

const MODULES = [
  { emoji: '👥', name: 'สมาชิก', desc: 'นิสิต / บุคคลภายนอก — เพิ่ม แก้ไข ลบ ระงับ เปิดใช้งาน' },
  { emoji: '🏷️', name: 'แพ็กเกจ', desc: 'รายวัน / รายเดือน — ปรับชื่อ ราคา สิทธิ์การใช้งาน' },
  { emoji: '💳', name: 'ชำระเงิน', desc: 'บันทึก ยืนยัน ยกเลิก — ส่วนลดนิสิต 20%' },
  { emoji: '🔄', name: 'เข้า-ออก', desc: 'Check-in / Check-out — คำนวณระยะเวลาอัตโนมัติ' },
  { emoji: '🏋️', name: 'เทรนเนอร์', desc: 'ความเชี่ยวชาญ + ตารางเวลาว่าง 7 วัน × 3 ช่วง' },
  { emoji: '🛠️', name: 'แจ้งปัญหา', desc: 'แจ้งซ่อมอุปกรณ์ — workflow 3 สถานะ' },
  { emoji: '📊', name: 'ภาพรวม', desc: 'Dashboard — สถิติ รายได้ แพ็กเกจใกล้หมดอายุ' },
];

export function S02Overview() {
  return (
    <Slide
      badge="ภาพรวมระบบ"
      title="ระบบจัดการศูนย์ฟิตเนส (ESS Fitness Center)"
      subtitle="แอปพลิเคชันเว็บครบวงจรสำหรับพนักงานศูนย์ฟิตเนส มหาวิทยาลัยพะเยา"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((m) => (
          <div key={m.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/40">
            <div className="flex items-center gap-2">
              <span className="text-xl">{m.emoji}</span>
              <span className="font-bold text-white">{m.name}</span>
            </div>
            <p className="mt-1.5 text-sm text-slate-400">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-100">
        <span className="font-semibold text-sky-50">เทคโนโลยี:</span>
        <span>React + TypeScript + Tailwind CSS</span>
        <span className="text-sky-400">·</span>
        <span>ข้อมูลบันทึกใน localStorage</span>
        <span className="text-sky-400">·</span>
        <span>Hook useSyncExternalStore เชื่อมต่อ Singleton Service</span>
      </div>
    </Slide>
  );
}