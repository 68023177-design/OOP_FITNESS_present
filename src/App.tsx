import { useCallback, useEffect, useState } from 'react';
import { slides, type SlideAccent } from './slides';

const GLOW: Record<SlideAccent, string> = {
  emerald: 'from-emerald-600/25',
  sky: 'from-sky-600/25',
  violet: 'from-violet-600/25',
  amber: 'from-amber-600/25',
  rose: 'from-rose-600/25',
  teal: 'from-teal-600/25',
};

const ACCENT_TEXT: Record<SlideAccent, string> = {
  emerald: 'text-emerald-400',
  sky: 'text-sky-400',
  violet: 'text-violet-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  teal: 'text-teal-400',
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
      className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-35 ${
        primary
          ? 'bg-emerald-600 text-white hover:bg-emerald-500'
          : 'border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500 hover:text-white'
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
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      {/* พื้นหลัง */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${GLOW[def.accent]} via-transparent to-transparent`} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.9) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-slate-800/60">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* fullscreen */}
      <button
        onClick={toggleFullscreen}
        className="absolute right-4 top-3 z-30 rounded-lg border border-slate-700 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-slate-500 hover:text-white"
      >
        ⛶ จอเต็ม (F)
      </button>

      {/* สไลด์ */}
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto">
        <div
          key={index}
          className={`${dir === 'next' ? 'slide-next' : 'slide-prev'} mx-auto min-h-full w-full max-w-6xl px-6 pb-28 pt-10 sm:px-10 lg:px-14`}
        >
          <Comp />
        </div>
      </div>

      {/* แถบควบคุมล่าง */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-4 pb-3 pt-12 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className={`font-mono text-sm font-bold ${ACCENT_TEXT[def.accent]}`}>{index + 1}</span>
            <span>/ {total}</span>
            <span className="ml-2 hidden truncate text-slate-500 sm:inline">{def.title}</span>
          </div>
          <div className="pointer-events-auto flex items-center gap-2">
            <NavBtn disabled={index === 0} onClick={() => go('prev')} label="◀ ย้อน" />
            <NavBtn disabled={index === total - 1} onClick={() => go('next')} label="ถัดไป ▶" primary />
          </div>
        </div>
      </div>
    </div>
  );
}