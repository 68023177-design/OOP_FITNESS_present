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
        <header className="mb-6 shrink-0">
          {badge && (
            <span className="inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300">
              {badge}
            </span>
          )}
          {title && <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{title}</h2>}
          {subtitle && <p className="mt-1 text-sm text-slate-400 sm:text-base">{subtitle}</p>}
        </header>
      )}
      <div className={center ? 'flex min-h-0 flex-1 flex-col items-center justify-center' : 'min-h-0 flex-1'}>
        {children}
      </div>
    </section>
  );
}