import type { ReactNode } from 'react';

interface SlideProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  center?: boolean;
}

export function Slide({ badge, title, subtitle, children, center = false }: SlideProps) {
  return (
    <section className="flex min-h-full flex-col">
      {(badge || title) && (
        <header className="mb-7 shrink-0">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              {badge}
            </span>
          )}
          {title && <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-2 max-w-3xl text-sm text-slate-400 sm:text-base">{subtitle}</p>}
          <div className="mt-5 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </header>
      )}
      <div className={center ? 'flex min-h-0 flex-1 flex-col items-center justify-center' : 'min-h-0 flex-1'}>
        {children}
      </div>
    </section>
  );
}