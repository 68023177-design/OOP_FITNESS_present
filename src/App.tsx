import { useCallback, useEffect, useState } from 'react';
import { slides, type SlideAccent } from './slides';

const ACCENT_DEF: Record<SlideAccent, { orbA: string; orbB: string; text: string }> = {
  emerald: { orbA: 'bg-emerald-500/25', orbB: 'bg-teal-400/20', text: 'text-emerald-300' },
  sky: { orbA: 'bg-sky-500/25', orbB: 'bg-indigo-400/20', text: 'text-sky-300' },
  violet: { orbA: 'bg-violet-500/25', orbB: 'bg-fuchsia-400/20', text: 'text-violet-300' },
  amber: { orbA: 'bg-amber-500/25', orbB: 'bg-orange-400/20', text: 'text-amber-300' },
  rose: { orbA: 'bg-rose-500/25', orbB: 'bg-pink-400/20', text: 'text-rose-300' },
  teal: { orbA: 'bg-teal-500/25', orbB: 'bg-cyan-400/20', text: 'text-teal-300' },
};

function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
  } else {
    void document.documentElement.requestFullscreen().catch(() => undefined);
  }
}

function NavBtn({
  disabled,
  onClick,
  label,
  primary = false,
}: {
  disabled: boolean;
  onClick: () => void;
  label: string;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 ${
        primary
          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400'
          : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<'next' | 'prev'>('next');
  const total = slides.length;

  const go = useCallback(
    (d: 'next' | 'prev') => {
      setDir(d);
      setIndex((i) => {
        if (d === 'next') return Math.min(i + 1, total - 1);
        return Math.max(i - 1, 0);
      });
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const onButton = target && target.tagName === 'BUTTON' && (e.key === ' ' || e.key === 'Enter');
      if (onButton) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter') {
        e.preventDefault();
        go('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go('prev');
      } else if (e.key === 'Home') {
        setIndex(0);
      } else if (e.key === 'End') {
        setIndex(total - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total]);

  const def = slides[index];
  const Comp = def.Component;
  const accent = ACCENT_DEF[def.accent];
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#05070f] text-slate-100">
      {/* ---- พื้นหลังออร่า ---- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070f] via-[#0a1020] to-[#05070f]" />
      <div className={`absolute -left-40 -top-32 h-[34rem] w-[34rem] rounded-full ${accent.orbA} blur-[130px] animate-orb-1`} />
      <div className={`absolute -bottom-44 -right-32 h-[36rem] w-[36rem] rounded-full ${accent.orbB} blur-[140px] animate-orb-2`} />
      <div className={`absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full ${accent.orbA} opacity-60 blur-[110px] animate-orb-1`} />
      {/* ผืนจุด */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.9) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* แสงต้นบน */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/[0.05] to-transparent" />
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* ---- Progress bar ---- */}
      <div className="absolute inset-x-0 top-0 z-40 h-1 bg-white/5">
        <div
          className="relative h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          <span className="absolute -right-1 -top-1.5 h-3 w-3 rounded-full bg-emerald-300 shadow-lg shadow-emerald-400/70" />
        </div>
      </div>

      {/* ---- แถบบน ---- */}
      <header className="absolute inset-x-0 top-0 z-30 px-5 pt-6 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700 text-sm font-black text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/20">
              ESS
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">OOP Presentation</p>
              <p className="text-[11px] text-slate-500">Fitness Center · มหาวิทยาลัยพะเยา</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur md:inline-block">
              {def.title}
            </span>
            <button
              onClick={toggleFullscreen}
              title="เต็มจอ (F)"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              ⛶ เต็มจอ
            </button>
          </div>
        </div>
      </header>

      {/* ---- สไลด์ ---- */}
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto pb-52 pt-28">
        <div
          key={index}
          className={`${dir === 'next' ? 'slide-next' : 'slide-prev'} mx-auto min-h-full w-full max-w-6xl px-6 sm:px-10 lg:px-14`}
        >
          <Comp />
        </div>
      </div>

      {/* ---- แถบควบคุมล่าง ---- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-3 bg-gradient-to-t from-[#05070f] via-[#05070f]/70 to-transparent pb-4 pt-16">
        {/* จุดสไลด์ */}
        <div className="pointer-events-auto flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setDir(i > index ? 'next' : 'prev');
                setIndex(i);
              }}
              title={`${i + 1}. ${s.title}`}
              className={`rounded-full transition-all duration-300 ${
                i === index ? `h-2 w-7 ${accent.text} bg-current` : 'h-2 w-2 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-2 pl-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <NavBtn disabled={index === 0} onClick={() => go('prev')} label="◀ ย้อน" />
          <div className="min-w-[7rem] text-center leading-tight">
            <p className={`text-lg font-bold ${accent.text}`}>
              {index + 1}
              <span className="ml-1 text-sm font-medium text-slate-500">/ {total}</span>
            </p>
            <p className="truncate text-[10px] text-slate-400">{def.title}</p>
          </div>
          <NavBtn disabled={index === total - 1} onClick={() => go('next')} label="ถัดไป ▶" primary />
        </div>

        <p className="pointer-events-none hidden text-[11px] text-slate-500 sm:block">
          ← / → หรือ Space เลื่อน · Home จุดเริ่มต้น · End จุดจบ · F เต็มจอ
        </p>
      </div>
    </div>
  );
}