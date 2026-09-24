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
          <div
            key={m.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-xl ring-1 ring-white/10 transition group-hover:from-emerald-500/30 group-hover:to-teal-500/30">
                {m.emoji}
              </span>
              <span className="text-base font-bold text-white">{m.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-sky-400/20 bg-gradient-to-r from-sky-500/10 to-teal-500/10 px-4 py-3 text-sm text-sky-100 backdrop-blur">
        <span className="font-bold text-sky-200">เทคโนโลยี:</span>
        <span>React + TypeScript + Tailwind CSS</span>
        <span className="text-sky-400/70">·</span>
        <span>ข้อมูลบันทึกใน localStorage</span>
        <span className="text-sky-400/70">·</span>
        <span>Hook useSyncExternalStore เชื่อมต่อ Singleton Service</span>
      </div>
    </Slide>
  );
}