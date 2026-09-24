import { useState } from 'react';

const KEYWORDS = new Set([
  'abstract', 'as', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default',
  'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'from', 'function',
  'get', 'if', 'implements', 'import', 'in', 'instanceof', 'interface', 'let', 'new',
  'null', 'private', 'protected', 'public', 'readonly', 'return', 'set', 'static', 'super',
  'switch', 'this', 'throw', 'true', 'try', 'type', 'typeof', 'undefined', 'var', 'void', 'while', 'yield',
]);

interface Tok {
  t: string;
  c: string;
}

function tokenize(line: string): Tok[] {
  const out: Tok[] = [];
  const re =
    /(\/\/.*$)|("(?:[^"\\]|\\.)*"?)|('(?:[^'\\]|\\.)*'?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|(\s+)|(.)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    const [, comment, dq, sq, num, ident, ws, punct] = m;
    if (comment) out.push({ t: comment, c: 'text-slate-500 italic' });
    else if (dq) out.push({ t: dq, c: 'text-amber-300' });
    else if (sq) out.push({ t: sq, c: 'text-amber-300' });
    else if (num) out.push({ t: num, c: 'text-orange-300' });
    else if (ident) {
      if (KEYWORDS.has(ident)) out.push({ t: ident, c: 'text-fuchsia-400 font-medium' });
      else if (/^[A-Z]/.test(ident)) out.push({ t: ident, c: 'text-sky-300' });
      else out.push({ t: ident, c: 'text-slate-200' });
    } else if (ws) out.push({ t: ws, c: '' });
    else out.push({ t: punct, c: 'text-slate-400' });
  }
  return out;
}

interface CodeBlockProps {
  code: string;
  filename?: string;
  highlight?: number[];
  className?: string;
}

export function CodeBlock({ code, filename = 'code.ts', highlight = [], className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, '').split('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard ไม่พร้อมใช้งาน */
    }
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-4 py-2">
        <span className="truncate font-mono text-xs text-slate-500">{filename}</span>
        <button
          onClick={copy}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
            copied ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
          }`}
        >
          {copied ? 'คัดลอกแล้ว' : 'คัดลอก'}
        </button>
      </div>
      <div className="overflow-x-auto py-3 text-[13px] leading-6">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => {
              const n = i + 1;
              const hl = highlight.includes(n);
              return (
                <tr key={n} className={hl ? 'bg-amber-400/10' : undefined}>
                  <td className="w-10 select-none px-2 text-right align-top font-mono text-slate-600">{n}</td>
                  <td className="whitespace-pre px-3 align-top font-mono">
                    {tokenize(line).map((t, j) =>
                      t.c ? (
                        <span key={j} className={t.c}>
                          {t.t}
                        </span>
                      ) : (
                        <span key={j}>{t.t}</span>
                      ),
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}