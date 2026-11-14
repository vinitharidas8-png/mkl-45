import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";

export default function ChangelogPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: REVISION AUDIT TRAIL</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          SYSTEM CHANGELOG
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Mil-spec hardware updates, token additions, and shadcn CLI registry distribution releases.
        </p>
      </div>

      <ChassisPlate title="RELEASE REV 8.4 [CURRENT PRODUCTION]" serial="REV-8.4-RELEASE">
        <div className="space-y-3 font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
          <div className="text-[var(--mkl-amb)] font-bold">// INITIAL PUBLIC SYSTEM ROLLOUT</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Synthesized 28 hardened physical hardware component primitives.</li>
            <li>Full shadcn CLI distribution integration via public registry JSON items.</li>
            <li>One-Click My Kit multi-component aggregation tray and ZIP download generator.</li>
            <li>CRT scanlines, 45-degree chamfers, and 80ms tactile mechanical keycap depression.</li>
          </ul>
        </div>
      </ChassisPlate>
    </div>
  );
}
