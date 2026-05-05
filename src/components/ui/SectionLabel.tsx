import { Separator } from "@/components/ui/separator";

export function SectionLabel({ label }: { label: string }) {
  return (
    <div>
      <h2 className="text-[14px] tracking-[0.25em] font-sans font-medium text-text-primary uppercase mb-3">
        {label}
      </h2>
      <Separator className="bg-[#2a2a2a]" />
    </div>
  );
}
