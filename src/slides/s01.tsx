import { Slide } from '../components/Slide';

const CHIPS = ['Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism'];

export function S01Title() {
  return (
    <Slide>
      <div className="flex min-h-full flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-black text-white shadow-lg shadow-emerald-500/20">
          ESS
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">Fitness Center</h1>
        <p className="mt-4 text-lg text-slate-300 sm:text-2xl">ระบบจัดการศูนย์ฟิตเนส · การเขียนโปรแกรมเชิงวัตถุ (OOP)</p>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">Mini Project · มหาวิทยาลัยพะเยา</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CHIPS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-400">
          กด <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 font-mono">→</span> หรือ{' '}
          <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 font-mono">Space</span> เพื่อไปสไลด์ถัดไป
        </p>
      </div>
    </Slide>
  );
}