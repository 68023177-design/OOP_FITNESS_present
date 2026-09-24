export interface DiagramNode {
  name: string;
  note: string;
  abstract?: boolean;
  children?: DiagramNode[];
}

const ACCENTS: Record<string, { border: string; text: string }> = {
  emerald: { border: 'border-emerald-400/40', text: 'text-emerald-300' },
  sky: { border: 'border-sky-400/40', text: 'text-sky-300' },
};

function NodeCard({ node, accent }: { node: DiagramNode; accent: string }) {
  const a = ACCENTS[accent] ?? ACCENTS.emerald;
  return (
    <div className={`min-w-[10rem] rounded-xl border bg-slate-900/80 px-4 py-2.5 shadow-md ${a.border}`}>
      <div className={`flex items-center gap-2 font-mono text-sm font-bold ${a.text}`}>
        <span>{node.name}</span>
        {node.abstract && (
          <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-300">
            abstract
          </span>
        )}
      </div>
      <p className="mt-0.5 text-[11px] text-slate-400">{node.note}</p>
    </div>
  );
}

function Tree({
  node,
  accent,
  withStub = false,
}: {
  node: DiagramNode;
  accent: string;
  withStub?: boolean;
}) {
  const kids = node.children ?? [];
  return (
    <div className="flex flex-col items-center">
      {withStub && <div className="h-10 w-px bg-slate-500/70" />}
      <NodeCard node={node} accent={accent} />
      {kids.length > 0 && (
        <div
          className="mt-0 grid w-full"
          style={{ gridTemplateColumns: `repeat(${kids.length}, minmax(0, 1fr))` }}
        >
          <div className="relative col-span-full h-10">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-slate-500/70" />
            <div
              className="absolute bottom-0 h-px bg-slate-500/70"
              style={{
                left: `calc(100% / ${kids.length * 2})`,
                right: `calc(100% / ${kids.length * 2})`,
              }}
            />
          </div>
          {kids.map((k) => (
            <div key={k.name} className="min-w-0 px-3">
              <Tree node={k} accent={accent} withStub />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const PERSON_TREE: DiagramNode = {
  name: 'Person',
  note: 'คลาสฐานของบุคคล',
  abstract: true,
  children: [
    {
      name: 'Member',
      note: 'สมาชิกศูนย์',
      abstract: true,
      children: [
        { name: 'StudentMember', note: 'นิสิต · คณะ + รหัสนิสิต' },
        { name: 'ExternalMember', note: 'บุคคลภายนอก · บัตรประชาชน' },
      ],
    },
    { name: 'Trainer', note: 'พนักงาน · เวลาว่าง, ค่าโค้ช' },
  ],
};

const PACKAGE_TREE: DiagramNode = {
  name: 'Package',
  note: 'แพ็กเกจบริการ',
  abstract: true,
  children: [
    { name: 'DailyPackage', note: 'ราคาเต็มเสมอ' },
    { name: 'MonthlyPackage', note: 'นิสิตลดส่วนลด 20%' },
  ],
};

export function ClassDiagram() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold text-slate-300">
          สายสืบทอดที่ 1 — บุคคล (Person)
        </div>
        <Tree node={PERSON_TREE} accent="emerald" />
      </div>

      {/* Composition: Member has-a Package */}
      <div className="mx-auto flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-violet-400/40 bg-violet-500/10 px-5 py-3">
        <span className="rounded-lg border border-violet-400/40 bg-slate-900/80 px-2.5 py-1 font-mono text-sm font-bold text-violet-200">
          Member
        </span>
        <span className="text-lg text-slate-300">◆ —— ▷</span>
        <span className="rounded-lg border border-violet-400/40 bg-slate-900/80 px-2.5 py-1 font-mono text-sm font-bold text-violet-200">
          Package
        </span>
        <p className="w-full text-center text-xs text-violet-100/80 sm:w-auto sm:text-left">
          Composition (has-a) — สมาชิกเก็บแพ็กเกจที่ซื้อไว้
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold text-slate-300">
          สายสืบทอดที่ 2 — แพ็กเกจ (Package)
        </div>
        <Tree node={PACKAGE_TREE} accent="sky" />
      </div>
    </div>
  );
}