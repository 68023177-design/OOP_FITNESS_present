import { Slide } from '../components/Slide';

const CHIPS = ['Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism'];

export function S01Title() {
  return (
    <Slide>
      <div className="flex min-h-full flex-col items-center justify-center text-center">
        {/* โลโก้ + วงแหวนหมุน */}
        <div className="relative" style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both' }}>
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-emerald-500/40 via-teal-400/30 to-emerald-600/40 blur-2xl animate-pulse-slow" />
          <div className="absolute -inset-3 rounded-full border border-dashed border-white/20 animate-spin-slow" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700 text-3xl font-black text-white shadow-2xl shadow-emerald-500/40 ring-1 ring-white/30">
            ESS
          </div>
        </div>

        <h1
          className="mt-8 text-5xl font-black tracking-tight text-white sm:text-7xl"
          style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both' }}
        >
          Fitness Center
        </h1>

        <p
          className="mt-4 bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 bg-clip-text text-lg font-semibold text-transparent sm:text-2xl"
          style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.16s both' }}
        >
          ระบบจัดการศูนย์ฟิตเนส · การเขียนโปรแกรมเชิงวัตถุ (OOP)
        </p>
        <p
          className="mt-2 text-sm text-slate-500 sm:text-base"
          style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.22s both' }}
        >
          Mini Project · มหาวิทยาลัยพะเยา
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
          style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both' }}
        >
          {CHIPS.map((c, i) => (
            <span
              key={c}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-500/10 backdrop-blur transition hover:border-emerald-300/60 hover:bg-emerald-400/20"
              style={{ animation: `fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.36 + i * 0.07}s both` }}
            >
              {c}
            </span>
          ))}
        </div>

        <p
          className="mt-12 flex items-center gap-2 text-sm text-slate-400"
          style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both' }}
        >
          กด{' '}
          <span className="inline-flex h-7 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-xs text-white shadow-inner backdrop-blur">
            →
          </span>{' '}
          หรือ{' '}
          <span className="inline-flex h-7 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-2 font-mono text-xs text-white shadow-inner backdrop-blur">
            Space
          </span>{' '}
          เพื่อเริ่มนำเสนอ
        </p>
      </div>
    </Slide>
  );
}